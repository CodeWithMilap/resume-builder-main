"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function TechDeveloperTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Software Developer",
      email: "dev@example.com",
      phone: "(123) 456-7890",
      address: "San Francisco, CA",
      summary: "Full-stack developer with expertise in React, Node.js, and cloud technologies.",
    },
    experience: [
      {
        company: "Tech Company",
        position: "Senior Developer",
        date: "2020 - Present",
        description: "Building scalable applications and leading development teams.",
      },
    ],
    education: [
      {
        institution: "Tech University",
        degree: "B.S. Computer Science",
        date: "2015 - 2019",
        description: "Focused on software engineering and algorithms.",
      },
    ],
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-mono bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Terminal-like header */}
      <header className="bg-gray-900 dark:bg-black text-green-400 p-6 rounded-t-lg font-mono">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-xs text-gray-400">resume.tsx</div>
        </div>

        <div className="flex items-baseline flex-wrap gap-2">
          <span className="text-purple-400">const</span>
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-2xl text-yellow-300 focus:outline-none focus:bg-gray-800 focus:ring-1 focus:ring-gray-700 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <span className="text-purple-400">=</span>
          <span className="text-blue-400">{"{"}</span>
        </div>

        <div className="ml-6">
          <span className="text-blue-300">role:</span>
          <span
            contentEditable
            suppressContentEditableWarning
            className="ml-2 text-green-300 focus:outline-none focus:bg-gray-800 focus:ring-1 focus:ring-gray-700 rounded px-1"
          >
            {`"${personalInfo.title}"`}
          </span>
          <span className="text-gray-400">,</span>
        </div>

        <div className="text-blue-400">{"}"}</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 dark:bg-gray-800">
        {/* Left column - About & Contact */}
        <div className="md:col-span-1 space-y-6">
          <section className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> about.me
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              className="text-gray-700 dark:text-gray-300 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
            >
              {personalInfo.summary}
            </p>
          </section>

          <section className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> contact.json
            </h2>
            <div className="space-y-2 font-mono text-sm">
              <p className="flex">
                <span className="text-purple-600 dark:text-purple-400 mr-2">"email":</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-600 dark:text-blue-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {`"${personalInfo.email}"`}
                </span>
                <span>,</span>
              </p>
              <p className="flex">
                <span className="text-purple-600 dark:text-purple-400 mr-2">"phone":</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-600 dark:text-blue-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {`"${personalInfo.phone}"`}
                </span>
                <span>,</span>
              </p>
              <p className="flex">
                <span className="text-purple-600 dark:text-purple-400 mr-2">"location":</span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-600 dark:text-blue-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {`"${personalInfo.address}"`}
                </span>
              </p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> skills.map()
            </h2>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <div className="ml-auto">
                    <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {skill.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column - Experience & Education */}
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> experience.forEach()
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4 border-l-2 border-green-500 pl-4">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 dark:text-gray-400 font-mono focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                  >
                    {exp.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-600 dark:text-blue-400 mb-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {exp.company}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </section>

          <section className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> education.map()
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 border-l-2 border-blue-500 pl-4">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 dark:text-gray-400 font-mono focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-blue-600 dark:text-blue-400 mb-1 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* Terminal footer */}
      <footer className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-b-lg font-mono text-sm">
        <div className="flex items-center">
          <span className="text-gray-400 mr-2">$</span>
          <span className="animate-pulse">_</span>
        </div>
      </footer>
    </div>
  )
}

