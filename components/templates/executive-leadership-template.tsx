"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function ExecutiveLeadershipTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Chief Executive Officer",
      email: "ceo@company.com",
      phone: "(123) 456-7890",
      address: "New York, NY",
      summary:
        "Visionary executive leader with 15+ years of experience driving organizational growth, innovation, and operational excellence across global markets.",
    },
    experience: [
      {
        company: "Global Corporation",
        position: "Chief Executive Officer",
        date: "2018 - Present",
        description:
          "Leading strategic vision and operations for a Fortune 500 company with $500M in annual revenue and 1,000+ employees worldwide.",
      },
    ],
    education: [
      {
        institution: "Harvard Business School",
        degree: "Master of Business Administration (MBA)",
        date: "2005 - 2007",
        description: "Graduated with distinction. Concentration in Strategic Leadership.",
      },
    ],
    skills: [
      { name: "Strategic Leadership", level: "Expert" },
      { name: "Business Transformation", level: "Expert" },
      { name: "P&L Management", level: "Expert" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-serif bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Sophisticated header with executive aesthetic */}
      <header className="bg-gray-900 dark:bg-black text-white p-10 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute left-0 top-0 w-64 h-64 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-4xl font-bold mb-2 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-2xl text-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
          >
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
            >
              {personalInfo.email}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
            >
              {personalInfo.phone}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
            >
              {personalInfo.address}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-10">
        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Executive Summary
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
            Leadership Experience
          </h2>

          {experience.map((exp, index) => (
            <div key={index} className="mb-10">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-xl font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                >
                  {exp.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
              >
                {exp.description}
              </p>

              {/* Key Achievements - Essential for executive resumes */}
              <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    Increased company revenue by 35% within first 24 months through strategic market expansion and
                    product innovation.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    Led successful digital transformation initiative that improved operational efficiency by 28% and
                    reduced costs by $15M annually.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    Negotiated and executed strategic acquisition of key competitor, expanding market share by 15% and
                    adding $100M in annual revenue.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    Restructured executive leadership team and implemented performance-based incentives, improving
                    talent retention by 40%.
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Education
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-700 dark:text-gray-300 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                >
                  {edu.date}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Executive Education - Common for senior leaders */}
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Executive Education</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <p className="font-medium">Advanced Management Program</p>
                    <p>INSEAD Business School, 2015</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <p className="font-medium">Executive Leadership Program</p>
                    <p>Stanford Graduate School of Business, 2012</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Leadership Competencies */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 pb-2">
              Leadership Competencies
            </h2>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gray-800 dark:bg-gray-200 rounded-full mr-2"></div>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-800 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-1"
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Board Positions - Common for executives */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Board Positions</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <p className="font-medium">Board Member, Tech Innovation Alliance</p>
                    <p className="text-sm">2019 - Present</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <p className="font-medium">Advisory Board, Global Business Forum</p>
                    <p className="text-sm">2017 - Present</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 mr-2"></div>
                  <div>
                    <p className="font-medium">Non-Executive Director, Healthcare Innovation Fund</p>
                    <p className="text-sm">2016 - 2020</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-gray-900 dark:bg-black text-white p-6 text-center">
        <p className="text-sm text-gray-400">
          "Leadership is the capacity to translate vision into reality." —Warren Bennis
        </p>
      </footer>
    </div>
  )
}

