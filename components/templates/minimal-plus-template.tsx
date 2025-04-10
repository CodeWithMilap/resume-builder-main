"use client"

import { ResumeData } from "@/lib/types"
import type React from "react"

interface MinimalPlusTemplateProps {
  resumeData: ResumeData
  editMode?: boolean
}

export default function MinimalPlusTemplate({ resumeData, editMode = true }: MinimalPlusTemplateProps) {
  const EditableField = ({
    children,
    placeholder,
  }: {
    children: React.ReactNode
    placeholder: string
    tooltip: string
  }) => {
    const content = (
      <div
        contentEditable={editMode}
        suppressContentEditableWarning
        className={`relative group ${
          editMode
            ? "focus:outline-none focus:bg-blue-50/50 dark:focus:bg-blue-900/30 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded px-1"
            : ""
        }`}
        data-placeholder={placeholder}
      >
        {children}
        {editMode && (
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity border border-dashed border-blue-300 dark:border-blue-600 rounded">
            <div className="absolute -top-3 -right-3 bg-blue-500 text-white rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    )

    return content
  }

  return (
    <div className="font-sans max-w-4xl mx-auto p-8">
      {/* Header */}
      <header className="mb-8">
        <EditableField placeholder="Your Name" tooltip="Edit your full name">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{resumeData.personalInfo.name}</h1>
        </EditableField>
        <EditableField placeholder="Your Title" tooltip="Edit your professional title">
          <h2 className="text-lg text-gray-600 dark:text-gray-400 mb-3">{resumeData.personalInfo.title}</h2>
        </EditableField>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.686 2 6 4.686 6 8c0 3.313 6 10 6 10s6-6.687 6-10c0-3.314-2.686-6-6-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
              </svg>
              <EditableField placeholder="Location" tooltip="Edit your location">
                <span>{resumeData.personalInfo.address}</span>
              </EditableField>
            </span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <EditableField placeholder="Email" tooltip="Edit your email">
                <span>{resumeData.personalInfo.email}</span>
              </EditableField>
            </span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <EditableField placeholder="Phone" tooltip="Edit your phone">
                <span>{resumeData.personalInfo.phone}</span>
              </EditableField>
            </span>
          </div>
          <span>|</span>
          <div className="flex items-center gap-1">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
              </svg>
              <EditableField placeholder="LinkedIn" tooltip="Edit your LinkedIn URL">
                <span>{resumeData.personalInfo.linkedin}</span>
              </EditableField>
            </span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h3>
        <EditableField placeholder="Write a professional summary" tooltip="Edit your professional summary">
          <p className="text-gray-700 dark:text-gray-300">
            {resumeData.personalInfo.summary}
          </p>
        </EditableField>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Technical Skills</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Frontend:</span>
            <EditableField placeholder="Frontend skills" tooltip="Edit your frontend skills">
              <span className="text-gray-600 dark:text-gray-400">
                {resumeData.skills.map(skill => skill.name).join(', ')}
              </span>
            </EditableField>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Styling:</span>
            <EditableField placeholder="Styling skills" tooltip="Edit your styling skills">
              <span className="text-gray-600 dark:text-gray-400">Tailwind CSS, CSS3, SCSS, Styled Components</span>
            </EditableField>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">State Management:</span>
            <EditableField placeholder="State management skills" tooltip="Edit your state management skills">
              <span className="text-gray-600 dark:text-gray-400">Redux, Zustand, React Query</span>
            </EditableField>
          </div>
          <div className="flex gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Build Tools & Libraries:</span>
            <EditableField placeholder="Build tools" tooltip="Edit your build tools">
              <span className="text-gray-600 dark:text-gray-400">Webpack, Vite, Babel, Storybook, ShadCN</span>
            </EditableField>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Work Experience</h3>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-1">
                <EditableField placeholder="Job Title" tooltip="Edit your job title">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">{exp.title}</h4>
                </EditableField>
                <EditableField placeholder="Employment Period" tooltip="Edit employment period">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</span>
                </EditableField>
              </div>
              <EditableField placeholder="Company Name" tooltip="Edit company name">
                <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
              </EditableField>
              <EditableField placeholder="Job Description" tooltip="Edit job description">
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>{exp.description}</li>
                </ul>
              </EditableField>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Open Source */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Projects & Open Source</h3>
        <div className="space-y-3">
          <div>
            <EditableField placeholder="Project Name" tooltip="Edit project name">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">PixelBlockUI</h4>
            </EditableField>
            <EditableField placeholder="Project Description" tooltip="Edit project description">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A custom React component library and CLI tool for faster development.
              </p>
            </EditableField>
          </div>
          <div>
            <EditableField placeholder="Project Name" tooltip="Edit project name">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Form Builder SaaS</h4>
            </EditableField>
            <EditableField placeholder="Project Description" tooltip="Edit project description">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A Next.js and MongoDB based dynamic feedback form builder.
              </p>
            </EditableField>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Education</h3>
        <div>
          <EditableField placeholder="Degree" tooltip="Edit your degree">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">{`Bachelor's Degree in Computer Science`}</h4>
          </EditableField>
          <EditableField placeholder="University and Year" tooltip="Edit university and graduation year">
            <p className="text-sm text-gray-600 dark:text-gray-400">University Name, 2014</p>
          </EditableField>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Certifications & Achievements</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li>
            <EditableField placeholder="Certification" tooltip="Edit certification">
              <span>Certified React Developer (Issuing Authority)</span>
            </EditableField>
          </li>
          <li>
            <EditableField placeholder="Certification" tooltip="Edit certification">
              <span>Next.js Expert Certification (Vercel)</span>
            </EditableField>
          </li>
          <li>
            <EditableField placeholder="Achievement" tooltip="Edit achievement">
              <span>Top 5% on Frontend Challenges (LeetCode, CodePen, etc.)</span>
            </EditableField>
          </li>
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          <EditableField placeholder="Soft Skills" tooltip="Edit soft skills">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Problem Solving
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Communication
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Team Collaboration
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                UI/UX Design Thinking
              </span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Mentorship
              </span>
            </div>
          </EditableField>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 italic">
        <EditableField placeholder="Footer Text" tooltip="Edit footer text">
          <p>{`Let's build the future of the web together!`}</p>
        </EditableField>
      </footer>
    </div>
  )
}

