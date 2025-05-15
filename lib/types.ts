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


interface Links {
  linkedin: string;
  portfolio: string;
  github: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  links?: Links;
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "Milap Dave",
    title: "Frontend developer",
    email: "dave.milap3@gmail.com",
    phone: "9013706142",
    address: "Rajkot, Gujarat, India", // Inferred from experience location
    summary:
      "Frontend developer with a passion for crafting clean, responsive, and user-friendly web applications. Experienced in HTML, CSS, JavaScript, and React.js, with a solid grasp of modern development practices. Skilled in Git, web performance optimization, and SEO, and always focused on building pixel-perfect, high-performance interfaces. I enjoy collaborating with teams to turn ideas into polished, real-world solutions that not only look great but work seamlessly.",
    linkedin: "https://www.linkedin.com/in/milapdav"
  },
  education: [
    {
      institution: "Dr. V.R.Godhaniya Collage",
      degree: "M.Sc (IT & CA)",
      date: "01/2012 - 01/2013",
      description: "Specialized in Information Technology."
    },
    {
      institution: "K.K.Parekh",
      degree: "Bachelor of Commerce (BCom)",
      date: "01/2010 - 01/2011",
      description: "Focused on Computer Science."
    }
  ],
  experience: [
    {
      company: "Soft 'n' Web",
      title: "Front End Developer",
      date: "04/2016 - Present",
      period: "04/2016 - Present",
      description:
        "Developed and maintained web applications using JavaScript, ReactJS, and Tailwind CSS. Collaborated with teams to implement responsive designs and optimize performance."
    },
    {
      company: "Epixelinfoway",
      title: "Front End Developer",
      date: "03/2015 - 02/2016",
      period: "03/2015 - 02/2016",
      description:
        "Built user-friendly interfaces with HTML5, CSS, and jQuery. Integrated WordPress CMS for dynamic content management."
    },
    {
      company: "Digitize-info",
      title: "Front End Developer",
      date: "02/2014 - 02/2015",
      period: "02/2014 - 02/2015",
      description:
        "Designed and developed websites using Bootstrap and JavaScript, focusing on cross-browser compatibility and SEO optimization."
    }
  ],
  skills: [
    { name: "JavaScript", level: "Expert" },
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "HTML5", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "WordPress", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "Sass", level: "Advanced" },
    { name: "Gulp", level: "Intermediate" },
    { name: "Webpack", level: "Intermediate" },
    { name: "Adobe Photoshop", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" }
    // Note: Levels are assumed; adjust based on your expertise
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/milapdave",
    portfolio: "https://milapdave.com", // Replace with your actual portfolio URL
    github: "https://github.com/milapdave" // Replace with your actual GitHub URL
  }
};

// export const defaultResumeData: ResumeData = {
//   personalInfo: {
//     name: "John Doe",
//     title: "Software Engineer",
//     email: "john.doe@example.com",
//     phone: "(123) 456-7890",
//     address: "New York, NY",
//     summary:
//       "Experienced software engineer with a passion for building scalable web applications and solving complex problems.",
//   },
//   education: [
//     {
//       institution: "University of Technology",
//       degree: "Bachelor of Science in Computer Science",
//       date: "2015 - 2019",
//       description: "Graduated with honors. Specialized in software engineering and artificial intelligence.",
//     },
//   ],
//   experience: [
//     {
//       company: "Tech Solutions Inc.",
//       title: "Senior Software Engineer",
//       date: "2018 - Present",
//       period: "2020 - Present",
//       description:
//         "Lead developer for the company's flagship product. Implemented new features and improved performance by 40%.",
//     },
//     {
//       company: "Digital Innovations",
//       title: "Software Developer",
//       date: "2018 - Present",
//       period: "2019 - 2020",
//       description:
//         "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams.",
//     },
//   ],
//   skills: [
//     { name: "JavaScript", level: "Expert" },
//     { name: "React", level: "Advanced" },
//     { name: "Node.js", level: "Advanced" },
//     { name: "TypeScript", level: "Intermediate" },
//     { name: "HTML/CSS", level: "Expert" },
//   ],
// }

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

