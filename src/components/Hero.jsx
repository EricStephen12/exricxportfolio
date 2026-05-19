import { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const atoms = [...Array(40)].map((_, i) => ({
    id: i,
    x: (i * 7.7) % 100,
    y: (i * 13.3) % 100,
    size: ((i * 0.7) % 2.5) + 1.5,
    speed: ((i * 1.9) % 8) + 6,
}));

const Hero = () => {
    const sectionRef = useRef(null);

    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);


    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-between overflow-hidden bg-darker px-6 sm:px-12 lg:px-20 py-24 cursor-none"
        >
            {/* Fine Grid Network */}
            <div className="absolute inset-0 z-0 opacity-25 pointer-events-none overflow-hidden">
                <svg className="w-full h-full">
                    {atoms.map((atom, i) => (
                        <motion.line
                            key={`line-${i}`}
                            x1={`${atom.x}%`}
                            y1={`${atom.y}%`}
                            x2={springX}
                            y2={springY}
                            stroke="rgba(197, 168, 128, 0.2)"
                            strokeWidth="1"
                        />
                    ))}
                </svg>

                {atoms.map((atom) => (
                    <motion.div
                        key={atom.id}
                        className="absolute rounded-full bg-gold"
                        style={{
                            left: `${atom.x}%`,
                            top: `${atom.y}%`,
                            width: atom.size,
                            height: atom.size,
                            boxShadow: '0 0 10px rgba(197, 168, 128, 0.8)',
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: atom.speed,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Luxury Cursor Follower */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold/40 pointer-events-none z-50 flex items-center justify-center"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(197, 168, 128, 1)]" />
                <div className="absolute w-24 h-24 border border-gold/5 rounded-full animate-ping" />
            </motion.div>

            {/* Vertical Editorial Sidebar Text */}
            <div className="absolute left-8 bottom-12 hidden lg:block z-10">
                <p className="text-gold/40 text-[9px] font-subheading tracking-[0.4em] uppercase vertical-text">
                    EXRICX AGENCY // EST. 2026
                </p>
            </div>

            <div className="absolute right-8 bottom-12 hidden lg:block z-10">
                <p className="text-gold/40 text-[9px] font-subheading tracking-[0.4em] uppercase vertical-text">
                    THE ART OF CODE
                </p>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Left Column: Clear, Direct Copy */}
                <motion.div
                    className="flex-1 text-left space-y-8"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="space-y-4">
                        <span className="editorial-label">
                            Boutique Web & Mobile Atelier
                        </span>
                        
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight">
                            Exricx <br />
                            <span className="italic font-light font-heading text-gradient-gold">Agency.</span>
                        </h1>
                    </div>

                    <div className="h-[1px] w-24 bg-gold/30"></div>

                    <div className="max-w-xl space-y-6">
                        <h3 className="text-gold font-subheading tracking-[0.2em] uppercase text-xs sm:text-sm font-medium">
                            We design and build custom digital products
                        </h3>
                        <p className="text-gray-400 text-base sm:text-lg font-body leading-relaxed font-light">
                            We combine clean design with fast, solid code. No templates, no shortcuts. Just pure digital craft for brands who value quality.
                        </p>
                    </div>

                    <div className="pt-6">
                        <motion.a
                            href="#portfolio"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-6 border border-gold/40 hover:border-gold px-8 py-4 bg-transparent text-white font-subheading text-[10px] tracking-[0.25em] transition-all duration-300 hover:bg-gold hover:text-dark group"
                        >
                            EXPLORE THE WORKS
                            <ArrowRight size={14} className="text-gold group-hover:text-dark group-hover:translate-x-1 transition-all" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Column: Profile Frame */}
                <motion.div
                    className="flex-1 relative flex items-center justify-center w-full lg:w-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] border border-gold/10 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-[360px] h-[360px] sm:w-[530px] sm:h-[530px] border border-gold/5 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative w-[280px] h-[400px] sm:w-[380px] sm:h-[540px] p-2 border border-gold/25 bg-darker/60 backdrop-blur-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex items-center justify-center">
                        <div className="absolute inset-4 border border-gold/10"></div>
                        
                        <div className="w-full h-full overflow-hidden bg-dark relative z-10 flex items-center justify-center">
                            <img
                                src="/profile.png"
                                alt="Eric Stephen"
                                className="w-full h-full object-cover grayscale brightness-90 contrast-125 hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gold/5 mix-blend-color-burn pointer-events-none"></div>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-darker/90 border border-gold/30 px-4 py-2 text-center w-[70%] backdrop-blur-sm">
                            <span className="block text-[8px] font-subheading tracking-[0.3em] uppercase text-gold font-light">FOUNDER & DEVELOPER</span>
                            <span className="block text-xs font-heading text-white mt-1 italic">Eric Stephen</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 hidden lg:flex z-20">
                {[
                    { Icon: Github, href: "https://github.com/EricStephen12" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Instagram, href: "#" },
                ].map((social, i) => (
                    <motion.a
                        key={i}
                        href={social.href}
                        whileHover={{ scale: 1.2, color: "#c5a880" }}
                        className="text-gray-500 transition-colors"
                    >
                        <social.Icon size={16} />
                    </motion.a>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}} />
        </section>
    );
};

export default Hero;
