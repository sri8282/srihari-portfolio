// ============================================================
// portfolioData.js — Centralized configuration for Sri Hari's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Sri Hari",
  firstName: "Sri Hari",
  brandName: "Sri Hari",
  title: "Software Developer",
  location: "Coimbatore, India",
  phone: "+91 9940731536",
  emails: {
    primary: "srihari8286@gmail.com",
    secondary: "",
  },
  summary:
    "Software Developer and Computer Science & Engineering student at Karunya Institute of Technology and Sciences. Passionate about building secure distributed machine learning systems, enterprise-grade networking architectures, and full-stack software solutions using Python, Java, React, and IoT technologies.",
  resumeUrl: "/Sri_Hari_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/sri8282",
  linkedin: "https://linkedin.com/in/sri-hari-v-908a51291/",
  instagram: "https://www.instagram.com/_._sri.hari_._/",
};

export const heroContent = {
  greeting: "Hi, I'm Sri Hari",
  titleHighlight: "Software Developer",
  subtitle:
    "I build secure distributed systems, IoT solutions, and full-stack applications using Python, Java, and React.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:srihari8286@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sri Hari,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Sri_Hari_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sri Hari</span>, a software developer based in Coimbatore, India, dedicated to engineering robust backends, secure machine learning pipelines, and highly functional full-stack systems.`,
  techStack: ["Python", "Java", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world systems",
  description:
    "I follow a structured, analytic, and rigorous engineering approach to design and develop secure, high-performance systems.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing target parameters, user scenarios, and distributed system requirements to establish solid system architecture foundations.",
    },
    {
      number: "02",
      title: "Design",
      text: "Structuring data flows, modeling algorithm pipelines, and designing secure, robust communication endpoints for edge and cloud.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Engineering core logic, training predictive models, and connecting microservices using modern technology stacks and patterns.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Conducting integration tests, optimizing latency, and orchestrating virtual environments for final staging and validation.",
    },
  ],
  endText: "Ready to ship!",
};

// Sri Hari's Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C / Embedded C", level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 80 },
        { name: "Pyramid", level: 75 },
        { name: "TensorFlow", level: 80 },
        { name: "Spring Boot", level: 75 }
      ]
    },
    {
      title: "Core CS Concepts",
      skills: [
        { name: "Data Structures (DSA)", level: 85 },
        { name: "Algorithms", level: 82 },
        { name: "DBMS", level: 80 },
        { name: "Operating Systems (OS)", level: 80 },
        { name: "Distributed Systems", level: 75 }
      ]
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "pandas", level: 85 },
        { name: "numpy", level: 85 },
        { name: "IoT & ESP32 / Arduino", level: 85 }
      ]
    }
  ]
};

// Sri Hari's Activities Timeline (replacing Leadership)
export const leadershipList = [
  {
    title: "Regional Volleyball Championship",
    description: "Awarded Regional Level Certificate in Volleyball, representing P M SHRI Kendriya Vidyalaya AFS, Sulur at state-qualifying athletic competitions. Developed strong collaborative skills and team-based strategic thinking.",
    role: "Volleyball Athlete",
    badge: "Sports"
  },
  {
    title: "Primary & Secondary Education",
    description: "Completed comprehensive schooling, participating in science exhibitions, local athletic events, and collaborative school projects.",
    role: "Student Coordinator",
    badge: "KV AFS Sulur"
  }
];

// Sri Hari's Internships Data
export const internshipsList = [
  {
    organization: "JPMorgan Chase",
    role: "Software Engineering Virtual Intern (Forage)",
    duration: "March 2026 - April 2026",
    skills: ["Backend Development", "Real-Time Data Streaming", "Integration Testing", "High-Throughput Handling"],
    tech: ["Java 17", "Spring Boot", "Apache Kafka", "JUnit 5", "Embedded Kafka"]
  },
  {
    organization: "Cisco",
    role: "Networking Engineer Intern (Remote)",
    duration: "June 2025 - August 2025",
    skills: ["Routing & Switching", "Network Troubleshooting", "Security Configuration", "Lab Simulation"],
    tech: ["Cisco Packet Tracer", "Cisco CLI", "Routing Protocols", "Switching Protocols"]
  },
  {
    organization: "Cisco",
    role: "Cyber Security Analyst Intern (Remote)",
    duration: "June 2024 - August 2024",
    skills: ["Vulnerability Assessment", "Threat Analysis", "Ethical Hacking", "Risk Mitigation"],
    tech: ["Security Analysis Tools", "Ethical Hacking Tools", "Network Security Protocols"]
  }
];

// Sri Hari's Soft Skills Data
export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across multiple fields, building IoT systems, and playing regional sports in sync." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks and anomaly detection models into clean, modular pieces." },
  { name: "Analytical Thinking", icon: "📈", desc: "Analyzing network packet captures, cyber threat vectors, and data matrices with precision." },
  { name: "Communication", icon: "💬", desc: "Articulating technical designs clearly, documenting test workflows, and presenting project logic." }
];

// Sri Hari's Projects Data
export const projects = [
  {
    id: "federated-learning",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Trust-Aware Federated Learning System",
    description:
      "A secure distributed machine learning training system built across multiple clients using TensorFlow Federated, enabling collaborative model training without sharing raw client data. Implemented advanced trust scoring and anomaly detection mechanisms to identify and flag malicious participants by evaluating outlier gradient updates in real-time. Tested on 10+ decentralized datasets under Byzantine attack simulations, achieving a 90%+ attack detection rate.",
    techTags: [
      "Python",
      "TensorFlow",
      "Federated Learning",
      "Distributed Systems",
      "Machine Learning"
    ],
    links: {
      github: "https://github.com/sri8282",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "accident-detection",
    number: "02",
    badge: null,
    title: "Accident Detection & Emergency Alert System",
    description:
      "An IoT-based impact detection and emergency notification system designed using vibration sensors (MPU-6050) to capture sudden deceleration and crash impacts with <200ms latency. Integrated GPS and GSM modules to automatically locate the crash site and transmit real-time alerts to emergency response contacts, validating zero false-negative triggers across 15+ crash tests.",
    techTags: ["Embedded C", "Arduino", "GPS Module", "GSM Module", "IoT", "MPU-6050"],
    links: {
      github: "https://github.com/sri8282",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "smart-glove",
    number: "03",
    badge: null,
    title: "Smart Glove for Speech Impairment",
    description:
      "A wearable hand gesture-to-speech conversion glove designed using flex sensors and ESP32 microcontroller. Trained a custom machine learning classification model on hand sign coordinate datasets, achieving 92%+ gesture recognition accuracy across 20+ distinct hand signs to assist speech-impaired individuals.",
    techTags: ["Python", "ESP32", "IoT", "Flex Sensors", "Machine Learning", "Gesture Recognition"],
    links: {
      github: "https://github.com/sri8282",
      demo: null,
    },
    isFlagship: false,
  },
];

// Sri Hari's Certificates List
export const certificates = {
  featured: [
    {
      name: "Regional Level Volleyball Certificate",
      issuer: "Kendriya Vidyalaya AFS, Sulur",
      icon: "🏐",
    },
    {
      name: "Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase (Forage)",
      icon: "☕",
    },
    {
      name: "Networking Engineer Intern Credentials",
      issuer: "Cisco Academy",
      icon: "🌐",
    },
    {
      name: "Cyber Security Analyst Credentials",
      issuer: "Cisco Academy",
      icon: "🛡️",
    }
  ],
  viewAllUrl:
    "https://linkedin.com/in/sri-hari-v-908a51291/",
};

// Education metadata (fallback reference)
export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Karunya Institute of Technology and Sciences",
  cgpa: "2023 - 2027",
  graduation: "2027",
  twelfth: "P M SHRI Kendriya Vidyalaya AFS",
  tenth: "Sulur, Coimbatore",
};

// Footer layout data
export const footerContent = {
  taglines: [
    "Software Development & IoT Systems",
    "Python · Java · React",
    "Secure Distributed Architectures",
  ],
  credential: "B.Tech Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} Sri Hari | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
