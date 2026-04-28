import { ChevronLeft, ChevronRight,Quote} from "lucide-react";
import { useState } from "react";
const testdata = [
    {
      author: "Asit",
      role: "Tech Lead, Aarish Tech",
      quote:
        "Saptarshi showed strong debugging and problem-solving skills while working on our LORROS defence project. He quickly identified issues in complex full-stack and API workflows and resolved them with efficient, well-structured solutions. His ability to optimize real-time, AI-integrated systems and ensure reliability under pressure was impressive. He consistently contributed to stable and scalable deployments in an agile environment.",
      avatar:
        "/asit.png",
    },
    {
      author: "Sarah",
      role: "Web Development Lead, ACM JU Chapter",
      quote:
        "Saptarshi has been a reliable and detail-oriented Web Developer in our ACM JU Chapter. He follows best practices, adapts quickly to new tools, and consistently contributes clean, responsive components that strengthen our overall web presence",
      avatar:
        "/t3.jpg",
    },
    {
      author: "Shrirang Patel",
      role: "Campus Relations Team,Kshitij, IIT Kharagpur",
      quote:
        "As a Campus Ambassador, Saptarshi played an important role in expanding Kshitij’s reach on his campus. His communication skills, initiative, and ability to engage students helped drive strong participation and awareness for the fest.",
      avatar:
        "/t1.jpg",
    },
    {
      author: "Vineet",
      role: "Academic Team, Solvitude Solutions Pvt. Ltd.",
      quote:
        "Saptarshi demonstrated strong subject clarity and problem-solving skills as a Subject Matter Expert. He created engaging learning content and addressed student doubts effectively, contributing positively to the learning experience.",
      avatar:
      "/t2.jpg"
    }
  ];
  

export const Testimonials=()=>{
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testdata.length);
    };

    const previous = () => {
        setActiveIdx(
        (prev) => (prev - 1 + testdata.length) % testdata.length
        );
    };

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2
            w-[800px] h-[800px] bg-primary/5
                rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div
                className="container mx-auto 
            px-6 relative z-10"
            >
                {/*Header div*/}
                    <div
                    className="text-center max-w-3xl 
                    mx-auto mb-16"
                    >
                    <span
                        className="text-secondary-foreground 
                    text-sm font-medium tracking-wider 
                    uppercase animate-fade-in"
                    >
                        Reflections from My Journey
                    </span>
                    <h2
                        className="text-4xl md:text-5xl 
                    font-bold mt-4 mb-6 animate-fade-in 
                    animation-delay-100 text-secondary-foreground"
                    >
                        What People Say About{" "}
                        <span
                        className="font-serif italic 
                        font-normal text-white"
                        > My Work
                        </span>
                    </h2>
                </div>

                {/* Testimonies */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground"/>
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testdata[activeIdx].quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img src={testdata[activeIdx].avatar} alt={testdata[activeIdx].author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"/>
                                <div >
                                    <div className="font-semibold">{testdata[activeIdx].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{testdata[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                <ChevronLeft/>
                            </button>
                            <div className="flex gap-2">
                                {testdata.map((_,idx)=>(
                                    <button onClick={() => setActiveIdx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx===activeIdx?"w-8 bg-primary":"bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}/>
                                ))}
                            </div>
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                                <ChevronRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
