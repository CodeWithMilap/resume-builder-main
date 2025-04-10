"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function StartupEntrepreneurialTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Entrepreneur & Startup Founder",
      email: "founder@startup.co",
      phone: "(123) 456-7890",
      address: "San Francisco, CA",
      summary:
        "Visionary entrepreneur with experience founding and scaling multiple startups. Passionate about disruptive technologies and innovative business models.",
    },
    experience: [
      {
        company: "Innovative Startup",
        position: "Founder & CEO",
        date: "2019 - Present",
        description: "Founded and grew a tech startup from concept to $2M ARR with a team of 15 employees.",
      },
    ],
    education: [
      {
        institution: "Entrepreneurship University",
        degree: "B.S. Business & Computer Science",
        date: "2014 - 2018",
        description: "Graduated with honors. Participated in startup incubator program.",
      },
    ],
    skills: [
      { name: "Business Development", level: "Expert" },
      { name: "Product Strategy", level: "Expert" },
      { name: "Fundraising", level: "Advanced" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-sans bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Modern, bold header with startup vibe */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700 p-8 text-white">
        <div className="max-w-3xl mx-auto">
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-4xl font-extrabold mb-2 leading-tight focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-xl text-purple-100 dark:text-purple-200 mb-6 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
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
        {/* Vision Statement */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-1 bg-purple-500 dark:bg-purple-600 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Vision</h2>
          </div>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        {/* Entrepreneurial Journey */}
        <section className="mb-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-blue-500 dark:bg-blue-600 mr-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Entrepreneurial Journey</h2>
          </div>

          {experience.map((exp, index) => (
            <div
              key={index}
              className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-600 rounded-full -translate-x-1/2"></div>
              <div className="mb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-xl font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-purple-600 dark:text-purple-400 font-medium px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600"
                  >
                    {exp.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 rounded px-1"
                >
                  {exp.company}
                </p>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 rounded px-1"
              >
                {exp.description}
              </p>

              {/* Startup metrics - common in entrepreneurial resumes */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$2M</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Annual Revenue</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Team Size</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$1.5M</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Funding Raised</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3x</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">YoY Growth</div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education & Learning */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-8 h-1 bg-green-500 dark:bg-green-600 mr-4"></div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Education & Learning</h2>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <div className="flex justify-between items-center">
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-green-600 dark:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 rounded px-1"
                  >
                    {edu.institution}
                  </p>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 rounded px-1"
                  >
                    {edu.date}
                  </span>
                </div>
                <p
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-600 dark:text-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 rounded px-1"
                >
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Additional learning - common for entrepreneurs */}
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Continuous Learning</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-600 rounded-full mr-2"></div>
                  <span>Y Combinator Startup School, 2020</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-600 rounded-full mr-2"></div>
                  <span>TechStars Mentor Program, 2021</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-600 rounded-full mr-2"></div>
                  <span>500 Startups Growth Program, 2022</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Skills & Expertise */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-8 h-1 bg-yellow-500 dark:bg-yellow-600 mr-4"></div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Skills & Expertise</h2>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      className="font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600 rounded px-1"
                    >
                      {skill.name}
                    </span>
                    <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-yellow-600 dark:to-yellow-400 h-full rounded-full"
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

            {/* Startup ecosystem */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Startup Ecosystem</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                  Venture Capital
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                  Angel Investing
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                  Pitch Development
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm rounded-full">
                  Growth Hacking
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm rounded-full">
                  MVP Development
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700 p-6 text-white text-center">
        <p className="text-sm">"The best way to predict the future is to create it."</p>
      </footer>
    </div>
  )
}

