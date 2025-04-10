export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  address: string
  summary: string
  linkedin?: string
}

export interface Education {
  institution: string
  degree: string
  date: string
  description: string
}

export interface Experience {
  title: string
  company: string
  period: string
  date: string
  position?: string
  description: string
}

export interface Skill {
  name: string
  level: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    address: "New York, NY",
    summary:
      "Experienced software engineer with a passion for building scalable web applications and solving complex problems.",
  },
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      date: "2015 - 2019",
      description: "Graduated with honors. Specialized in software engineering and artificial intelligence.",
    },
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      title: "Senior Software Engineer",
      date: "2018 - Present",
      period: "2020 - Present",
      description:
        "Lead developer for the company's flagship product. Implemented new features and improved performance by 40%.",
    },
    {
      company: "Digital Innovations",
      title: "Software Developer",
      date: "2018 - Present",
      period: "2019 - 2020",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams.",
    },
  ],
  skills: [
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "HTML/CSS", level: "Expert" },
  ],
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  featured: boolean
  component: string
  previewImage?: string
}

export const TEMPLATE_CATEGORIES = ['all', 'modern', 'classic', 'minimal', 'professional'] as const
export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number]

