"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function ExecutiveTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-serif max-w-4xl mx-auto">
      <header className="border-b-2 border-gray-800 dark:border-gray-200 pb-6 mb-6">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-xl text-gray-700 dark:text-gray-300 mb-4 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.email}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.phone}
          </span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.address}
          </span>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Executive Summary</h2>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.summary}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Professional Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-2 mb-2">
              <h3
                contentEditable
                suppressContentEditableWarning
                className="text-xl font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {exp.position}
              </h3>
              <span
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {exp.date}
              </span>
            </div>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.company}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-2 mb-2">
              <h3
                contentEditable
                suppressContentEditableWarning
                className="text-xl font-semibold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {edu.degree}
              </h3>
              <span
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {edu.date}
              </span>
            </div>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.institution}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.description}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Core Competencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full mr-2"></div>
              <span
                contentEditable
                suppressContentEditableWarning
                className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

