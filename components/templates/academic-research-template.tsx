"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function AcademicResearchTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name, Ph.D.",
      title: "Research Scientist",
      email: "researcher@university.edu",
      phone: "(123) 456-7890",
      address: "Cambridge, MA",
      summary:
        "Dedicated researcher with expertise in molecular biology and genetics, with a focus on cancer research.",
    },
    experience: [
      {
        company: "University Research Lab",
        position: "Principal Investigator",
        date: "2018 - Present",
        description: "Leading research on genetic markers for early cancer detection.",
      },
    ],
    education: [
      {
        institution: "Harvard University",
        degree: "Ph.D. in Molecular Biology",
        date: "2012 - 2018",
        description: "Dissertation on genetic factors in cancer development.",
      },
    ],
    skills: [
      { name: "Genomic Analysis", level: "Expert" },
      { name: "Laboratory Techniques", level: "Expert" },
      { name: "Research Methodology", level: "Expert" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-serif bg-white dark:bg-gray-900 max-w-4xl mx-auto p-8">
      <header className="text-center mb-8 pb-4 border-b-2 border-gray-300 dark:border-gray-700">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-xl text-gray-700 dark:text-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
        >
          {personalInfo.title}
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 text-sm text-gray-600 dark:text-gray-400">
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          >
            {personalInfo.email}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          >
            {personalInfo.phone}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          >
            {personalInfo.address}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left column - Education & Skills */}
        <div className="md:col-span-1">
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-2">
              Education
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 italic mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {edu.date}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-2">
              Research Skills
            </h2>

            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{skill.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column - Research Profile & Experience */}
        <div className="md:col-span-3">
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-2">
              Research Profile
            </h2>

            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              {personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-2">
              Research Experience
            </h2>

            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 italic mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {exp.company}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </section>

          {/* Publications Section - Common in academic CVs */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-2">
              Selected Publications
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li
                contentEditable
                suppressContentEditableWarning
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                Author, A., Author, B., & {personalInfo.name.split(",")[0]} (2023). Example research paper title.{" "}
                <i>Journal of Important Research, 45</i>(2), 123-145.
              </li>
              <li
                contentEditable
                suppressContentEditableWarning
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                {personalInfo.name.split(",")[0]}, Author, C., & Author, D. (2022). Another example research paper with
                a longer title that spans multiple lines. <i>International Science Review, 12</i>(4), 78-92.
              </li>
              <li
                contentEditable
                suppressContentEditableWarning
                className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                Author, E., {personalInfo.name.split(",")[0]}, & Author, F. (2021). Third example research paper title.{" "}
                <i>Research Quarterly, 33</i>(1), 45-67.
              </li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Curriculum Vitae - Last Updated: March 2025</p>
      </footer>
    </div>
  )
}

