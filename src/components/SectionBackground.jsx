import { RetroGrid } from "@/components/ui/retro-grid";

export const SectionBackground = () => {

    return (
        <>
            {/* Background Image with lowered gradient masking for more prominence */}
            <div className="absolute inset-0 z-0">
                <img src="/b1.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <RetroGrid className="z-[1]" opacity={0.15} lightLineColor="#20B2A6" darkLineColor="#20B2A6" />
                <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background via-transparent to-background pointer-events-none"/>
            </div>
            
            {/* Dynamic slow moving glowing orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-highlight/10 rounded-full blur-[100px] animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }} />
            </div>
        </>
    );
};
