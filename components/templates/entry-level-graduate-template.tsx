"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function EntryLevelGraduateTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Recent Graduate",
      email: "graduate@email.com",
      phone: "(123) 456-7890",
      address: "Boston, MA",
      summary:
        "Recent graduate with a degree in Business Administration. Eager to apply academic knowledge and internship experience in a professional setting.",
    },
    experience: [
      {
        company: "Company Name",
        position: "Marketing Intern",
        date: "Summer 2023",
        description: "Assisted with social media campaigns and market research projects.",
      },
    ],
    education: [
      {
        institution: "University Name",
        degree: "Bachelor of Business Administration",
        date: "2019 - 2023",
        description: "GPA: 3.8/4.0. Relevant coursework: Marketing, Finance, Business Analytics.",
      },
    ],
    skills: [
      { name: "Microsoft Office", level: "Advanced" },
      { name: "Social Media Marketing", level: "Intermediate" },
      { name: "Data Analysis", level: "Intermediate" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-sans bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Fresh, modern header for entry-level professionals */}
      <header className="bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-600 dark:to-indigo-600 p-8 text-white">
        <div className="max-w-3xl mx-auto">
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-xl text-sky-100 dark:text-sky-200 mb-4 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
          >
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-white">
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              <svg
                className="w-4 h-4 mr-2"
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
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              <svg
                className="w-4 h-4 mr-2"
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
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              <svg
                className="w-4 h-4 mr-2"
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
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-8">
        {/* Profile Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <div className="w-8 h-8 bg-sky-500 dark:bg-sky-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            Profile
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 leading-relaxed focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        {/* Education - Placed first for entry-level resumes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <div className="w-8 h-8 bg-indigo-500 dark:bg-indigo-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            Education
          </h2>

          {education.map((edu, index) => (
            <div key={index} className="mb-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-sky-600 dark:text-sky-400 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded px-1"
                >
                  {edu.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-indigo-600 dark:text-indigo-400 font-medium mb-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded px-1"
              >
                {edu.institution}
              </p>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded px-1"
              >
                {edu.description}
              </p>
            </div>
          ))}

          {/* Relevant Coursework - Important for entry-level */}
          <div className="mt-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                Marketing Strategy
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                Business Analytics
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                Financial Accounting
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                Project Management
              </span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full">
                Business Communication
              </span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <div className="w-8 h-8 bg-sky-500 dark:bg-sky-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            Experience
          </h2>

          {experience.map((exp, index) => (
            <div key={index} className="mb-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
                >
                  {exp.position}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-sky-600 dark:text-sky-400 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
                >
                  {exp.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
              >
                {exp.company}
              </p>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
              >
                {exp.description}
              </p>

              {/* Key Responsibilities - Helpful for entry-level */}
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities:</p>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
                  >
                    Assisted with social media content creation and scheduling for company platforms.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
                  >
                    Conducted market research and compiled data for team presentations.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-600 rounded px-1"
                  >
                    Collaborated with marketing team on campaign development and analysis.
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <div className="w-8 h-8 bg-indigo-500 dark:bg-indigo-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Skills
            </h2>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      className="font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded px-1"
                    >
                      {skill.name}
                    </span>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-600 dark:to-indigo-600 h-full rounded-full"
                      style={{
                        width:
                          skill.level === "Beginner"
                            ? "25%"
                            : skill.level === "Intermediate"
                              ? "50%"
                              : skill.level === "Advanced"
                                ? "75%"
                                : "100%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Sections for Entry-Level */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <div className="w-8 h-8 bg-sky-500 dark:bg-sky-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              Activities & Projects
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Marketing Club</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Vice President, 2022-2023</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Organized campus events and managed social media campaigns that increased club membership by 30%.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Market Analysis Project</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team Lead, Spring 2023</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Led a team of 4 students in analyzing market trends for a local business, resulting in actionable
                  recommendations.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Volunteer Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Community Food Bank</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Volunteered 5 hours weekly helping with organization and distribution of food to community members.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-600 dark:to-indigo-600 p-4 text-center text-sm text-white">
        <p>References available upon request</p>
      </footer>
    </div>
  )
}

