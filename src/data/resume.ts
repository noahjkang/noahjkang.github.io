export interface Education {
  institution: string;
  degree: string;
  period: string;
  currentCoursework: string[];
  completedCoursework: string[];
  honors?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  technologies: string[];
  bullets: string[];
}

export const resumeData: {
  education: Education[];
  skills: any;
  experience: Experience[];
  projects: Project[];
} = {
  education: [
    {
      institution: "University of Illinois Urbana-Champaign",
      degree: "Bachelor of Science, Mathematics and Computer Science",
      period: "Aug 2025 - May 2029",
      currentCoursework: [
        "Abstract Algera",
        "Complex Analysis",
        "System Programming",
        "Distributed Systems",
      ],
      completedCoursework: [
        "Real Analysis",
        "Abstract Linear Algebra",
        "Ordinary Differential Equations",
        "Computer Architecture",
        "Data Structures",
        "C++ Programming",
        "Java Programming",
      ],
    },
  ],
  skills: {
    languages: ["Java", "C/C++", "Python", "TypeScript", "JavaScript", "MIPS Assembly"],
    toolsAndDev: ["Git", "CI/CD", "Google Antigravity"],
    dataAndArch: ["Relational Databases", "REST APIs"],
  },
  experience: [
    {
      role: "Incoming Software Engineering Intern",
      company: "Salesforce",
      location: "San Francisco, California",
      period: "Summer 2027",
      bullets: [
      ],
    },
    {
      role: "Undergraduate Researcher",
      company: "Illinois Mathematics Lab",
      location: "Champaign, Illinois",
      period: "Aug 2026 - Present",
      bullets: [
        "Studying the existence and asymptotics of symmetric higher-dimensional Ricci solitons by reducing the geometric flow equations to systems of non-linear ODEs.",
      ],
    },
    {
      role: "Machine Learning Engineering Intern",
      company: "US Department of Energy",
      location: "Washington D.C (REMOTE)",
      period: "Jul 2026 - Present",
      bullets: [
        "Building an automated data validation pipeline to process and analyze multi-scenario National Energy Modeling System (NEMS) outputs, replacing manual Excel comparisons for complex energy economic models.",
        "Implementing statistical anomaly detection and ML models to identify model discrepancies, isolate potential software bugs, and validate research hypotheses across varying simulation parameters.",
        "Integrating LLMs and agentic AI workflows to auto-generate diagnostic summaries and analytical reports, drastically reducing triage time for anomalous model outputs.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "UIUC Department of Economics",
      location: "Champaign, Illinois",
      period: "Jan 2026 - Aug 2026",
      bullets: [
        "Designed a multi-agent generation pipeline with LangGraph state machines to orchestrate complex agent workflows for automated math content creation.",
        "Integrated SymPy to programmatically generate and verify mathematical expressions, ensuring exact symbolic computation and error-free problem generation.",
        "Implementing a Retrieval-Augmented Generation architecture to dynamically pull curriculum standards and reference materials into the generation loop for grounded outputs.",
      ],
    },
    {
      role: "Assistant Sashimi Chef",
      company: "Tensuke",
      location: "Elk Grove Village, Illinois",
      period: "Jun 2026 - Jul 2026",
      bullets: [
        "Scaled, filleted, and displayed fish, received orders of fresh fish, and prepared sashimi",
      ],
    },
  ],
  projects: [
    {
      name: "Cookie Trading",
      technologies: ["Python", "FastAPI", "Next.js", "React"],
      bullets: [
        "A full-stack algorithmic trading platform and simulation engine featuring custom order book matching, real-time WebSockets, and automated bot trading.",
      ],
    },
    {
      name: "Geodesic",
      technologies: ["Python", "HNSW", "Celery/Redis", "TypeScript"],
      bullets: [
        "A music discovery web application leveraging Topological Data Analysis (TDA), HNSW vector similarity search, and interactive 3D WebGL manifold visualization for high-dimensional audio embeddings.",
      ],
    },
    {
      name: "Computer Vision Waste Classifier",
      technologies: ["Python", "TensorFlow", "FastAPI", "REST Web Services"],
      bullets: [
        "Developed a classification system, designing REST APIs for low-latency, asynchronous responses and robust backend performance."
      ],
    },
  ],
};
