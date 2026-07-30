import {Button} from "@/components/Button";
import { ArrowRight,ChevronDown,Download, Github, Linkedin} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { RetroGrid } from "@/components/ui/retro-grid";

const skills=[
  "ReactJS",
  "Express",
  "TypeScript",
  "Node.js",
  "MapBoxGL",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "Github",
  "AI",
  "ML",
  "RL"
];


export const Hero=()=>{
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
            <img src="/b1.jpg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover opacity-80"/>
            <RetroGrid className="z-[1]" opacity={0.3} lightLineColor="#20B2A6" darkLineColor="#20B2A6" />
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none"/>
        </div>

        {/* content div */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                        Full-Stack Software Developer
                    </span>
                </div>

                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up animation-delay-100">
                    Designing <span className="text-gradient glow-text animate-text-gradient">scalable</span>
                    <br />
                    web systems with
                    <br />
                    <span className="font-serif italic font-normal text-white">
                      precision.
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Hi, I’m Saptarshi Upadhyay — a software developer experienced in full-stack web
                  development and machine learning. I build scalable applications and intelligent
                  systems using modern frameworks, data-driven models, and clean engineering
                  practices.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
                  <Button size="lg">
                    Contact Me<ArrowRight className="w-5 h-5"/>
                  </Button>
                  <a href="https://drive.google.com/file/d/1E3V6f40k3Y4rSGEfZahhHNvttClo32Ef/view?usp=drive_link">
                  <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                  </AnimatedBorderButton>
                  </a>
                </div>

                {/* Socials div*/}
                <div className="flex items-center gap-4 animate-slide-up animation-delay-400">
                  <span className="text-sm text-muted-foreground">Follow me:</span>
                  {[
                    {icon:Github,href:"https://github.com/Spuk2006-glitch"},
                    {icon:Linkedin,href:"https://www.linkedin.com/in/saptarshi-upadhyay-461888227/"}
                  ].map((social,idx)=>(
                    <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                      {<social.icon className="w-5 h-5"/>}
                    </a>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative animate-scale-in animation-delay-300">
                <div className="relative max-w-md mx-auto">
                  <div
                    className="absolute inset-0 
                  rounded-3xl bg-gradient-to-br 
                  from-primary/30 via-transparent 
                  to-primary/10 blur-2xl animate-pulse"
                  />
                  <div className="relative glass rounded-3xl p-2 glow-border ">
                    <img src="/profile-tech.png" alt="Saptarshi Upadhyay" className="w-full aspect-[4/5] object-cover rounded-2xl"/>

                    {/* Floating div */}
                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                        <span className="text-sm font-medium">Available for Work</span>
                      </div>
                    </div>

                    {/* Stats div */}
                    <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                      <div className="text-2xl font-bold text-primary">
                        1+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        YoE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills div */}
            <div className="mt-20 animate-slide-up animation-delay-600">
              <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                  {[...skills,...skills].map((skill,idx)=>(
                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                      <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
    </section>
    )
}
