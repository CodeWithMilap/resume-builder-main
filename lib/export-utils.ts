export const exportToPDF = async (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  if (!element) return alert("Resume preview not found!");

  const html = element.outerHTML;

  // Extract Tailwind styles from the document
  const styles = Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules).map((rule) => rule.cssText).join("\n");
      } catch (e) {
        console.warn('Could not extract styles:', e);
        return "";
      }
    })
    .join("\n");

  const response = await fetch("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "pdf", fileName, html, styles }),
  });

  if (!response.ok) {
    console.error("Failed to export PDF");
    return alert("Failed to export PDF");
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.pdf`;
  link.click();

  URL.revokeObjectURL(url);
}