import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Skills = () => {
    const techStack = [
        {
            category: "Frontend & Layout",
            techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
        },
        {
            category: "Backend & Servers",
            techs: ["Node.js", "Express.js", "RESTful APIs", "JWT / Auth", "Prisma ORM", "Sequelize"]
        },
        {
            category: "Databases & Storage",
            techs: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "Redis"]
        },
        {
            category: "Mobile & Clouds",
            techs: ["React Native", "Expo SDK", "EAS Builds", "Vercel / AWS", "Docker", "CI/CD Setup"]
        }
    ];

    return (
        <section id="skills" className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

                {/* Left Column: Direct Copy */}
                <motion.div
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="editorial-label">
                        TECHNICAL STACK
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white leading-tight">
                        We build custom, <br />
                        <span className="italic text-gradient-gold">high-performance code.</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-body font-light leading-relaxed">
                        We don't use templates or slow site builders. Our team writes clean code with modern frameworks to ensure your web and mobile platforms are fast, secure, and fully customized to your business goals.
                    </p>

                    {/* Gauges */}
                    <div className="space-y-6 pt-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-[11px] font-subheading tracking-[0.2em] text-white">
                                <span>WEB ENGINEERING</span>
                                <span className="text-gold">98% SPEED INDEX</span>
                            </div>
                            <div className="h-[2px] bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gold"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '98%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-[11px] font-subheading tracking-[0.2em] text-white">
                                <span>MOBILE PERFORMANCE</span>
                                <span className="text-gold">95% FLUIDITY</span>
                            </div>
                            <div className="h-[2px] bg-white/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gold"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '95%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Tech Grid */}
                <motion.div
                    className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {techStack.map((stack, index) => (
                        <div key={index} className="editorial-card rounded-none p-6 space-y-4">
                            <h4 className="text-gold font-heading text-lg italic border-b border-gold/10 pb-2">
                                {stack.category}
                            </h4>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                {stack.techs.map((tech, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Check size={10} className="text-gold flex-shrink-0" />
                                        <span className="text-gray-300 font-body text-xs font-light tracking-wide">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
