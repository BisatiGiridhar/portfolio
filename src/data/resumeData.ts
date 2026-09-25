export interface Project {
  title: string;
  category: string;
  techStack: string[];
  description: string;
  points: string[];
  liveUrl?: string;
  githubUrl?: string;
  featuredTag?: string;
  stats?: { label: string; value: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  association?: string;
  period: string;
  location: string;
  type: string;
  points: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

export const RESUME_DATA = {
  personal: {
    name: "BISATI GIRIDHAR",
    firstName: "BISATI",
    lastName: "GIRIDHAR",
    title: "Software Engineer & AI/ML Developer",
    subtitles: [
      "AI/ML Engineer",
      "Full-Stack Developer",
      "Distributed Systems Enthusiast",
      "Problem Solver",
    ],
    email: "giridharbisati@gmail.com",
    phone: "+91-62815-60968",
    location: "Nandyal, India",
    linkedin: "https://linkedin.com/in/giridharbisati",
    github: "https://github.com/giridharbisati",
    leetcode: "https://leetcode.com/giridharbisati",
    summary:
      "Computer Science undergraduate (CGPA: 8.57/10) with hands-on experience developing AI-powered, full-stack applications using Python, Java, SQL, and MongoDB. Skilled in Data Structures & Algorithms and Machine Learning development, with a proven ability to design and build scalable software solutions. Experienced in delivering real-world projects spanning AI automation, resume analysis, price comparison, and inventory management. Passionate problem-solver seeking an entry-level Software Engineer or AI/ML internship role.",
  },

  education: {
    institution: "Rajeev Gandhi Memorial College of Engineering and Technology",
    location: "Nandyal, India",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "2023 - 2027",
    cgpa: "8.57 / 10.0",
    coursework: [
      "Data Structures & Algorithms (Complexity Analysis)",
      "Object-Oriented Design",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Cloud Computing",
    ],
  } as EducationItem,

  skills: {
    languages: ["Python", "Java", "C", "SQL"],
    webTechnologies: [
      "HTML5",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Three.js",
      "WebSockets",
    ],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    toolsPlatforms: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "VS Code",
      "Jupyter Notebook",
      "Vercel",
      "CI/CD",
    ],
    coreConcepts: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Distributed Systems",
      "Operational Transformation (OT)",
      "LangGraph & Multi-Agent AI",
      "Large Language Models (LLMs)",
      "OCR & NLP",
    ],
    softSkills: [
      "Problem Solving",
      "Fast Learner",
      "Collaborative Team Player",
      "Cross-functional Communication",
    ],
    interests: [
      "Distributed Systems",
      "Generative AI & LLMs",
      "Machine Learning",
      "Open Source",
    ],
    activities: [
      "Hackathons",
      "College Tech Events",
      "Competitive Coding Competitions",
    ],
  },

  experiences: [
    {
      role: "Virtual Internship – AI/ML",
      company: "EduSkills Foundation",
      association: "in association with Google",
      period: "2024",
      location: "Remote",
      type: "Internship",
      points: [
        "Completed structured internship on Google AI/ML technologies, gaining hands-on experience with machine learning concepts, data preprocessing, model development, and evaluation.",
        "Applied AI/ML techniques to practical problems and gained experience with Google Cloud-based AI/ML tools and scalable machine learning workflows.",
      ],
      skills: [
        "Google Cloud AI",
        "Machine Learning",
        "Data Preprocessing",
        "Model Evaluation",
        "Python",
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      title: "ResearchMind AI",
      category: "Multi-Agent AI Platform & Research Automation",
      techStack: [
        "Next.js",
        "FastAPI",
        "LangGraph",
        "OpenAI",
        "Tavily",
        "PostgreSQL",
        "Three.js",
      ],
      description:
        "Production-ready multi-agent research platform orchestrating 10 specialized LangGraph agents to decompose queries, fact-check live web sources, and synthesize citation-backed research reports.",
      points: [
        "Built a production-ready multi-agent research platform with 10 specialized LangGraph agents that decompose complex queries, search live web and academic sources, fact-check evidence, evaluate source quality, and generate structured research reports.",
        "Integrated OpenAI, Tavily, Semantic Scholar, arXiv, and Crossref APIs for real-time research, citation validation, evidence extraction, and grounded AI synthesis with zero mock data in production.",
        "Developed a responsive Next.js interface with interactive Three.js 3D visualizations, real-time agent progress, claim verification, source scoring, and deployed the application using Vercel with a FastAPI backend.",
      ],
      featuredTag: "10 Specialized LangGraph Agents • Zero Mock Data",
      liveUrl: "https://github.com/giridharbisati/ResearchMind-AI",
      githubUrl: "https://github.com/giridharbisati/ResearchMind-AI",
      stats: [
        { label: "Agents", value: "10" },
        { label: "APIs Integrated", value: "5+" },
        { label: "Mock Data", value: "0%" },
      ],
    },
    {
      title: "FLUX IDE",
      category: "Real-Time Collaborative Cloud IDE",
      techStack: [
        "TypeScript",
        "WebSockets",
        "React",
        "Node.js",
        "MongoDB",
        "Redis",
        "Docker",
        "Kubernetes",
      ],
      description:
        "Real-time collaborative cloud IDE supporting concurrent multi-user editing with conflict-free Operational Transformation across distributed microservices.",
      points: [
        "Engineered a real-time collaborative IDE supporting 10+ concurrent sessions using Operational Transformation (OT) for conflict-free editing across distributed microservices.",
        "Containerised with Docker and orchestrated via Kubernetes with CI/CD pipelines; horizontal auto-scaling with health checks sustains 99.9% uptime under load.",
        "Validated core OT logic and session management with Jest unit tests; maintained 85%+ code coverage.",
      ],
      featuredTag: "Operational Transformation • 99.9% Uptime",
      liveUrl: "https://github.com/giridharbisati/FLUX-IDE",
      githubUrl: "https://github.com/giridharbisati/FLUX-IDE",
      stats: [
        { label: "Uptime Under Load", value: "99.9%" },
        { label: "Test Coverage", value: "85%+" },
        { label: "Concurrent Sessions", value: "10+" },
      ],
    },
    {
      title: "Smart Shopping Assistant",
      category: "AI Automation & Smart Expense Analytics",
      techStack: ["React.js", "FastAPI", "OCR", "LLMs", "Web Scraping", "Python"],
      description:
        "AI-driven financial and shopping assistant that extracts receipt and bill data via OCR & NLP, delivering personalized hybrid recommendations and automated monthly spending analytics.",
      points: [
        "Architected an AI-powered shopping assistant that extracts products, prices, and quantities from bills using OCR and NLP, enabling automated expense analysis and product-level insights.",
        "Built a hybrid recommendation engine combining bill history, spending patterns, and real-time product/offer data to suggest cost-effective alternatives and personalized shopping recommendations.",
        "Engineered a full-stack application with a React.js frontend and FastAPI backend, integrating LLMs, web scraping, and interactive spending analytics to generate monthly insights and optimized shopping lists.",
      ],
      featuredTag: "OCR + NLP Bill Parsing • Hybrid Recommendation Engine",
      liveUrl: "https://github.com/giridharbisati/Smart-Shopping-Assistant",
      githubUrl: "https://github.com/giridharbisati/Smart-Shopping-Assistant",
      stats: [
        { label: "Extraction", value: "OCR + NLP" },
        { label: "Stack", value: "React + FastAPI" },
        { label: "Analytics", value: "Real-time" },
      ],
    },
  ] as Project[],

  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "October 2025",
      badge: "OCI GenAI",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "March 2025",
      badge: "Azure Data",
    },
  ] as Certification[],
};
