"use client"

import { type ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function MinimalTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData
  
  return (
    <div className="font-sans">
      <header className="mb-8">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-3xl font-bold text-gray-900 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
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
        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.email}
          </span>
          <span>•</span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.phone}
          </span>
          <span>•</span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.address}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-2">About</h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-2">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
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
                    className="text-sm text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.company}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 text-sm mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-2">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
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
                    className="text-sm text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 text-sm mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                contentEditable
                suppressContentEditableWarning
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

