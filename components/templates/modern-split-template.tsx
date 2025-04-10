"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function ModernSplitTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-sans max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left Column - Header */}
        <div className="md:col-span-2 bg-indigo-600 dark:bg-indigo-800 text-white p-8">
          <header className="mb-8">
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-3xl font-bold mb-2 focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
            >
              {personalInfo.name}
            </h1>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-xl text-indigo-200 mb-4 focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
            >
              {personalInfo.title}
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-lg font-semibold border-b border-indigo-500 pb-2 mb-3">Contact</h2>
            <div className="space-y-2 text-indigo-100">
              <p>
                <span className="block text-xs text-indigo-300">Email</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
                >
                  {personalInfo.email}
                </span>
              </p>
              <p>
                <span className="block text-xs text-indigo-300">Phone</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
                >
                  {personalInfo.phone}
                </span>
              </p>
              <p>
                <span className="block text-xs text-indigo-300">Address</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
                >
                  {personalInfo.address}
                </span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold border-b border-indigo-500 pb-2 mb-3">Skills</h2>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      className="text-indigo-100 focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
                    >
                      {skill.name}
                    </span>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      className="text-xs text-indigo-300 focus:outline-none focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-1 focus:ring-indigo-300 rounded px-1"
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-indigo-700 dark:bg-indigo-900 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-white h-full rounded-full"
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

        {/* Right Column - Content */}
        <div className="md:col-span-3 bg-white dark:bg-gray-800 p-8">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                01
              </div>
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
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                02
              </div>
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-100 dark:before:bg-indigo-900"
              >
                <div className="absolute left-0 top-0 w-2 h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full -translate-x-[3px]"></div>
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
                    className="text-sm text-indigo-600 dark:text-indigo-400 font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
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
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <div className="w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                03
              </div>
              Education
            </h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-100 dark:before:bg-indigo-900"
              >
                <div className="absolute left-0 top-0 w-2 h-2 bg-indigo-600 dark:bg-indigo-500 rounded-full -translate-x-[3px]"></div>
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
                    className="text-sm text-indigo-600 dark:text-indigo-400 font-medium focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 rounded px-1"
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
    </div>
  )
}

