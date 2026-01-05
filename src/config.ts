export const config = {
    developer: {
        name: "Jerome",
        fullName: "Jerome Richard D",
        title: "Full Stack Developer | AI Engineer | Data Engineer | Data Analyst | Cloud Architect",
        description: "Versatile CS Engineer passionate about building intelligent systems, scalable cloud architectures, and data-driven solutions. From full-stack development to AI engineering, I transform complex problems into elegant solutions."
    },
    social: {
        github: "FightKlub",
        email: "10102004jerome@gmail.com",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science Engineering (AI) undergraduate focused on building intelligent, scalable software systems. I specialize in full-stack development, AI/ML engineering, and cloud-native architectures. My work spans end-to-end AI pipelines, data-driven applications, and production-ready platforms. I enjoy turning complex ideas into clean, impactful solutions through code."
    },
    experiences: [] as Array<{
        position: string;
        company: string;
        period: string;
        location: string;
        description: string;
        responsibilities: string[];
        technologies: string[];
    }>,
    projects: [
        {
            id: 1,
            title: "AI-Powered Code Review Assistant",
            category: "Full Stack",
            technologies: "Python, TensorFlow, React, FastAPI, PostgreSQL, Docker",
            image: "/images/project-1.webp"
        },
        {
            id: 2,
            title: "Real-time Collaborative Whiteboard",
            category: "Full Stack",
            technologies: "TypeScript, WebRTC, Socket.io, Canvas API, Node.js, Redis",
            image: "/images/project-2.webp"
        },
        {
            id: 3,
            title: "Blockchain Voting System",
            category: "Full Stack",
            technologies: "Solidity, Web3.js, React, Ethereum, IPFS, MetaMask",
            image: "/images/project-3.webp"
        },
        {
            id: 4,
            title: "Cloud Infrastructure Dashboard",
            category: "Full Stack",
            technologies: "Go, Kubernetes, Grafana, Prometheus, Terraform, React",
            image: "/images/project-4.webp"
        },
        {
            id: 5,
            title: "Neural Network Visualizer",
            category: "Full Stack",
            technologies: "Python, TensorFlow.js, D3.js, Next.js, WebGL, TypeScript",
            image: "/images/project-5.webp"
        }
    ],
    contact: {
        email: "10102004jerome@gmail.com",
        github: "https://github.com/FightKlub",
        linkedin: "https://www.linkedin.com",
        twitter: "https://x.com",
        instagram: "https://www.instagram.com"
    },
    skills: {
        develop: {
            title: "CODER",
            description: "Full-stack development & AI/ML engineering",
            details: "Building intelligent applications with modern frameworks, machine learning models, and cloud-native architectures. From web apps to AI systems, I code solutions that scale.",
            tools: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "TensorFlow", "PyTorch", "FastAPI", "Docker", "Kubernetes"]
        },
        design: {
            title: "ENGINEER",
            description: "Data Engineering & Cloud Architecture",
            details: "Designing robust data pipelines, cloud infrastructure, and scalable systems. Expertise in ETL processes, data warehousing, and cloud-native solutions on AWS, Azure, and GCP.",
            tools: ["AWS", "Azure", "GCP", "Spark", "Kafka", "Airflow", "PostgreSQL", "MongoDB", "Terraform", "CI/CD"]
        }
    }
};


