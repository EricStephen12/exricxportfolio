import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Skills = () => {
    const skillsList = [
        "Backend: Node.js, Express.js, REST APIs, JWT Auth, RBAC",
        "Databases: PostgreSQL, MySQL, MongoDB, Prisma, Supabase",
        "Mobile: React Native (Android & iOS), Expo, EAS Build",
        "Deployment: Vercel, Railway, Hostinger, Bluehost"
    ];

    return (
        <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16 bg-dark">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Column: Image with Checkmark */}
                <motion.div
                    className="flex-1 relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative z-10 rounded-[30px] sm:rounded-[40px] overflow-hidden border-[6px] sm:border-[10px] border-primary/20 p-1 sm:p-2">
                        <div className="rounded-[24px] sm:rounded-[30px] overflow-hidden border-2 sm:border-4 border-primary h-[350px] sm:h-[600px]">
                            <img
                                src="/profile.png"
                                alt="Eric Stephen"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Floating Checkmark Circle */}
                    <div className="absolute -right-6 bottom-1/3 z-20">
                        <motion.div
                            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-xl border-4 border-dark"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <Check size={32} strokeWidth={4} className="sm:w-10 sm:h-10" />
                        </motion.div>
                        <div className="absolute -inset-2 border-2 border-primary/30 rounded-full animate-ping"></div>
                    </div>
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    className="flex-1 space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <span className="inline-block px-6 py-2 bg-primary/10 text-primary text-sm font-heading font-bold rounded-full mb-6 border border-primary/20">
                            Skills
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
                            I Build, Ship, and Maintain <br className="hidden lg:block" />
                            <span className="text-primary">Real Applications</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-body leading-relaxed">
                            My skills are shaped by real projects, client work, workshops, and constant experimentation.
                        </p>
                    </div>

                    {/* Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skillsList.map((skill, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="mt-1 text-primary">
                                    <Check size={20} strokeWidth={3} />
                                </span>
                                <p className="text-gray-300 font-bold font-heading text-sm sm:text-base">{skill}</p>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bars */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                        {/* Web Development Bar */}
                        <div className="space-y-4">
                            <div className="bg-primary text-white text-center py-3 rounded-full font-heading font-bold text-lg shadow-lg shadow-primary/20">
                                Backend & APIs
                            </div>
                            <div className="text-center">
                                <span className="text-4xl font-heading font-bold text-white">90 %</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '90%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        {/* Frontend & Mobile Bar */}
                        <div className="space-y-4">
                            <div className="bg-primary text-white text-center py-3 rounded-full font-heading font-bold text-lg shadow-lg shadow-primary/20">
                                Frontend & Mobile
                            </div>
                            <div className="text-center">
                                <span className="text-4xl font-heading font-bold text-white">85 %</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '85%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
