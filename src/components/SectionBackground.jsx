import { useMemo } from "react";

export const SectionBackground = () => {
    const particles = useMemo(() => {
        return [...Array(25)].map((_, i) => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5,
            size: Math.random() > 0.5 ? 'w-2 h-2' : 'w-1.5 h-1.5',
            opacity: 0.4 + Math.random() * 0.4 // 40% to 80% opacity
        }));
    }, []);

    return (
        <>
            {/* Background Image with lowered gradient masking for more prominence */}
            <div className="absolute inset-0 z-0">
                <img src="/b1.jpg" alt="Background" className="w-full h-full object-cover opacity-30"/>
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background"/>
            </div>
            
            {/* Dynamic slow moving glowing orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[100px] animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }} />
            </div>

            {/* Glowing Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full ${p.size}`}
                        style={{
                            backgroundColor: "#20B2A6",
                            boxShadow: "0 0 8px #20B2A6, 0 0 12px #20B2A6",
                            opacity: p.opacity,
                            left: p.left,
                            top: p.top,
                            animation:`slow-drift ${p.duration}s ease-in-out infinite`,
                            animationDelay:`${p.delay}s`
                        }}
                    />
                ))}
            </div>
        </>
    );
};
