"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function MedicalHealthcareTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Dr. Your Name",
      title: "Medical Professional",
      email: "doctor@hospital.org",
      phone: "(123) 456-7890",
      address: "Boston, MA",
      summary: "Dedicated healthcare professional with expertise in patient care and medical research.",
    },
    experience: [
      {
        company: "General Hospital",
        position: "Senior Physician",
        date: "2018 - Present",
        description: "Providing patient care and leading medical teams in the cardiology department.",
      },
    ],
    education: [
      {
        institution: "Medical University",
        degree: "M.D., Medicine",
        date: "2010 - 2014",
        description: "Specialized in cardiology with honors.",
      },
    ],
    skills: [
      { name: "Patient Care", level: "Expert" },
      { name: "Medical Diagnosis", level: "Expert" },
      { name: "Clinical Research", level: "Advanced" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-sans bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Header with medical theme */}
      <header className="bg-teal-600 dark:bg-teal-800 text-white p-8 relative overflow-hidden">
        {/* Medical symbol background */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-teal-500 dark:text-teal-700 opacity-20 text-9xl">
          +
        </div>

        <div className="relative">
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-xl text-teal-100 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
          >
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-teal-100">
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
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
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
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
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
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

      <div className="p-8">
        {/* Professional Summary */}
        <section className="mb-8 bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-l-4 border-teal-500 dark:border-teal-700">
          <h2 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-3">Professional Summary</h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Experience */}
          <div className="md:col-span-2">
            <section>
              <h2 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-6 pb-2 border-b-2 border-teal-200 dark:border-teal-800">
                Professional Experience
              </h2>

              {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <h3
                      contentEditable
                      suppressContentEditableWarning
                      className="text-lg font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                    >
                      {exp.position}
                    </h3>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      className="text-sm text-teal-600 dark:text-teal-400 font-medium bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
                    >
                      {exp.date}
                    </span>
                  </div>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-teal-700 dark:text-teal-300 font-medium mb-2 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    {exp.company}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Certifications Section - Common in medical resumes */}
            <section className="mt-8">
              <h2 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-6 pb-2 border-b-2 border-teal-200 dark:border-teal-800">
                Certifications & Licenses
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-teal-500 dark:text-teal-400 mr-2 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    Board Certified in Internal Medicine, American Board of Internal Medicine
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 dark:text-teal-400 mr-2 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    Advanced Cardiac Life Support (ACLS) Certification
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-teal-500 dark:text-teal-400 mr-2 mt-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    Medical License - State of Massachusetts
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* Right column - Education & Skills */}
          <div>
            <section className="mb-8">
              <h2 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-6 pb-2 border-b-2 border-teal-200 dark:border-teal-800">
                Education
              </h2>

              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-teal-700 dark:text-teal-300 mb-1 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    {edu.institution}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-600 dark:text-gray-400 mb-1 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    {edu.date}
                  </p>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-sm text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-800 dark:text-teal-200 mb-6 pb-2 border-b-2 border-teal-200 dark:border-teal-800">
                Clinical Skills
              </h2>

              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        className="font-medium text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded px-1"
                      >
                        {skill.name}
                      </span>
                      <span className="text-xs text-teal-600 dark:text-teal-400 font-medium bg-teal-100 dark:bg-teal-900/30 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-teal-500 h-full rounded-full"
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
          </div>
        </div>
      </div>

      <footer className="bg-teal-600 dark:bg-teal-800 text-white p-4 text-center text-sm">
        <p>References available upon request</p>
      </footer>
    </div>
  )
}

