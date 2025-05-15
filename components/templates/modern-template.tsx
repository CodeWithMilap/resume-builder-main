"use client";

import { type ResumeData } from "@/lib/types";

interface TemplateProps {
  resumeData: ResumeData;
}

export default function ModernTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills, links } = resumeData;

  return (
    <div className="font-sans text-sm">
      <header className="border-l-4 border-blue-500 pl-4 mb-6">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-2xl font-bold text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-base text-blue-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.title}
        </p>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">
              Professional Summary
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {personalInfo.summary}
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Work Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-medium text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {exp.title}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-xs text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.company}
                </p>
                {exp.position && (
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      className="text-sm text-gray-600 italic focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-blue-400 rounded px-2 py-1 transition-all"
                    >
                      {exp.position}
                    </p>
                  )}
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.date}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-medium text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-xs text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </section>
        </div>

        <div className="col-span-1">
          <section className="mb-6 bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Contact</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-bold">Email:</span>{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {personalInfo.email}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Phone:</span>{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {personalInfo.phone}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Address:</span>{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {personalInfo.address}
                </span>
              </p>
            </div>
          </section>

          <section className="mb-6 bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Links</h2>
            <div className="space-y-2">
              {personalInfo.linkedin && (
                <p className="text-gray-600">
                  <span className="font-bold">LinkedIn:</span>{" "}
                  <a
                    href={personalInfo.linkedin}
                    contentEditable
                    suppressContentEditableWarning
                    className="text-blue-500 hover:underline text-xs focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {personalInfo.linkedin}
                  </a>
                </p>
              )}
              {links?.portfolio && (
                <p className="text-gray-600">
                  <span className="font-bold">Portfolio:</span>{" "}
                  <a
                    href={links.portfolio}
                    contentEditable
                    suppressContentEditableWarning
                    className="text-blue-500 text-xs hover:underline focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {links.portfolio}
                  </a>
                </p>
              )}
              {links?.github && (
                <p className="text-gray-600">
                  <span className="font-bold">GitHub:</span>{" "}
                  <a
                    href={links.github}
                    contentEditable
                    suppressContentEditableWarning
                    className="text-blue-500 text-xs hover:underline focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {links.github}
                  </a>
                </p>
              )}
            </div>
          </section>

          <section className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  contentEditable
                  suppressContentEditableWarning
                  className="text-xs text-gray-700 bg-white px-2 py-1 rounded-full shadow-sm hover:bg-blue-100 focus:outline-none focus:bg-blue-100 focus:ring-2 focus:ring-blue-400 transition-all"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
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
    // Note: Levels are ignored in the UI
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/milapdav",
    portfolio: "https://milapdave.com", // Replace with your actual portfolio URL
    github: "https://github.com/milapdave" // Replace with your actual GitHub URL
  }
};