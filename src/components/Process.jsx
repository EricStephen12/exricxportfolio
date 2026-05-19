import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            id: '01',
            title: 'The Concept',
            subtitle: 'We begin with a conversation. We discuss your vision, map out the layouts, and establish the technical direction.',
        },
        {
            id: '02',
            title: 'The Craft',
            subtitle: 'We bring the concept to life. We write clean code, design fluid interfaces, and build the custom backend databases.',
        },
        {
            id: '03',
            title: 'The Delivery',
            subtitle: 'We test every detail and interaction to ensure a flawless release, then launch it to the world.',
        }
    ];

    return (
        <section className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-20 space-y-4">
                    <span className="editorial-label">
                        OUR METHOD
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white leading-tight">
                        How We Bring <br />
                        <span className="italic font-light text-gradient-gold">Visions to Life.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 relative">
                    {/* Dotted Connecting Lines */}
                    <div className="absolute top-[20%] left-[16%] right-[16%] hidden md:block h-16 pointer-events-none z-0">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <path d="M 0,20 Q 150,-40 300,20" vectorEffect="non-scaling-stroke" fill="none" stroke="#c5a880" strokeWidth="1" strokeDasharray="6 6" className="opacity-30" />
                            <path d="M 500,20 Q 650,-40 800,20" vectorEffect="non-scaling-stroke" fill="none" stroke="#c5a880" strokeWidth="1" strokeDasharray="6 6" className="opacity-30 ml-auto" style={{ transform: 'translateX(50%)' }} />
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 flex flex-col items-center group space-y-6"
                        >
                            <div className="relative">
                                <span className="absolute -top-6 -left-6 z-20 text-3xl font-heading font-light text-gold">
                                    {step.id}
                                </span>
                                <div className="w-40 h-40 rounded-full border border-gold/20 flex items-center justify-center p-2 bg-darker shadow-2xl relative group-hover:scale-105 transition-transform duration-700">
                                    <div className="w-full h-full rounded-full border border-gold/10 flex items-center justify-center bg-dark text-gold font-heading font-light text-lg">
                                        PHASE {step.id}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl sm:text-2xl font-heading font-light text-white group-hover:text-gold transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-body font-light leading-relaxed max-w-xs mx-auto">
                                    {step.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
