import ResumeBuilder from "@/components/resume-builder";

export const metadata = {
  title: "Home - Professional Resume Builder",
  description: "Welcome to the Resume Builder. Create your professional resume in minutes with our intuitive interface.",
  keywords: "resume builder, create resume, professional CV, job application tool",
  openGraph: {
    title: "Home - Professional Resume Builder",
    description: "Welcome to the Resume Builder. Create your professional resume in minutes with our intuitive interface.",
    url: "https://milapdave.com", // Replace with your actual URL
    images: [
      {
        url: "https://milap.com/home-og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Resume Builder Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Professional Resume Builder",
    description: "Welcome to the Resume Builder. Create your professional resume in minutes with our intuitive interface.",
    image: "https://milap.com/home-twitter-image.jpg", // Replace with your actual image URL
  },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <ResumeBuilder />
    </main>
  );
}
