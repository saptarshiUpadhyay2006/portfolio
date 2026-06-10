import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionBackground } from "@/components/SectionBackground";

const projects = [
    {
        title: "HomeQuest",
        description: "HomeQuest is a full-stack web application inspired by Airbnb and other travel platforms. It’s designed to help users list, discover, and manage stays — built entirely using the MERN stack. My main focus during this project was creating strong end-to-end backend services with clean, scalable code.",
        image: "/projects/pa1.png",
        tags: ["MERN", "Bootstrap", "Mapbox API", "MongoDB Atlas"],
        link: "https://majorproject1-chxv.onrender.com/listings",
        github: "https://github.com/Spuk2006-glitch/HomeQuest",
    },
    {
        title: "Zerodha_Clone",
        description: "Zerodha_Clone is a full-stack web application that replicates the design, layout, and core features of the popular Indian stock-trading platform Zerodha. Inspired by Zerodha’s intuitive UI and trading workflow, this project demonstrates how modern web technologies can be used to build a stock-brokerage-like interface for educational and portfolio purposes.",
        image: "/projects/pj2.png",
        tags: ["React.js", "MongoDB", "Chart.js", "bcrypt"],
        link: "#",
        github: "https://github.com/Spuk2006-glitch/Zerodha_Clone",
    },
    {
        title: "Greenlens",
        description: "GreenLens is a sustainability platform that helps users track, reduce their environmental impact through daily activity logging -rewarding sustainability through transparency and technology.It verifies eco-friendly actions using an ML-based system and rewards users with Green Tokens stored transparently on-chain. ",
        image: "/projects/pj8.png",
        tags: ["React", "TailwindCSS", "Express", "FastAPI"],
        link: "https://greenlens-spuk.vercel.app/",
        github: "https://github.com/saptarshiUpadhyay2006/Greenlens",
    },
    {
        title: "Binivex",
        description: "Built an AI-driven stock & crypto trend prediction system using LSTM-based deep learning and sentiment analysis with FinBERT/VADER.Developed a full-stack MERN web application with real-time dashboards, live market data integration, and REST API communication.",
        image: "/projects/binivex-image.png",
        tags: ["MERN", "Pandas", "Chart.js", "Python"],
        link: "https://binivex.vercel.app/",
        github: "https://github.com/Spuk2006-glitch/Binivex_Implementation",
    },
]

export const Projects = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
            <SectionBackground />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl z-0" />
            <div className="container mx-auto px-6 relative z-10">

                {/* Section padding */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}>
                        Featured Work
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground opacity-0 ${isVisible ? 'animate-slide-up animation-delay-100' : ''}`}>
                        Projects That
                        <span className="font-serif italic font-normal text-white"> Drive Impact.
                        </span>
                    </h2>
                    <p className={`text-muted-foreground opacity-0 ${isVisible ? 'animate-fade-in animation-delay-200' : ''}`}>
                        A showcase of my recent work—building scalable web apps and innovative tools that tackle real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className={`group glass rounded-2xl overflow-hidden md:row-span-1 hover-lift opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div
                                    className="absolute inset-0 
                                bg-gradient-to-t from-card via-card/50
                                to-transparent opacity-60"
                                />

                                {/* Overlay links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 
                            text-muted-foreground group-hover:text-primary
                            group-hover:translate-x-1 
                            group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className={`text-center mt-12 opacity-0 ${isVisible ? 'animate-scale-in animation-delay-500' : ''}`}>
                    <a
                        href="https://github.com/saptarshiUpadhyay2006"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};