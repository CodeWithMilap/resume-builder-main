"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function GovernmentLegalTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name, Esq.",
      title: "Attorney at Law",
      email: "attorney@legalfirm.com",
      phone: "(123) 456-7890",
      address: "Washington, DC",
      summary: "Experienced legal professional with expertise in constitutional law and government affairs.",
    },
    experience: [
      {
        company: "Department of Justice",
        position: "Senior Legal Counsel",
        date: "2018 - Present",
        description:
          "Providing legal guidance on complex regulatory matters and representing the department in court proceedings.",
      },
    ],
    education: [
      {
        institution: "Harvard Law School",
        degree: "Juris Doctor (J.D.)",
        date: "2012 - 2015",
        description: "Graduated with honors. Member of Law Review.",
      },
    ],
    skills: [
      { name: "Legal Research", level: "Expert" },
      { name: "Litigation", level: "Expert" },
      { name: "Regulatory Compliance", level: "Advanced" },
    ],
  }

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData

  return (
    <div className="font-serif bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Formal header with government/legal aesthetic */}
      <header className="bg-slate-100 dark:bg-slate-800 p-8 border-b-4 border-slate-700 dark:border-slate-600">
        <div className="max-w-3xl mx-auto">
          <h1
            contentEditable
            suppressContentEditableWarning
            className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
          >
            {personalInfo.name}
          </h1>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-xl text-slate-700 dark:text-slate-300 mb-4 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
          >
            {personalInfo.title}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
            >
              {personalInfo.email}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
            >
              {personalInfo.phone}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
            >
              {personalInfo.address}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider border-b-2 border-slate-300 dark:border-slate-700 pb-2">
            Professional Summary
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-slate-700 dark:text-slate-300 leading-relaxed focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider border-b-2 border-slate-300 dark:border-slate-700 pb-2">
            Professional Experience
          </h2>

          {experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="text-lg font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                >
                  {exp.position}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                >
                  {exp.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-slate-700 dark:text-slate-300 font-medium mb-2 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
              >
                {exp.company}
              </p>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
              >
                {exp.description}
              </p>

              {/* Notable Cases - Common in legal resumes */}
              <div className="mt-3">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Notable Cases:</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                  >
                    United States v. Smith (2022) - Successfully prosecuted a complex fraud case resulting in $10M in
                    recovered assets.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                  >
                    Johnson v. Department of Health (2021) - Defended agency regulations against constitutional
                    challenge.
                  </li>
                  <li
                    contentEditable
                    suppressContentEditableWarning
                    className="focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                  >
                    In re: Government Procurement Review (2020) - Led internal investigation resulting in policy
                    reforms.
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider border-b-2 border-slate-300 dark:border-slate-700 pb-2">
            Education
          </h2>

          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  className="font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                >
                  {edu.degree}
                </h3>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                >
                  {edu.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-slate-700 dark:text-slate-300 mb-1 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
              >
                {edu.institution}
              </p>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-sm text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
              >
                {edu.description}
              </p>
            </div>
          ))}

          {/* Bar Admissions - Common in legal resumes */}
          <div className="mt-4">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Bar Admissions</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>District of Columbia Bar, 2015</li>
              <li>New York State Bar, 2016</li>
              <li>U.S. Supreme Court, 2020</li>
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills & Expertise */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider border-b-2 border-slate-300 dark:border-slate-700 pb-2">
              Legal Expertise
            </h2>

            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-slate-700 dark:bg-slate-300 rounded-full mr-2"></div>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 rounded px-1"
                  >
                    {skill.name}
                  </span>
                  <div className="ml-auto">
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">{skill.level}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Professional Affiliations */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider border-b-2 border-slate-300 dark:border-slate-700 pb-2">
              Professional Affiliations
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-700 dark:bg-slate-300 rounded-full mr-2 mt-1.5"></div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">American Bar Association</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Member, 2015 - Present</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-700 dark:bg-slate-300 rounded-full mr-2 mt-1.5"></div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">Federal Bar Association</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Member, 2016 - Present</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-slate-700 dark:bg-slate-300 rounded-full mr-2 mt-1.5"></div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">Constitutional Law Society</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Board Member, 2018 - Present</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="bg-slate-100 dark:bg-slate-800 p-4 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-300 dark:border-slate-700">
        <p>References available upon request | Admitted to practice in DC, NY, and before the U.S. Supreme Court</p>
      </footer>
    </div>
  )
}

