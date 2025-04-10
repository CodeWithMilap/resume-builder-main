"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function SidebarTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-sans max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
      <div className="bg-gray-800 dark:bg-gray-900 text-white p-6 md:p-8">
        <div className="sticky top-0">
          <header className="mb-8">
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-2xl font-bold mb-2 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-500 rounded px-1"
            >
              {personalInfo.name}
            </h1>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-300 mb-4 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-500 rounded px-1"
            >
              {personalInfo.title}
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-3">Contact</h2>
            <div className="space-y-2 text-gray-300">
              <p className="flex flex-col">
                <span className="text-xs text-gray-400">Email</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-500 rounded px-1"
                >
                  {personalInfo.email}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-xs text-gray-400">Phone</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-500 rounded px-1"
                >
                  {personalInfo.phone}
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-xs text-gray-400">Address</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-500 rounded px-1"
                >
                  {personalInfo.address}
                </span>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold border-b border-gray-600 pb-2 mb-3">Skills</h2>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col">
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-200 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-500 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <div className="w-full bg-gray-600 h-1.5 mt-1 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-400 h-full rounded-full"
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

      <div className="bg-white dark:bg-gray-800 p-6 md:p-8 md:col-span-2">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-400 pb-2 mb-4 inline-block">
            About Me
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-400 pb-2 mb-4 inline-block">
            Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="text-lg font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {exp.position}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-teal-600 dark:text-teal-400 font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {exp.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-700 dark:text-gray-300 font-medium mb-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
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
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-teal-400 pb-2 mb-4 inline-block">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="text-lg font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-teal-600 dark:text-teal-400 font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
                >
                  {edu.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-700 dark:text-gray-300 font-medium mb-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
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
    </div>
  )
}

