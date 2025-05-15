"use client";

import { ResumeData } from "@/lib/types";

interface TemplateProps {
  resumeData: ResumeData;
}

export default function MilapDaveResumeTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills, links } = resumeData;

  return (
    <div className="font-[Times_New_Roman] max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <header className="text-center mb-8">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-4xl font-bold text-[#1f2937] mb-2 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-xl text-[#4b5563] mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.title}
        </p>
        <div className="mt-2 text-sm text-[#4b5563]">
          <span
            contentEditable
            suppressContentEditableWarning
            className="mr-4 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.email}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="mr-4 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.phone}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="mr-4 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.address}
          </span>
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              contentEditable
              suppressContentEditableWarning
              className="text-[#2563eb] hover:underline mr-4 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              LinkedIn
            </a>
          )}
          {links?.portfolio && (
            <a
              href={links.portfolio}
              contentEditable
              suppressContentEditableWarning
              className="text-[#2563eb] hover:underline mr-4 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              Portfolio
            </a>
          )}
          {links?.github && (
            <a
              href={links.github}
              contentEditable
              suppressContentEditableWarning
              className="text-[#2563eb] hover:underline focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#1f2937] mb-3 border-b-2 border-[#d1d5db] pb-2">Professional Summary</h2>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-[#374151] leading-relaxed focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.summary}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#1f2937] mb-3 border-b-2 border-[#d1d5db] pb-2">Professional Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="mb-1">
              <h3
                contentEditable
                suppressContentEditableWarning
                className="inline text-lg font-semibold text-[#1f2937] focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {exp.title}
              </h3>
              <span
                contentEditable
                suppressContentEditableWarning
                className="float-right text-sm text-[#6b7280] focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {exp.period}
              </span>
            </div>
            <p
              contentEditable
              suppressContentEditableWarning
              className="font-medium text-[#374151] mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.company}
            </p>
            {exp.position && (
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-[#6b7280] italic mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {exp.position}
              </p>
            )}
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-[#374151] mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.date}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-[#374151] focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#1f2937] mb-3 border-b-2 border-[#d1d5db] pb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="mb-1">
              <h3
                contentEditable
                suppressContentEditableWarning
                className="inline text-lg font-semibold text-[#1f2937] focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {edu.degree}
              </h3>
              <span
                contentEditable
                suppressContentEditableWarning
                className="float-right text-sm text-[#6b7280] focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {edu.date}
              </span>
            </div>
            <p
              contentEditable
              suppressContentEditableWarning
              className="font-medium text-[#374151] mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.institution}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-[#374151] focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#1f2937] mb-3 border-b-2 border-[#d1d5db] pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              contentEditable
              suppressContentEditableWarning
              className="bg-[#dbeafe] text-[#1e40af] px-3 py-1 text-sm font-medium focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200"
            >
              {`${skill.name} (${skill.level})`}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

// Example usage with Milap Dave's data
export const milapDaveResumeData: ResumeData = {
  personalInfo: {
    name: "Milap Dave",
    title: "Front End Engineer",
    email: "dave.milap3@gmail.com",
    phone: "9013706142",
    address: "Rajkot, Gujarat, India", // Inferred from experience location
    summary:
      "Experienced Frontend Developer with a strong background in building websites and web applications. Proficient in JavaScript, HTML5, CSS, and skilled in modern frameworks including ReactJS, jQuery, Bootstrap, Tailwind CSS, and GatsbyJS. Expertise in CMS platforms such as WordPress and proficient in using tools like Git, Sass, Gulp, Webpack, and Adobe Photoshop. Strong understanding of AJAX and responsive design techniques to create dynamic and user-friendly interfaces. Key Achievement: Developed high-performance websites using Next.js and GatsbyJS, resulting in significant improvements in site speed, user experience, and SEO.",
    linkedin: "https://www.linkedin.com/in/milapdav"
  },
  education: [
    {
      institution: "Dr. V.R.Godhaniya Collage",
      degree: "M.Sc (IT & CA)",
      date: "01/2012 - 01/2013",
      description: "Specialized in Information Technology."
    },
    {
      institution: "K.K.Parekh",
      degree: "Bachelor of Commerce (BCom)",
      date: "01/2010 - 01/2011",
      description: "Focused on Computer Science."
    }
  ],
  experience: [
    {
      company: "Soft 'n' Web",
      title: "Front End Developer",
      date: "04/2016 - Present",
      period: "04/2016 - Present",
      description:
        "Developed and maintained web applications using JavaScript, ReactJS, and Tailwind CSS. Collaborated with teams to implement responsive designs and optimize performance."
    },
    {
      company: "Epixelinfoway",
      title: "Front End Developer",
      date: "03/2015 - 02/2016",
      period: "03/2015 - 02/2016",
      description:
        "Built user-friendly interfaces with HTML5, CSS, and jQuery. Integrated WordPress CMS for dynamic content management."
    },
    {
      company: "Digitize-info",
      title: "Front End Developer",
      date: "02/2014 - 02/2015",
      period: "02/2014 - 02/2015",
      description:
        "Designed and developed websites using Bootstrap and JavaScript, focusing on cross-browser compatibility and SEO optimization."
    }
  ],
  skills: [
    { name: "JavaScript", level: "Expert" },
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "HTML5", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "WordPress", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "Sass", level: "Advanced" },
    { name: "Gulp", level: "Intermediate" },
    { name: "Webpack", level: "Intermediate" },
    { name: "Adobe Photoshop", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" }
    // Note: Levels are assumed; adjust based on your expertise
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/milapdav",
    portfolio: "https://milapdave.com", // Replace with your actual portfolio URL
    github: "https://github.com/milapdave" // Replace with your actual GitHub URL
  }
};