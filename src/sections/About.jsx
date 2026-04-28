import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously exploring modern technologies and thoughtful solutions to build future-ready software.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with cross-functional teams to transform ideas into reliable, real-world products.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing readable, maintainable, and scalable code with long-term quality in mind.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Building fast, responsive applications with a strong focus on optimization and user experience.",
    },
];

export const About=()=>{
    return (
        <section id="about"className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building Software
                            <span className="font-serif italic font-normal text-white"> with clarity, purpose, and scale.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                            I’m Saptarshi Upadhyay, a full-stack software developer with hands-on experience building scalable web applications and intelligent systems. My work spans modern frontend development with React and TypeScript, robust backend systems using Node.js and Express, and cloud-ready deployments leveraging tools like Docker, AWS, and Vercel. I focus on writing clean, maintainable code and designing systems that are both performant and easy to evolve.
                            </p>
                            <p>
                            Alongside full-stack development, I have a strong interest in machine learning and data-driven problem solving. I’ve worked with applied ML concepts and enjoy bridging traditional software engineering with intelligent decision-making systems. Whether it’s designing APIs, building user-centric interfaces, or experimenting with AI-driven solutions, I’m motivated by curiosity, continuous learning, and delivering practical, well-engineered solutions.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground"> 
                            My aim is to grow as a software engineer by building scalable, impactful applications that combine strong engineering principles with intelligent systems. I strive to deepen my expertise in full-stack development while continuously exploring machine learning and AI to solve real-world problems. By working in challenging environments and collaborating with driven teams, I aim to create software that is reliable, efficient, and meaningful at scale.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover-lift"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};