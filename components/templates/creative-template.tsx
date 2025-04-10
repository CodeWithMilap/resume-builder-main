"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function CreativeTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-sans max-w-4xl mx-auto">
      <header className="relative mb-16 pb-8 border-b-4 border-purple-500 dark:border-purple-400">
        <div className="absolute -top-6 right-0 w-32 h-32 bg-purple-500 dark:bg-purple-400 rounded-full -z-10 opacity-10"></div>
        <div className="absolute -bottom-6 left-0 w-24 h-24 bg-yellow-500 dark:bg-yellow-400 rounded-full -z-10 opacity-10"></div>

        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300 mb-2 focus:outline-none focus:ring-1 focus:ring-purple-200 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-xl text-gray-700 dark:text-gray-300 mb-4 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
        >
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
          >
            {personalInfo.email}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
          >
            {personalInfo.phone}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
          >
            {personalInfo.address}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                01
              </span>
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-200 dark:before:bg-purple-800"
              >
                <div className="absolute left-0 top-0 w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full -translate-x-[3px]"></div>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-purple-500 dark:text-purple-400 font-medium focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                  >
                    {exp.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 font-medium mb-1 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                >
                  {exp.company}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                02
              </span>
              Education
            </h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-purple-200 dark:before:bg-purple-800"
              >
                <div className="absolute left-0 top-0 w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full -translate-x-[3px]"></div>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-purple-500 dark:text-purple-400 font-medium focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 font-medium mb-1 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </section>
        </div>

        <div className="md:col-span-4">
          <section className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                03
              </span>
              About Me
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-purple-50 dark:focus:bg-purple-900/30 focus:ring-1 focus:ring-purple-200 rounded px-1"
            >
              {personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                04
              </span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  contentEditable
                  suppressContentEditableWarning
                  className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-gray-800 dark:text-gray-200 text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-purple-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

