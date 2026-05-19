import { motion } from 'framer-motion';

const About = () => {
    const details = [
        { label: 'Agency Name :', value: 'Exricx Agency' },
        { label: 'Engineering Level :', value: 'Senior & Mid-Level Experts' },
        { label: 'Services :', value: 'Custom Web Apps, Native Mobile Suites, API Architecture' },
        { label: 'Main Technologies :', value: 'Node.js · React · Next.js · React Native · PostgreSQL · Prisma' },
        { label: 'Base Location :', value: 'Abuja, Nigeria (Working Worldwide)' },
        { label: 'Contact Email :', value: 'eracissebeauty@gmail.com' },
    ];

    return (
        <section id="about" className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

                {/* Left Column: Image with stylized editorial gold frame */}
                <motion.div
                    className="flex-1 relative w-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative z-10 border border-gold/25 p-2 bg-darker/60 backdrop-blur-sm max-w-[450px] mx-auto lg:ml-0 h-[400px] sm:h-[580px]">
                        <div className="absolute inset-4 border border-gold/10"></div>
                        <div className="w-full h-full overflow-hidden bg-dark relative z-10">
                            <img
                                src="/profile2.png"
                                alt="Eric Stephen"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-95"
                            />
                            <div className="absolute inset-0 bg-gold/5 mix-blend-color-burn pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Gold Label */}
                    <div className="absolute -right-2 sm:-right-6 bottom-10 z-20 hidden sm:block">
                        <motion.div
                            className="border border-gold/30 bg-darker/95 backdrop-blur-md px-6 py-4 shadow-2xl text-center"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span className="block text-[8px] font-subheading tracking-[0.3em] uppercase text-gold font-light">OUR QUALITY PROMISE</span>
                            <span className="block text-lg font-heading text-white mt-1 italic font-light">100% Client Satisfaction</span>
                        </motion.div>
                    </div>

                    <div className="absolute -left-10 -bottom-10 w-44 h-44 bg-gold/5 rounded-full blur-3xl z-0"></div>
                </motion.div>

                {/* Right Column: Editorial Text & Catalog details */}
                <motion.div
                    className="flex-1 space-y-10"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="space-y-6">
                        <span className="editorial-label">
                            OUR IDENTITY
                        </span>
                        
                        <h2 className="text-4xl sm:text-5xl font-heading font-light text-white leading-tight">
                            Simple ideas, <br />
                            <span className="italic font-light text-gradient-gold">refined execution.</span>
                        </h2>
                        
                        <p className="text-gray-400 text-base sm:text-lg font-body font-light leading-relaxed">
                            Exricx Agency was born out of a simple belief: code should be as elegant as the brand it represents. We do not build websites; we design digital flagships. Our work is quiet, precise, and built to last.
                        </p>
                    </div>

                    {/* Catalog Details Table */}
                    <div className="border-t border-gold/20 pt-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                            {details.map((item, index) => (
                                <div key={index} className="space-y-1.5 border-b border-white/5 pb-4">
                                    <h4 className="text-gold font-subheading uppercase text-[9px] tracking-[0.2em] font-light">
                                        {item.label}
                                    </h4>
                                    <p className="text-gray-200 font-body text-sm font-light leading-relaxed">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
