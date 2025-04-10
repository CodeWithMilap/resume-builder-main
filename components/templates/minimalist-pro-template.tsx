"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function MinimalistProTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-sans max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8">
      <header className="mb-10 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
            >
              {personalInfo.name}
            </h1>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-lg text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
            >
              {personalInfo.title}
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-y-1 text-right">
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
            >
              {personalInfo.email}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
            >
              {personalInfo.phone}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
            >
              {personalInfo.address}
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-lg font-medium text-gray-900 dark:text-gray-100 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                  >
                    {exp.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 mb-2 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {exp.company}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-lg font-medium text-gray-900 dark:text-gray-100 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 mb-2 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </section>
        </div>

        <div>
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              About
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
            >
              {personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              Skills
            </h2>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <div className="w-1/2 bg-gray-200 dark:bg-gray-600 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-gray-500 dark:bg-gray-300 h-full rounded-full"
                      style={{
                        width:
                          skill.level === "Beginner"
                            ? "25%"
                            : skill.level === "Intermediate"
                              ? "50%"
                              : skill.level === "Advanced"
                                ? "75%"
                                : "100%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

