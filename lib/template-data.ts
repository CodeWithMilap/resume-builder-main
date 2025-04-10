import { Template } from './types'

export const templates: Template[] = [
  {
    id: 'academic-research',
    name: 'Academic Research Template',
    description: 'A template designed for academic research professionals.',
    category: 'academic',
    featured: false,
    component: 'AcademicResearchTemplate',  
    previewImage: '/templates/academic-research-template.jpg',
  },
  // {
  //   id: 'business-corporate',
  //   name: 'Business Corporate Template',
  //   description: 'A professional template for corporate use.',
  //   category: 'business',
  //   featured: false,
  //   component: 'BusinessCorporateTemplate',
  // },
  {
    id: 'classic',
    name: 'Classic Template',
    description: 'Traditional and elegant layout.',
    category: 'classic',
    featured: false,
    component: 'ClassicTemplate',
    previewImage: '/templates/classic-template.jpg',
  },
  // {
  //   id: 'compact',
  //   name: 'Compact Template',
  //   description: 'A space-efficient design for concise information.',
  //   category: 'compact',
  //   featured: false,
  //   component: 'CompactTemplate',
  // },
  // {
  //   id: 'creative-design',
  //   name: 'Creative Design Template',
  //   description: 'A vibrant and artistic layout.',
  //   category: 'creative',
  //   featured: true,
  //   component: 'CreativeDesignTemplate',
  // },
  // {
  //   id: 'creative',
  //   name: 'Creative Template',
  //   description: 'A modern and creative design for professionals.',
  //   category: 'creative',
  //   featured: true,
  //   component: 'CreativeTemplate',
  // },
  // {
  //   id: 'entry-level-graduate',
  //   name: 'Entry Level Graduate Template',
  //   description: 'A template tailored for recent graduates.',
  //   category: 'entry-level',
  //   featured: false,
  //   component: 'EntryLevelGraduateTemplate',
  // },
  // {
  //   id: 'executive-leadership',
  //   name: 'Executive Leadership Template',
  //   description: 'A sophisticated design for executives.',
  //   category: 'executive',
  //   featured: false,
  //   component: 'ExecutiveLeadershipTemplate',
  // },
  // {
  //   id: 'executive',
  //   name: 'Executive Template',
  //   description: 'A formal template for executive positions.',
  //   category: 'executive',
  //   featured: false,
  //   component: 'ExecutiveTemplate',
  // },
  // {
  //   id: 'freelancer-consultant',
  //   name: 'Freelancer Consultant Template',
  //   description: 'A versatile template for freelancers and consultants.',
  //   category: 'freelance',
  //   featured: false,
  //   component: 'FreelancerConsultantTemplate',
  // },
  // {
  //   id: 'government-legal',
  //   name: 'Government Legal Template',
  //   description: 'A professional template for legal professionals in government.',
  //   category: 'government',
  //   featured: false,
  //   component: 'GovernmentLegalTemplate',
  // },
  // {
  //   id: 'medical-healthcare',
  //   name: 'Medical Healthcare Template',
  //   description: 'A template designed for healthcare professionals.',
  //   category: 'medical',
  //   featured: false,
  //   component: 'MedicalHealthcareTemplate',
  // },
  // {
  //   id: 'minimalist-pro',
  //   name: 'Minimalist Pro Template',
  //   description: 'A clean and professional minimalist design.',
  //   category: 'minimalist',
  //   featured: true,
  //   component: 'MinimalistProTemplate',
  // },
  // {
  //   id: 'minimal-plus',
  //   name: 'Minimal Plus Template',
  //   description: 'An enhanced minimalist design with extra sections.',
  //   category: 'minimalist',
  //   featured: false,
  //   component: 'MinimalPlusTemplate',
  // },
  {
    id: 'minimal',
    name: 'Minimal Template',
    description: 'Simple and straightforward design.',
    category: 'minimal',
    featured: true,
    component: 'MinimalTemplate',
    previewImage: '/templates/minimal-template.jpg',
  },
  // {
  //   id: 'modern-split',
  //   name: 'Modern Split Template',
  //   description: 'A modern design with a split layout.',
  //   category: 'modern',
  //   featured: false,
  //   component: 'ModernSplitTemplate',
  // },
  {
    id: 'modern',
    name: 'Modern Template',
    description: 'A clean and professional modern design.',
    category: 'modern',
    featured: true,
    component: 'ModernTemplate',
    previewImage: '/templates/modern-template.jpg',
  },
  // {
  //   id: 'professional',
  //   name: 'Professional Template',
  //   description: 'Enhanced modern design with extra sections.',
  //   category: 'professional',
  //   featured: false,
  //   component: 'ProfessionalTemplate',
  // },
  // {
  //   id: 'sidebar',
  //   name: 'Sidebar Template',
  //   description: 'A template featuring a sidebar for navigation.',
  //   category: 'sidebar',
  //   featured: false,
  //   component: 'SidebarTemplate',
  // },
  // {
  //   id: 'startup-entrepreneurial',
  //   name: 'Startup Entrepreneurial Template',
  //   description: 'A dynamic template for startups and entrepreneurs.',
  //   category: 'startup',
  //   featured: true,
  //   component: 'StartupEntrepreneurialTemplate',
  // },
  // {
  //   id: 'tech-developer',
  //   name: 'Tech Developer Template',
  //   description: 'A modern template for tech professionals.',
  //   category: 'tech',
  //   featured: false,
  //   component: 'TechDeveloperTemplate',
  // },
]

export const getTemplatesByCategory = (category: string): Template[] => {
  if (category === 'all') return templates
  return templates.filter(template => template.category === category)
}

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id)
}

export const getFeaturedTemplates = (): Template[] => {
  return templates.filter(template => template.featured)
}

export const getTemplateCategories = (): string[] => {
  return ['all', ...new Set(templates.map(t => t.category))]
} 