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
    <div className="font-serif max-w-4xl mx-auto p-8 bg-white">
      <header className="text-center mb-8">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-3xl font-bold text-gray-800 mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-lg text-gray-600 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.title}
        </p>
        <div className="mt-2 text-sm text-gray-600 flex flex-wrap justify-center gap-x-4">
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.email}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.phone}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.address}
          </span>
        </div>
      </header>

      <section className="mb-6">
        <h2 
          contentEditable
          suppressContentEditableWarning
          className="text-xl font-bold text-gray-800 uppercase text-center mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          Research Profile
        </h2>
        <div className="border-t border-b border-gray-300 py-4">
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left column - Education & Skills */}
        <div className="md:col-span-1">
          <section className="mb-8">
            <h2 
              contentEditable
              suppressContentEditableWarning
              className="text-xl font-bold text-gray-800 uppercase mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              Education
            </h2>
            <div className="border-t border-gray-300 pt-4">
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="font-semibold text-gray-700 mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.institution}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-600 mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.date}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 
              contentEditable
              suppressContentEditableWarning
              className="text-xl font-bold text-gray-800 uppercase mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              Research Skills
            </h2>
            <div className="border-t border-gray-300 py-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    contentEditable
                    suppressContentEditableWarning
                    className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200"
                  >
                    {`${skill.name} (${skill.level})`}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right column - Research Experience & Publications */}
        <div className="md:col-span-3">
          <section className="mb-6">
            <h2 
              contentEditable
              suppressContentEditableWarning
              className="text-xl font-bold text-gray-800 uppercase mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              Research Experience
            </h2>
            <div className="border-t border-gray-300 pt-4">
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3
                      contentEditable
                      suppressContentEditableWarning
                      className="font-bold text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                    >
                      {exp.position}
                    </h3>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      className="text-gray-600 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                    >
                      {exp.date}
                    </span>
                  </div>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="font-semibold text-gray-700 mb-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {exp.company}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {exp.description}
                  </p>
                  {index < experience.length - 1 && <hr className="my-4" />}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 
              contentEditable
              suppressContentEditableWarning
              className="text-xl font-bold text-gray-800 uppercase mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              Selected Publications
            </h2>
            <div className="border-t border-gray-300 pt-4">
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  Author, A., Author, B., & {personalInfo.name.split(",")[0]} (2023). Example research paper title.{" "}
                  <i>Journal of Important Research, 45</i>(2), 123-145.
                </li>
                <li
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {personalInfo.name.split(",")[0]}, Author, C., & Author, D. (2022). Another example research paper with
                  a longer title that spans multiple lines. <i>International Science Review, 12</i>(4), 78-92.
                </li>
                <li
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  Author, E., {personalInfo.name.split(",")[0]}, & Author, F. (2021). Third example research paper title.{" "}
                  <i>Research Quarterly, 33</i>(1), 45-67.
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-6">
            <h2 
              contentEditable
              suppressContentEditableWarning
              className="text-xl font-bold text-gray-800 uppercase mb-3 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              Research Grants
            </h2>
            <div className="border-t border-gray-300 pt-4">
              <ul className="space-y-3">
                <li
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  <span className="font-bold">National Science Foundation Grant</span> - &quot;Investigation of Genetic Markers in Cancer Development&quot; (2022-2025) - $750,000
                </li>
                <li
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  <span className="font-bold">University Research Fund</span> - &quot;Novel Approaches to Cancer Detection&quot; (2020-2022) - $250,000
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-8 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
        <p 
          contentEditable
          suppressContentEditableWarning
          className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          Curriculum Vitae - Last Updated: April 2025
        </p>
      </footer>
    </div>
  )
}