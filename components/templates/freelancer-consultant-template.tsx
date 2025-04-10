"use client"

import type { ResumeData } from "@/lib/types"

interface TemplateProps {
  resumeData?: ResumeData
}

export default function FreelancerConsultantTemplate({ resumeData }: TemplateProps) {
  // Default data
  const defaultData = {
    personalInfo: {
      name: "Your Name",
      title: "Independent Consultant & Freelancer",
      email: "freelancer@email.com",
      phone: "(123) 456-7890",
      address: "Remote / San Francisco, CA",
      summary: "Results-driven freelance consultant with 7+ years of experience delivering high-impact solutions across multiple industries. Specialized in digital strategy, UX design, and content development."
    },
    experience: [
      {
        company: "Self-Employed",
        position: "Digital Strategy Consultant",
        date: "2018 - Present",
        description: "Providing strategic consulting services to businesses ranging from startups to enterprise clients."
      }
    ],
    education: [
      {
        institution: "University Name",
        degree: "B.A. in Communications",
        date: "2010 - 2014",
        description: "Graduated with honors. Focus on digital media and business communications."
      }
    ],
    skills: [
      { name: "Digital Strategy", level: "Expert" },
      { name: "UX/UI Design", level: "Advanced" },
      { name: "Content Development", level: "Expert" }
    ]
  };

  // Use provided data or default
  const { personalInfo, experience, education, skills } = resumeData || defaultData;

  return (
    <div className="font-sans bg-white dark:bg-gray-900 max-w-4xl mx-auto">
      {/* Modern, distinctive header for freelancers */}
      <header className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 p-8 text-white">
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
            className="text-xl text-emerald-100 dark:text-emerald-200 mb-4 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
          >
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-white">
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personalInfo.email}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {personalInfo.phone}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.address}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-8">
        {/* Professional Profile */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <div className="w-8 h-8 bg-emerald-500 dark:bg-emerald-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            Professional Profile
          </h2>
          <p
            contentEditable
            suppressContentEditableWarning
            className="text-gray-700 dark:text-gray-300 leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
          >
            {personalInfo.summary}
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
                  >
                    {edu.degree}
                  </h3>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
                  >
                    {edu.institution}
                  </span>
                </div>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
                >
                  {edu.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
              >
                {edu.description}
              </p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                contentEditable
                suppressContentEditableWarning
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded mr-1 mb-1 inline-block focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:ring-1 focus:ring-blue-200"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Services Offered - Unique to freelancer resumes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <div className="w-8 h-8 bg-teal-500 dark:bg-teal-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            Services Offered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500 dark:border-emerald-600">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Digital Strategy</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Digital transformation roadmaps</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Competitive analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Market positioning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500 dark:border-teal-600">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">UX/UI Design</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 mr-2"></div>
                  <span>User research & personas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Wireframing & prototyping</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Usability testing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500 dark:border-emerald-600">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Content Development</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Content strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Copywriting & editing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-1.5 mr-2"></div>
                  <span>SEO optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500 dark:border-teal-600">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Project Management</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Agile methodologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Team coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 mr-2"></div>
                  <span>Budget management</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Projects - Key for freelancers */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <div className="w-8 h-8 bg-emerald-500 dark:bg-emerald-600 rounded-full mr-2 flex items-center justify-center text-white text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            Selected Projects
          </h2>
          
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="font-bold text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
                  >
                    {exp.position}
                  </h3>
                  <p
                    contentEditable
                    suppressContentEditableWarning
                    className="text-emerald-600 dark:text-emerald-400 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600"
                >
                  {exp.date}
                </span>
              </div>
              <p
                contentEditable
                suppressContentEditableWarning
                className="text-gray-600 dark:text-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-600 rounded px-1"
              >
                {exp.description}
              </p>
              
              {/* Client Projects - Essential for freelancers */}
              <div className="mt-3 space-y-3">
                <div className="border-l-2 border-emerald-500 dark:border-emerald-600 pl-3">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">E-commerce Redesign — Retail Client</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Led UX redesign that increased conversion rates by 35% and reduced cart abandonment by 25%.
                  </p>
                </div>
                
                <div className="border-l-2 border-teal-500 dark:border-teal-600 pl-3">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Content Strategy — SaaS Startup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Developed comprehensive content strategy that drove 150% increase in organic traffic over 6 months.
                  </p>
                </div>
                
                <div className="border-l-2 border-emerald-500 dark:border-emerald-600 pl-3">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Digital Transformation — Healthcare Provider</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Created roadmap for digital services implementation, resulting in 40% improvement in patient satisfaction.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

