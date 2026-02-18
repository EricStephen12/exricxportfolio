import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
    const sectionRef = useRef(null);

    // Mouse tracking with higher responsiveness
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    // Optimized spring physics for a "weightless" feel
    const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

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

    // Memoize atoms so they don't regenerate on every render
    const atoms = useMemo(() => {
        return [...Array(50)].map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 2,
            speed: Math.random() * 5 + 5,
        }));
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-between overflow-hidden bg-darker px-4 sm:px-8 lg:px-16 py-20 cursor-none"
        >
            {/* Custom Interactive Molecule Layer */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
                {/* SVG for connections (Spider-web/Neural effect) */}
                <svg className="w-full h-full">
                    {atoms.map((atom, i) => (
                        <motion.line
                            key={`line-${i}`}
                            x1={`${atom.x}%`}
                            y1={`${atom.y}%`}
                            x2={springX}
                            y2={springY}
                            stroke="rgba(139, 92, 246, 0.4)" // Purple
                            strokeWidth="1.5"
                            className="will-change-transform"
                        />
                    ))}
                </svg>

                {/* Floating Atoms */}
                {atoms.map((atom) => (
                    <motion.div
                        key={atom.id}
                        className="absolute rounded-full bg-primary will-change-transform"
                        style={{
                            left: `${atom.x}%`,
                            top: `${atom.y}%`,
                            width: atom.size,
                            height: atom.size,
                            boxShadow: '0 0 15px rgba(139, 92, 246, 1)', // Purple glow
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, 0],
                        }}
                        transition={{
                            duration: atom.speed,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            {/* Molecule Cursor Follower (The "Nucleus") */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 flex items-center justify-center"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                {/* Connecting links visible around cursor */}
                <div className="absolute w-40 h-40 border border-primary/20 rounded-full animate-ping" />
            </motion.div>

            {/* Decorative vertical lines and text */}
            <div className="absolute left-6 bottom-10 hidden lg:block z-10">
                <p className="text-gray-500 text-xs font-heading tracking-[0.3em] uppercase vertical-text">
                    Exricx.Portfolio.2026
                </p>
                <div className="w-[1px] h-20 bg-gray-700 mx-auto mt-4"></div>
            </div>

            <div className="absolute right-6 bottom-10 hidden lg:block z-10">
                <p className="text-gray-500 text-xs font-heading tracking-[0.3em] uppercase vertical-text">
                    eracissebeauty@gmail.com
                </p>
                <div className="w-[1px] h-20 bg-gray-700 mx-auto mt-4"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Column: Text Content */}
                <motion.div
                    className="flex-1 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h4
                        className="text-2xl sm:text-3xl font-heading font-medium text-white mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        I am
                    </motion.h4>
                    <motion.h1
                        className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Eric <span className="italic">"Exricx"</span> <br /> Stephen
                    </motion.h1>

                    <motion.div
                        className="max-w-xl space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-gray-200 text-xl font-heading font-bold leading-tight">
                            Full-Stack Engineer  •  Backend Specialist  •  Mobile Developer
                        </p>
                        <p className="text-gray-400 text-lg sm:text-xl font-body leading-relaxed">
                            3+ years building and deploying production applications for real clients. Strong backend focus — Node.js, REST APIs, PostgreSQL, Firebase — with full-stack and mobile delivery.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-white font-heading font-semibold rounded-full hover:glow-primary-lg transition-all duration-300 transform hover:scale-105"
                        >
                            VIEW MY WORK
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary">
                                <ArrowRight size={18} />
                            </span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Profile Image */}
                <motion.div
                    className="flex-1 relative flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <motion.div
                        className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] border border-gray-800 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-[380px] h-[380px] sm:w-[540px] sm:h-[540px] border border-gray-900 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full p-2 border-4 border-primary/30 glow-primary">
                        <div className="w-full h-full rounded-full overflow-hidden border-8 border-darker bg-dark relative z-10">
                            <img
                                src="/profile.png"
                                alt="Eric Stephen"
                                className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                            />
                        </div>
                        <div className="absolute inset-x-[-12%] inset-y-[-12%] rounded-full border-2 border-primary/50 blur-[2px] pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>

            {/* Social Links sidebar */}
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
                        whileHover={{ scale: 1.2, color: "#8b5cf6" }}
                        className="text-gray-500 transition-colors"
                    >
                        <social.Icon size={20} />
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
