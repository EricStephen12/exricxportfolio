import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const About = () => {
    const details = [
        { label: 'Name :', value: 'Eric Stephen' },
        { label: 'Experience Level :', value: 'Mid-Level Software Engineer' },
        { label: 'Development Proficiency :', value: 'Full-Stack, Backend & Mobile' },
        { label: 'Tech Stack :', value: 'Node.js · React · Next.js · React Native · PostgreSQL · Firebase' },
        { label: 'Location :', value: 'Abuja, Nigeria (Remote Available)' },
        { label: 'Email ID :', value: 'eracissebeauty@gmail.com' },
    ];

    return (
        <section id="about" className="py-24 px-4 sm:px-8 lg:px-16 bg-dark">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Column: Image with stylized frame */}
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
                                src="/profile2.png"
                                alt="Eric Stephen"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Floating Play Button/Video Circle */}
                    <div className="absolute right-4 sm:-right-6 bottom-4 sm:bottom-1/4 z-20">
                        <motion.div
                            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-xl cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Play fill="currentColor" size={20} className="sm:w-6 sm:h-6 ml-1" />
                        </motion.div>
                        <div className="absolute -inset-2 border-2 border-primary/30 rounded-full animate-ping"></div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
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
                        <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-heading font-bold rounded-full mb-4">
                            About Me
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
                            3+ Years Building Production <br className="hidden sm:block" /> Applications for Real Clients
                        </h2>
                        <p className="text-gray-400 text-lg font-body leading-relaxed max-w-xl">
                            Full-Stack Engineer with a strong backend focus — Node.js, Express, REST API design, JWT auth, RBAC, PostgreSQL, MongoDB, and Prisma. Experienced in React, React Native (Android & iOS), Next.js, TypeScript, and the full Firebase suite. Delivered multiple paid freelance projects end-to-end, from architecture to deployment.
                        </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 pt-4">
                        {details.map((item, index) => (
                            <div key={index} className="space-y-1">
                                <h4 className="text-white font-heading font-bold text-lg">{item.label}</h4>
                                <p className="text-gray-400 font-body">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Only: Back to top or other button if needed, but following screenshot */}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
