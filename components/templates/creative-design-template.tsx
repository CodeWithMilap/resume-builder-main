"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function CreativeDesignTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Graphic Designer",
      email: "design@example.com",
      phone: "(123) 456-7890",
      address: "New York, NY",
      summary: "Creative designer with a passion for typography, branding, and digital experiences.",
    },
    experience: [
      {
        company: "Design Studio",
        position: "Senior Designer",
        date: "2020 - Present",
        description: "Creating visual identities and digital experiences for various clients.",
      },
    ],
    education: [
      {
        institution: "Design Academy",
        degree: "BFA in Graphic Design",
        date: "2015 - 2019",
        description: "Focused on typography, branding, and digital design.",
      },
    ],
    skills: [
      { name: "Adobe Creative Suite", level: "Expert" },
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Typography", level: "Expert" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-sans bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Artistic header with overlapping elements */}
      <header className="relative pt-16 pb-8 px-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 dark:bg-pink-900/30 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 dark:bg-yellow-900/30 rounded-full translate-x-1/3 -translate-y-1/3 opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-200 dark:bg-blue-900/30 rounded-full translate-y-1/2 opacity-70"></div>

        {/* Content */}
        <div className="relative">
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-2xl text-pink-600 dark:text-pink-400 font-light mb-6 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-1"
          >
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-1"
            >
              {personalInfo.email}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-1"
            >
              {personalInfo.phone}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-1"
            >
              {personalInfo.address}
            </span>
          </div>
        </div>
      </header>

      <div className="px-8 py-6">
        {/* About section with artistic border */}
        <section className="mb-12 relative">
          <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-pink-500 to-yellow-500"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 pt-4">About Me</h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience section */}
          <section>
            <div className="relative">
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 pt-4">Experience</h2>
            </div>

            {experience.map((exp, index) => (
              <div key={index} className="mb-8 relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="mb-2">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-xl font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-pink-600 dark:text-pink-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.company}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 dark:text-gray-400 italic focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                  >
                    {exp.date}
                  </p>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </section>

          {/* Education and Skills */}
          <div className="space-y-8">
            {/* Education section */}
            <section>
              <div className="relative">
                <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 pt-4">Education</h2>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="mb-6 relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-orange-500"></div>
                  <div className="mb-2">
                    <h3
                      contentEditable
                      suppressContentEditableWarning
                      className="text-xl font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded px-1"
                    >
                      {edu.degree}
                    </h3>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      className="text-pink-600 dark:text-pink-400 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded px-1"
                    >
                      {edu.institution}
                    </p>
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      className="text-sm text-gray-500 dark:text-gray-400 italic focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded px-1"
                    >
                      {edu.date}
                    </p>
                  </div>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded px-1"
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Skills section */}
            <section>
              <div className="relative">
                <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 pt-4">Skills</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    contentEditable
                    suppressContentEditableWarning
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/40 dark:to-blue-900/40 text-gray-800 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Artistic footer */}
      <footer className="px-8 py-6 mt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"></div>
        </div>
      </footer>
    </div>
  )
}

