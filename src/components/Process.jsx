import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            id: '01',
            title: 'Understand Requirements & Goals',
            image: '/process1.jpg',
        },
        {
            id: '02',
            title: 'Design & Build the Solution',
            image: '/process2.jpg',
        },
        {
            id: '03',
            title: 'Test, Deploy & Improve',
            image: '/process3.jpg',
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-8 lg:px-16 bg-dark">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-20">
                    <span className="inline-block px-6 py-2 bg-primary/10 text-primary text-sm font-heading font-bold rounded-full mb-6 border border-primary/20">
                        How I Work
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white leading-tight">
                        Turning Ideas into <br />
                        <span className="relative inline-block mt-2">
                            Functional Digital Products
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></div>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
                    {/* Dotted Connecting Lines (Desktop Only) */}
                    <div className="absolute top-1/3 left-[16%] right-[16%] hidden md:block h-16 pointer-events-none z-0">
                        {/* SVG Arches mimicking screenshots */}
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <path d="M 0,20 Q 150,-40 300,20" vectorEffect="non-scaling-stroke" fill="none" stroke="#4b5563" strokeWidth="2" strokeDasharray="8 8" className="opacity-50" />
                            <path d="M 500,20 Q 650,-40 800,20" vectorEffect="non-scaling-stroke" fill="none" stroke="#4b5563" strokeWidth="2" strokeDasharray="8 8" className="opacity-50 ml-auto" style={{ transform: 'translateX(50%)' }} />
                        </svg>
                        {/* Arrows */}
                        <div className="absolute top-0 left-[30%] text-gray-600 rotate-12 text-2xl">➔</div>
                        <div className="absolute top-0 right-[30%] text-gray-600 rotate-12 text-2xl">➔</div>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center group"
                        >
                            <div className="relative mb-8">
                                <span className="absolute -top-6 -left-6 z-20 text-4xl sm:text-5xl font-heading font-bold text-white">
                                    {step.id}
                                </span>
                                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[6px] border-darker overflow-hidden shadow-2xl relative bg-gray-800 group-hover:scale-105 transition-transform duration-500">
                                    {/* Placeholder for images, creating a nice gradient fallback */}
                                    <div className={`w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center`}>
                                        <span className="text-gray-500 text-sm">Image {step.id}</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-4 bg-darker/50 px-6 py-3 rounded-full border border-gray-800">
                                {step.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
