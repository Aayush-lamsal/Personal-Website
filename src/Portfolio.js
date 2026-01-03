import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
// "proxy": "http://localhost:5000",

const NAV_ITEMS = [
    { id: "info", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "Certifications", label: "Certifications" },
];

const skills = {
    "Automation & Log Analysis": ["PowerShell", "Scripting", "Windows Event Logs", "log analysis", "troubleshooting", "proactive issue detection"],
    "SaaS & Support Tools": ["ServiceNow", "Zendesk", "Jira", "ticketing workflows", "ITIL-based incident and change management", "knowledge base (KB) creation and maintenance", "cross - functional collaboration"],
    "Endpoint Management & Security": ["Windows Endpoint Deployment and Management(Microsoft Intune)", "device enrollment", "security", "compliance policies"],
    "Frontend": ["HTML5", "CSS3", "JSX", "Responsive Design", "JavaScript (ES6+)", "React.js", "TypeScript", "C#", "SQL"],
    "Backend & APIs": ["Python", "Flask", "Django", "Node.js", "Java", "Spring Boot", "REST API Integration & troubleshooting"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL", "Stored Procedures", "Triggers", "Data Migration", "Data Integrity"],
    "Tools & Platforms": ["Git", "GitHub", "Docker", "AWS", "Maven", "Gradle"],
    "Data/Cloud": ["ETL pipelines", "Airflow", "Snowflake", "Pandas", "Excel", "Machine Learning", "Fine-tuning LLMs"],
    "Testing & CI/CD": ["Junit5", "Mockito", "Github Action", "SQL, Stored Procedures", "Triggers", "Data Migration", "Data Integrity"],
    "Coursework": ["Data Engineering", "Operating Systems", "Algorithm Analysis", " Embedded Systems", "Big Data & Distributed Systems", "Discrete Mathematics", "Artificial Intelligence", "Computer Networks", "Data Science", " Object-Oriented Programming(OOP)", "Cloud Computing"]
};
const Certifications = [
    {
        name: "ITIL 4 Certification",
        url: "https://www.coursera.org/account/accomplishments/verify/V13S9G06D3Z9",
    },
    {
        name: "Linux Fundamentals",
        url: "",
    },
    {
        name: "MD-102: Endpoint Administrator",
        url: "https://www.coursera.org/account/accomplishments/specialization/8OXJWH7F4UMG",
    },

    {
        name: "ServiceNow System Administrator",
        url: "https://www.coursera.org/account/accomplishments/verify/E0PCXX3T577I",
    },
    {
        name: "Oracle DBA 21c Design, Manage & Secure",
        url: "https://www.coursera.org/account/accomplishments/verify/K1EJMGCSHVOY",
    },
    {
        name: "Deploying Windows Clients & Managing Identities",
        url: "https://www.coursera.org/account/accomplishments/verify/NI4SYOTDSUJT",
    },

    {
        name: "Application deployment and management with Intune",
        url: "https://www.coursera.org/account/accomplishments/verify/I4OHEMWNBQ9T",
    },
];


const Schooldata = [
    {
        title: "North Dakota State University",
        degree: "Master's degree in Computer Science",
        location: "Fargo,North Dakota",
        date: "08/2024-Present"
    },
    {
        title: "Tribhuvan University",
        degree: "Bachelor's in Information Management",
        location: "Kathmandu,Nepal",
        date: "2017-2022"
    }
];
const projects = [
    {
        title: "Medical Chatbot",
        tech: ["Streamlit", "Flask", "LangChain + LangGraph", "DuckDuckGo API", "Pinecone", "REST API"],
        description:
            "Medical Chatbot using Multi-Agentic Retrieval Augmented Generation (RAG).",
        highlights: [
            "Built a multi-agent medical QA system with an LLM-powered Orchestrator coordinating retrieval, web search, and synthesis agents.",
            "Implemented Retrieval-Augmented Generation (RAG) using a Pinecone vector database and real-time DuckDuckGo web search.",
            "Integrated Google Gemini 1.5 Flash for high-quality context synthesis and accurate medical answer generation."
        ],
        link: "#",
    },
    {
        title: "Event Management System",
        tech: ["React", "Python", "MySQL", "Tailwind"],
        description: "Designed a responsive React UI featuring modals, client-side filtering, while connecting to backend APIs to fetch, modify, and sync event data seamlessly.",
        highlights: [
            "Developed a full-stack Event Management System using React (Tailwind) for the frontend and Flask + MySQL for the backend.",
            "Modern React dashboard — search, filters, inline editing.",
            "Secure CRUD operations with MySQL backend.",
            "Built RESTful APIs for event creation, editing, attendee management, and secure data handling.",
        ],
        link: "#",
    },
    {
        title: "Code Evolution Analyzer",
        tech: ["Java", "Python", "Git", "Pandas", "AST"],
        description:
            "Research tool analyzing thousands of commits for test maintenance evolution.",
        highlights: [
            "Automated test method parsing using AST.",
            "Complexity, LOC, assertions, method call metrics.",
            "Correlation + visualization for research study.",
        ],
        link: "#",
    },
    {
        title: "ClapCam Gesture Detector",
        tech: ["Python", "OpenCV", "MediaPipe"],
        description: "AI-powered gesture-controlled camera tool.",
        highlights: [
            "Clap-activated photo capture using real-time hand detection ",
        ],
        link: "#",
    },
    {
        title: "Online Bookstore with Recommendations",
        tech: ["React", "Node.js", "MongoDB", "Tensor-Flow"],
        description: "Website for buying and selling books with integrated Recommendation System for Users.",
        highlights: [
            "Built an online bookstore platform with user-friendly browsing, search, and book detail pages.",
            "Designed a clean frontend interface (React/Tailwind) for smooth navigation and personalized user experience.",
            "Developed backend APIs for book data, user preferences, and recommendation delivery.",
        ],
        link: "#",
    },
    {
        title: "Mini Doctor Server",
        tech: ["NodeJS ", "Flutter", "MongoDB ", "API medic"],
        description:
            "Digital health management platform for quick assessments.",
        highlights: [
            "REST API for triage & medical assessments.",
            "React UI with clean form handling.",
            "Secure role-based routing.",
        ],
        link: "#",
    },
];

const experiences = [
    {
        role: "Technology Assistant(Graduate Assistant)",
        org: "North Dakota State University",
        time: "2024 - Present",
        details: [
            "Provide front-line desktop and application support to faculty, staff, and students through Zoom and FreshService, resolving issues with LMS and academic tools (Blackboard, YuJa, Honorlock).",
            "Create technical documentation, tutorials, and knowledge base pages for faculty and students, improving system understanding.",
            "Manage the FreshService ticketing system, efficiently handling day-to-day technical issues for academic tools",
            "Develop and review •	 Provide thesis and dissertation formatting support while leading technology workshops and individualized training sessions for faculty, staff, and students materials, tutorials, and other documentation on university - standard technologies and multimedia",
            "Collaborate with faculty during summer remediation projects, assisting in making teaching materials fully accessible in compliance with current mandatory accessibility policies."
        ],
    },
    {
        role: "Graduate Research Assistant",
        org: "North Dakota State University",
        time: "2024 - Present",
        details: [
            "Analyze large open-source repositories to study test maintenance and evolution.",
            "Build Python tooling for automated metric extraction and correlation analysis.",
            "Work collaboratively in research groups, participating in meetings and discussions while contributing through code reviews.",
            "Extracted and processed large code repository datasets using Python, performing automated parsing and analysis.",
            "Applied data extraction, parsing, and analysis tools (Python, Git, CSV/JSON processing) to derive insights from large repositories."
        ],
    },

    {
        role: "Technical Consultant & Software Developer/",
        org: "NeoSoftware pvt Ltd",
        time: "Feb 2023 - May 2024",
        details: [
            "Worked on the web-based version of Human Resource Information System and developed core web features including a RAGbased chatbot.",
            "Integrated REST APIs into React using Axios and fetch, optimizing data flow and improving UI rendering performance by 40%.",
            "Developed SQL queries, stored procedures, and triggers to optimize large report retrieval, improving performance by 25%.",
            "Provided remote Tier2/3 technical and application support for ERP/HRIS, across 15+ client organizations, troubleshooting complex technical issues independently",
            "Led QA validation and release-readiness activities for multiple ERP system releases, coordinating with developers to ensure quality standards, timely defect resolution, and successful production launches.",
            "Led ERP/HRIS deployments including database setup, configuration, and large-scale data migration securely in compliance with security policies, additionally developed core features such as a RAG-based chatbot for enhanced client solutions."
        ],
    },

    {
        role: "Technical Support Coordinator",
        org: "IMS Software Pvt. Ltd",
        time: "Jan 2022 - Feb 2023",
        details: [
            "Provided technical support to clients by generating custom ERP reports and resolving report-related issues.",
            "Worked on designing and developing backend APIs to efficiently fetch and deliver data to client - facing UIs.",
            "Delivered customer-facing SaaS support for ERP systems, troubleshooting technical issues and improving user experience by 35%.",
            "Tracked and resolved ticketed incidents, collaborating with cross - functional teams to efficiently diagnose and fix technical issues.",
            "Validated new builds, tested system updates, and verified bug fixes before deployment in staging/production environments following ITIL change management procedures"
        ],
    },
    {
        role: "Software Engineer Intern",
        org: "National Data Center",
        time: "2019-2020",
        details: [
            "Rebuilt the official website with React.js, implementing performance optimizations that increased UI responsiveness by 30%",
            "Built secure and efficient REST API endpoints (GET/POST/PUT/DELETE) using Node.js and helped integrate services across systems.",
            "Automated deployment with CI/CD pipelines (Git/Bitbucket), ensuring software quality through containerized testing in AWS."
        ],
    }
];

const contactLinks = [
    {
        label: "Email",
        value: "",
        href: "aayush.lamsal3@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "",
        href: "https://www.linkedin.com/in/aayush-lamsal-08a158362/",
    },
    {
        label: "GitHub",
        value: "",
        href: "https://github.com/Aayush-lamsal?tab=repositories",
    },
];


function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen w-full overflow-hidden text-white"
        >
            <video
                src={process.env.PUBLIC_URL + "/backgroung.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Content layer */}
            <div className="relative z-10 h-full px-20 pt-20">
                {/* Two columns: Left menu / Right info */}
                <div className="flex h-full justify-between items-start">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-5xl font-light tracking-tight">Aayush Lamsal</h1>
                        <p className="mt-2 text-sm">Software & Technology Enthusiast</p>

                        <div className="mt-10 space-y-4 text-sm">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() =>
                                        document.getElementById(item.id)?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }
                                    className="block transition hover:text-gray-300"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - pinned to bottom of this hero layout (not fixed) */}
                    <div className="flex h-full flex-col items-end">
                        <div className="mt-auto w-[320px] max-w-[90vw] text-right text-sm leading-relaxed opacity-90 py-10">
                            <p>Born in 1999</p>
                            <p>in Hetauda, Nepal.</p>
                            <p>Believes great tech design</p>
                            <p>Learning and growing every single day.</p>

                            <p className="mt-2 text-xs opacity-80">
                                <marquee>  Exploring new software development opportunities</marquee>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function Section({ id, title, children }) {
    return (
        <section id={id} className="text-white py-10">

            <div className="w-full flex items-center justify-center gap-3 mb-3 px-4">
                <div className="w-[600px] h-px bg-gradient-to-r from-slate-700 via-sky-500/40 to-slate-700"></div>

                <h2 className="text-lg font-semibold md:text-xl whitespace-nowrap">{title}</h2>

                <div className="w-[600px] h-px bg-gradient-to-r from-slate-700 via-sky-500/40 to-slate-700"></div>
            </div>

            <div className="mx-auto max-w-6xl px-6">
                {children}
            </div>

        </section>
    );
}


function About() {
    return (
        <Section id="info" title="About Me">

            <div className="grid gap-4 text-sm text-white md:grid-cols-[3fr,2fr] bg-transparent">
                <p>
                    I am a Computer Science student who enjoys building clean, user-focused software and learning how real-world systems evolve over time. I value strong fundamentals, clear communication, and thoughtful design.
                    I bring experience in both software development and technical support, allowing me to build reliable solutions while providing dedicated, user-centered support.
                </p>
            </div>
        </Section>
    );
}

function Skills() {
    return (
        <Section id="skills" title="Skills">
            <div className="grid gap-7 md:grid-cols-3">
                {Object.entries(skills).map(([group, items]) => (
                    <div
                        key={group}
                        className={
                            "rounded-2xl border border-slate-500 bg-slate-900/60 p-4 " +
                            (group === "Coursework" ? "md:col-span-3" : "")
                        }
                    >
                        <h3 className=" max-w-300 mb-4 text-sm font-semibold text-slate-100">
                            {group}
                        </h3>

                        <div className="flex flex-wrap gap-2 text-xs">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-slate-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}


function Projects() {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/60 p-4 shadow-sm"
                    >
                        <h3 className="text-sm font-semibold text-slate-50">
                            {project.title}
                        </h3>
                        <p className=" mt-1 text-xs text-slate-300">
                            {project.description}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2 text-[0.65rem]">
                            {project.tech.map((tag) => (
                                <span
                                    className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-sky-200"
                                    key={tag}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <ul className=" flex flex-col text-left mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                            {project.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
}



function Experience() {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-4">
                {experiences.map((exp) => (
                    <div
                        key={exp.role}
                        className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
                    >
                        <div className="flex justify-between text-sm text-slate-100">
                            <div className="flex flex-col text-left">
                                <p className="font-semibold">{exp.role}</p>
                                <p className="flex-col text-xs text-slate-100">{exp.org}</p>
                            </div>
                            <p className="text-xs font-medium text-sky-300">{exp.time}</p>
                        </div>
                        <ul className="mt-3 list-disc list-inside space-y-1 text-xs text-slate-300 text-left pl-0">
                            {exp.details.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function Education() {
    return (
        <Section id="education" title="Education">
            <div className="space-y-5">
                {Schooldata.map((school) =>
                    <div
                        key={school.title}
                        className="font-semibold text-xs rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
                    >
                        {/* Flex row for left + right */}
                        <div className="flex justify-between items-start">

                            {/* LEFT SIDE */}
                            <div className="text-left">
                                <p>{school.title}</p>
                                <p>{school.degree}</p>

                            </div>

                            {/* RIGHT SIDE (location + date stacked) */}
                            <div className="text-right flex flex-col items-end text-slate-100 -mt-1">
                                <p>{school.location}</p>
                                <p className="text-xs text-slate-400">{school.date}</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </Section>

    );
}



function Certification() {
    return (
        <Section id="Certifications" title="Certifications">

            <div className="aayush">
                {Certifications.map((cert) => (
                    <a
                        key={cert.name}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-semibold text-xs  ml-5 rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
                    >
                        {cert.name}
                    </a>
                ))}
            </div>
        </Section >
    );

}
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then(
                () => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log(error);
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <Section id="contact" title="Contact">
            <form
                onSubmit={sendEmail}
                className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-700"
            >
                <input
                    name="name"
                    placeholder="Name"
                    className="w-full border border-slate-700 bg-slate-900 rounded-lg p-2 text-xs"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-slate-700 bg-slate-900 rounded-lg p-2 text-xs"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    className="w-full border border-slate-700 bg-slate-900 rounded-lg p-2 text-xs"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button className="w-full bg-sky-500 py-2 text-white rounded-xl text-xs hover:bg-sky-400">
                    Submit
                </button>
            </form>
        </Section>
    );
}


export default function Portfolio() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-50">

            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certification />
            <Contact />

        </div>
    );
}
