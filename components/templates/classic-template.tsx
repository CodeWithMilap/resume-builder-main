"use client";

import { type ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData: ResumeData
}

export default function ClassicTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData

  return (
    <div className="font-serif">
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
        <h2 className="text-xl font-bold text-gray-800 uppercase text-center mb-3">
          Professional Summary
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

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 uppercase text-center mb-3">
          Professional Experience
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
                  {exp.title}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {exp.period}
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
        <h2 className="text-xl font-bold text-gray-800 uppercase text-center mb-3">
          Education
        </h2>
        <div className="border-t border-gray-300 pt-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
                >
                  {edu.date}
                </span>
              </div>
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
                className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
              >
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 uppercase text-center mb-3">
          Skills
        </h2>
        <div className="border-t border-b border-gray-300 py-4">
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
  );
}
