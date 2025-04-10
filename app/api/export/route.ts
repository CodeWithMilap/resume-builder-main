import puppeteer from "puppeteer-core"
import chromium from "@sparticuz/chromium"
import { NextRequest, NextResponse } from "next/server"

chromium.setGraphicsMode = false
const isDev = process.env.NODE_ENV === "development"

export async function POST(req: NextRequest) {
  try {
    const { type, fileName, html, styles } = await req.json()
    if (!html) return NextResponse.json({ error: "No HTML content" }, { status: 400 })

    // Dynamic import for development-only package
    const executablePath = isDev
      ? (await import("puppeteer")).default.executablePath()
      : await chromium.executablePath()

    const browser = await puppeteer.launch({
      args: isDev ? [] : chromium.args,
      executablePath,
      headless: true,
    })

    const page = await browser.newPage()
    
    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${styles || ""}</style>
        </head>
        <body style="margin: 0">${html}</body>
      </html>
    `

    await page.setContent(fullHtml, { waitUntil: "networkidle0" })

    if (type === "pdf") {
      const pdfBuffer = await page.pdf({
        format: "a4",
        printBackground: true,
        margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
        timeout: 60000
      })

      await browser.close()
      return new NextResponse(pdfBuffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${fileName || "document"}.pdf"`,
        },
      })
    }

    await browser.close()
    return NextResponse.json({ error: "Invalid type" }, { status: 400 })
    
  } catch (error) {
    console.error("PDF generation failed:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Generation failed" },
      { status: 500 }
    )
  }
}