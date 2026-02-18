import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Download, ArrowRight } from 'lucide-react';

const Resume = () => {
    const experiences = [
        {
            company: 'Exricx — Personal Company',
            role: 'Founder & Full-Stack Engineer',
            year: '2022 – PRESENT',
            icon: Code,
            description: 'Built and shipped multiple production web and mobile applications for real clients across e-commerce, real estate, agriculture, and creative industries. Handled architecture, development, and deployment end-to-end.'
        },
        {
            company: 'TaskClarify — Personal Product',
            role: 'Full-Stack Engineer (Backend + Mobile)',
            year: '2024 – PRESENT',
            icon: Code,
            description: 'Built a complete task management system with React Native mobile app (Android & iOS) and a Node.js/Next.js backend API. Implemented JWT auth, RBAC, Supabase (PostgreSQL), and REST API endpoints for third-party integrations.'
        },
        {
            company: 'FurniLux (Smart Best Brand) — Paid Client',
            role: 'Full-Stack Engineer',
            year: '2023 – 2024',
            icon: Briefcase,
            description: 'Built a full luxury furniture e-commerce platform with Next.js, TypeScript, Supabase (PostgreSQL), and Prisma ORM. Implemented product catalogue, cart, wishlist, filtering, and deployed to Vercel.'
        },
        {
            company: 'Yutaka Farm, Oyibest Properties, Studio Metavuz — Paid Clients',
            role: 'Full-Stack Engineer',
            year: '2023 – 2024',
            icon: Briefcase,
            description: 'Delivered professional business websites for paying clients — farm business, real estate listings, and creative studio. Built with Next.js, TypeScript, and Node.js email APIs. All deployed to Vercel.'
        },
        {
            company: 'National Institute of Information Technology (NIIT)',
            role: 'Diploma — Software Engineering',
            year: 'Feb 2023 – Jul 2025',
            icon: GraduationCap,
            description: 'Formal training in software engineering and full-stack development at NIIT, Wuse, FCT Abuja, Nigeria.'
        }
    ];

    return (
        <section id="resume" className="py-24 px-4 sm:px-8 lg:px-16 bg-darker relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-heading font-bold rounded-full mb-4 border border-primary/20">
                        Resume
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-6">
                        My Resume
                        <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-dark p-8 rounded-[30px] border border-gray-800 hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/10"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                {/* Icon Circle */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full border-2 border-primary/30 group-hover:border-primary flex items-center justify-center bg-darker transition-colors duration-300 relative">
                                    <div className="absolute inset-1 rounded-full border border-primary/10 group-hover:border-primary/40"></div>
                                    <exp.icon className="text-primary w-8 h-8 sm:w-10 sm:h-10" />
                                </div>

                                <div className="flex-1 space-y-2">
                                    <h5 className="text-primary font-heading font-bold text-sm tracking-wider uppercase">
                                        {exp.company}
                                    </h5>
                                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs font-mono rounded-md">
                                        {exp.year}
                                    </span>
                                    <p className="text-gray-400 text-sm mt-2 font-body leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Download Button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading font-bold rounded-full hover:glow-primary-lg transform hover:scale-105 transition-all duration-300 group"
                    >
                        VIEW FULL PROFILE
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                            <ArrowRight size={16} />
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
