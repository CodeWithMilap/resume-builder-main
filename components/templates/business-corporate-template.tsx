"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function BusinessCorporateTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Business Executive",
      email: "executive@company.com",
      phone: "(123) 456-7890",
      address: "New York, NY",
      summary:
        "Results-driven business executive with expertise in strategic planning, team leadership, and operational excellence.",
    },
    experience: [
      {
        company: "Fortune 500 Company",
        position: "Senior Director",
        date: "2018 - Present",
        description: "Leading strategic initiatives and driving business growth across multiple departments.",
      },
    ],
    education: [
      {
        institution: "Business School",
        degree: "MBA, Business Administration",
        date: "2012 - 2014",
        description: "Specialized in finance and strategic management.",
      },
    ],
    skills: [
      { name: "Strategic Planning", level: "Expert" },
      { name: "Team Leadership", level: "Expert" },
      { name: "Financial Analysis", level: "Advanced" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-sans bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Professional header with business aesthetic */}
      <header className="bg-gray-100 dark:bg-gray-800 p-8 border-b-4 border-blue-700 dark:border-blue-600">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h1
              contentEditable
              suppressContentEditableWarning
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              {personalInfo.name}
            </h1>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-xl text-blue-700 dark:text-blue-400 font-medium mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              {personalInfo.title}
            </p>
          </div>

          <div className="mt-4 md:mt-0 space-y-1 text-right">
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 flex items-center justify-end focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              <svg
                className="w-4 h-4 ml-auto mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {personalInfo.email}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 flex items-center justify-end focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              <svg
                className="w-4 h-4 ml-auto mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {personalInfo.phone}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 flex items-center justify-end focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              <svg
                className="w-4 h-4 ml-auto mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {personalInfo.address}
            </p>
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Executive Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Executive Summary
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Professional Experience
          </h2>

          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <div>
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-lg font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-blue-700 dark:text-blue-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {exp.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                {exp.description}
              </p>

              {/* Key Achievements - Common in business resumes */}
              <div className="mt-3 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    Increased department revenue by 35% through strategic initiatives and process optimization.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    Led cross-functional team of 25+ professionals to successfully complete a major corporate
                    restructuring.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    Negotiated key partnerships resulting in $2.5M in additional annual revenue.
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Education
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-700 dark:text-blue-400 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </section>

          {/* Skills & Expertise */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Core Competencies
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-700 dark:bg-blue-500 rounded-full mr-2"></div>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-800 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <div className="ml-auto">
                    <div className="text-xs text-blue-700 dark:text-blue-400 font-medium">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional business-specific sections */}
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Industries</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                  Finance
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                  Technology
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                  Consulting
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                  Healthcare
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-gray-100 dark:bg-gray-800 p-4 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>References and additional information available upon request</p>
      </footer>
    </div>
  )
}

