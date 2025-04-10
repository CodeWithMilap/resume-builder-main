"use client"

import { type ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function ModernTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-sans">
      <header className="border-l-4 border-blue-500 pl-4 mb-6">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-3xl font-bold text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.name}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-lg text-blue-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.title}
        </p>
      </header>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">
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
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Work Experience</h2>
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
                    className="text-sm text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
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
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Education</h2>
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
                    className="text-sm text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
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
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Contact</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {personalInfo.email}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span>{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {personalInfo.phone}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Address:</span>{" "}
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

          <section className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-1 mb-3">Skills</h2>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between">
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

