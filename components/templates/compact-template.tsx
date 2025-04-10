"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function CompactTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-sans max-w-4xl mx-auto text-sm">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-gray-300 dark:border-gray-700 pb-4 mb-4">
        <div>
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.title}
          </p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.email}
          </p>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.phone}
          </p>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.address}
          </p>
        </div>
      </header>

      <section className="mb-4">
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.summary}
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">
          Experience
        </h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.position}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.company}
                </span>
              </div>
              <span
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 text-xs focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {exp.date}
              </span>
            </div>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 mt-1 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.institution}
                </span>
              </div>
              <span
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 text-xs focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {edu.date}
              </span>
            </div>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 mt-1 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.description}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700 pb-1 mb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <span
              key={index}
              contentEditable
              suppressContentEditableWarning
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded mr-1 mb-1 inline-block focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

