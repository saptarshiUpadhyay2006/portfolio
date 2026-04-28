const experiences = [
    {
        period: "March 2026 - Present",
        role: "SDE Intern",
        company: "Aarish AI Technologies Inc. Remote",
        description: "Contributed to a LORROS defence project by developing full-stack solutions using REST APIs, secure architecture, and scalable system design. Worked with high-performance, AI-integrated applications with focus on real-time processing, optimization, and efficient data handling. Collaborated in an agile environment to design, debug, and deploy reliable, mission-critical systems.",
        technologies: ["Full-Stack", "REST APIs", "AI Integration", "Agile"],
        current: true,
    },
    {
        period: "2025-present",
        role: "Web Developer",
        company: "ACM JU Chapter",
        description: "Working in the Web Development team of ACM Student Chapter, Jadavpur University, following best practices in front-end and back-end development.",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        current: true,
    },
    // {
    //     period:"Dec,2024-Jan,2025",
    //     role:"Campus Ambassador",
    //     company:"Kshitij, IITKGP, Kharagpur",
    //     description:"I worked as a Campus Ambassador for Kshitij, IIT Kharagpur, Asia's largest techno-management fest. In this role, I promoted the fest within my college, organized awareness campaigns, and encouraged student participation. I acted as the bridge between Kshitij and my campus, driving engagement through events, social media promotions, and effective communication.",
    //     technologies:["Public Relations","Campus Leadership","Digital Marketing"],
    //     current:false,
    // },
    {
        period: "Aug,2024-Nov,2024",
        role: "Subject Matter Expert",
        company: "Solvitude Solutions Private Limited",
        description: "As a Subject Matter Expert, I play a pivotal role in developing and implementing effective solutions to address the pain points of students. My expertise lies in creating engaging and interactive learning experiences that cater to the diverse needs of students, ensuring they receive the support they need to succeed.",
        technologies: ["Problem Solving", "Content Development", "Academic Mentoring"],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm
                    font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold
                    mt-4 mb-6 animate-fade-in animation-delay-100
                    text-secondary-foreground">
                        Beyond the
                        <span
                            className="font-serif italic font-normal text-white"> Classroom
                        </span>
                    </h2>

                    <p className="text-muted-foreground
           animate-fade-in animation-delay-200">
                        A snapshot of my journey from a motivated learner to a hands-on developer—combining strong computer science fundamentals with real-world experience in web development, student leadership, and building impactful, full-stack and AI-driven projects.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience contents */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 hover-lift`}>
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-muted-foreground">
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}