import { TimelineItem, SkillCategory, Publication, ContactLink } from './types';

export const HERO_DATA = {
  name: "Dr. Atul Tiwari, MD",
  designation: "Assistant Professor of Pathology | AI & Bioinformatics Researcher | Medical AI Educator",
  tagline: "Bridging Diagnostic Medicine and Artificial Intelligence",
  image: "https://picsum.photos/400/400", // Placeholder
};

export const ABOUT_DATA = `I am an accomplished academic pathologist with deep expertise in hematopathology, flow cytometry, and diagnostic medicine, combined with advanced training in artificial intelligence, machine learning, and bioinformatics. Currently serving as an Assistant Professor at Government Medical College, Chittorgarh, I am passionate about teaching, research, and translating AI into clinical practice to revolutionize healthcare diagnostics.`;

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: "e1",
    title: "MD Pathology",
    subtitle: "Medical College",
    period: "Completed",
  },
  {
    id: "e2",
    title: "MS in Machine Learning & AI",
    subtitle: "Liverpool John Moores University, UK",
    period: "Completed",
  },
  {
    id: "e3",
    title: "MCA (Master of Computer Applications)",
    subtitle: "Manipal University Jaipur",
    period: "Completed",
  },
  {
    id: "e4",
    title: "DCP (Clinical Pathology)",
    subtitle: "Medical College",
    period: "Completed",
  },
  {
    id: "e5",
    title: "Diploma in AI",
    subtitle: "IIIT Bangalore",
    period: "Completed",
  },
  {
    id: "e6",
    title: "Diploma in Bioinformatics",
    subtitle: "Specialized Institute",
    period: "Completed",
  },
   {
    id: "e7",
    title: "MBBS",
    subtitle: "Medical College",
    period: "Completed",
  }
];

export const EXPERIENCE_DATA: TimelineItem[] = [
  {
    id: "exp1",
    title: "Assistant Professor (Pathology) & Acting In-Charge",
    subtitle: "Government Medical College, Chittorgarh",
    period: "Present",
    description: [
      "Leading the Department of Pathology.",
      "Teaching MBBS and postgraduate students.",
      "Developing laboratory infrastructure and diagnostic protocols."
    ]
  },
  {
    id: "exp2",
    title: "AI Faculty & Advisory Board Member",
    subtitle: "DoctorsAI / NSDA",
    period: "Ongoing",
    description: [
      "Providing AI education for medical professionals.",
      "Advising on the intersection of technology and healthcare."
    ]
  },
  {
    id: "exp3",
    title: "Assistant Professor (Pathology)",
    subtitle: "RVRS GMC Bhilwara & RNT Medical College Udaipur",
    period: "Previous",
    description: [
        "Academic instruction and clinical diagnostics.",
        "Specialized work in Hematopathology."
    ]
  },
  {
    id: "exp4",
    title: "Senior Resident",
    subtitle: "SMS Medical College Jaipur",
    period: "Previous",
  },
  {
    id: "exp5",
    title: "Medical Officer",
    subtitle: "Govt. of Rajasthan",
    period: "Previous",
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Medical & Pathology",
    iconName: "Microscope",
    skills: ["Hematopathology", "Histopathology", "Cytopathology", "Flow Cytometry", "Transfusion Medicine"]
  },
  {
    category: "AI & Research",
    iconName: "BrainCircuit",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "RAG & LLMs", "AI in Diagnostics", "Drug Discovery"]
  },
  {
    category: "No-Code & Automation",
    iconName: "Workflow",
    skills: ["Orange & Weka", "Google Vertex AI", "Azure ML Designer", "n8n", "Flowise", "crewAI"]
  },
  {
    category: "Programming & Dev",
    iconName: "Code",
    skills: ["Python", "Java", "C/C++", "PHP", "HTML/CSS", "Android Dev"]
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "p1",
    title: "Artificial Intelligence in Diagnostic Medicine: A New Frontier",
    venue: "Global Health Journal",
    type: "Journal",
    year: "2023"
  },
  {
    id: "p2",
    title: "Foundation Models in Pathology: Opportunities and Challenges",
    venue: "Springer Nature (Book Chapter)",
    type: "Book Chapter",
    year: "2024"
  },
  {
    id: "p3",
    title: "Flow Cytometry Analysis using Machine Learning Algorithms",
    venue: "International Journal of Lab Hematology",
    type: "Journal",
    year: "2022"
  },
  {
    id: "p4",
    title: "Case Report: Rare Hematological Malignancy Diagnosis",
    venue: "Clinical Case Reports",
    type: "Case Report",
    year: "2021"
  }
];

export const TALKS_DATA: TimelineItem[] = [
  {
    id: "t1",
    title: "Keynote: The Future of AI in Pathology",
    subtitle: "Doctors AI Global Summit",
    period: "2023",
  },
  {
    id: "t2",
    title: "Speaker: Digital Pathology Advancements",
    subtitle: "Emirates Pathology Conference, Dubai",
    period: "2022",
  },
  {
    id: "t3",
    title: "Workshop: No-Code AI for Doctors",
    subtitle: "Various Medical Colleges",
    period: "Ongoing",
  }
];

export const AWARDS_DATA: string[] = [
  "Outstanding Achiever Award in Artificial Intelligence (UK)",
  "Best Poster Presentation: AI in Oncology (National Conference)",
  "Recognition for Contribution to Digital Health Education"
];

export const CONTACT_LINKS: ContactLink[] = [
  { label: "Email", href: "mailto:contact@atultiwari.in", iconName: "Mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-atul-tiwari/", iconName: "Linkedin" },
  { label: "Website", href: "https://atultiwari.in", iconName: "Globe" },
  { label: "Twitter", href: "#", iconName: "Twitter" },
];