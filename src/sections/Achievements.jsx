import { Trophy, Award, Star, Medal, Code2, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionBackground } from "@/components/SectionBackground";

const achievements = [
    {
        title: "Codeforces",
        description: "Maximum Rating 1437 (Specialist)",
        icon: Code2,
        link: "https://codeforces.com/profile/spuk_2006"
    },
    {
        title: "LeetCode",
        description: "Maximum Rating 1881 (Knight)",
        icon: Star,
        link: "https://leetcode.com/u/nLMc7g3P5O/"
    },
    {
        title: "HackSprint",
        description: "Selected among the Top 8 finalists in the national hackathon hosted at IIEST Shibpur. (Certificate)",
        icon: Trophy,
        link: "https://drive.google.com/file/d/1l8jY2v8UfQDIApUEFN2uE2rjcxEmRXpn/view"
    },
    {
        title: "East India Blockchain Summit (EIBS 2.0)",
        description: "Finalist in the EIBS 2.O, IIT KGP. (Certificate)",
        icon: Award,
        link: "https://drive.google.com/file/d/1XIAN5hTqTV5u92FpNO5s95wXNjCWyd78/view"
    },
    {
        title: "Double Slash 4.0 Hackathon (IEEE)",
        description: "Selected as Finalist among participating teams. (Certificate)",
        icon: Medal,
        link: "https://drive.google.com/file/d/1wXcEFo1U-u0PMCEL_IDJj7U-2U9djqVL/view"
    }
];

export const Achievements = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="achievements" ref={sectionRef} className="py-32 relative overflow-hidden">
            <SectionBackground />
            {/* Background glowing orbs */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 z-0" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-3xl z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-20">
                    <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}>
                        Milestones
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground opacity-0 ${isVisible ? 'animate-slide-up animation-delay-100' : ''}`}>
                        Achievements
                    </h2>
                    <p className={`text-muted-foreground text-lg opacity-0 ${isVisible ? 'animate-slide-up animation-delay-200' : ''}`}>
                        A collection of my competitive programming milestones and hackathon successes.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {achievements.map((achievement, idx) => {
                        const Icon = achievement.icon;
                        return (
                            <a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={idx}
                                className={`group block glass p-6 md:p-8 rounded-3xl hover-lift border border-primary/20 hover:border-primary/50 hover:glow-border transition-all duration-500 relative overflow-hidden opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Subtle gradient background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                                    {/* Icon Container */}
                                    <div className="relative w-16 h-16 rounded-2xl bg-surface border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 overflow-hidden shadow-lg">
                                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-secondary-foreground group-hover:text-primary group-hover:glow-text transition-all duration-300">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                            {achievement.description}
                                        </p>
                                    </div>

                                    {/* Decorative arrow element */}
                                    <div className="hidden md:flex w-12 h-12 rounded-full glass items-center justify-center opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 border-primary/30 group-hover:border-primary/50 group-hover:bg-primary/10">
                                        <ChevronRight className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
