"use client";

import { type ResumeData } from "@/lib/types";

interface TemplateProps {
  resumeData: ResumeData;
}

export default function ProfessionalTemplate({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div className="">
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Summary</h2>
        <p
          contentEditable
          suppressContentEditableWarning
          className="text-gray-700 mt-2 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
        >
          {personalInfo.summary}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Technical Skills</h2>
        <ul className="grid grid-cols-2 gap-2 mt-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {skill.name} ({skill.level})
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mt-4">
            <h3
              contentEditable
              suppressContentEditableWarning
              className="font-bold text-gray-800 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.title}
            </h3>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-600 italic focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.company} | {exp.period}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {exp.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mt-4">
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
              className="text-gray-600 italic focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.institution} | {edu.date}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 mt-1 focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
            >
              {edu.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Contact</h2>
        <ul className="text-gray-700 mt-2">
          <li
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            Email: {personalInfo.email}
          </li>
          <li
            contentEditable
            suppressContentEditableWarning
            className="focus:outline-none focus:bg-blue-50 focus:ring-1 focus:ring-blue-200 rounded px-1"
          >
            Phone: {personalInfo.phone}
          </li>
          {/* <li>LinkedIn: {personalInfo.linkedin}</li> */}
          {/* <li>GitHub: {personalInfo.github}</li> */}
        </ul>
      </section>
    </div>
  );
}
