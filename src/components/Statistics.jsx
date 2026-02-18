import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Statistics = () => {
    const stats = [
        { label: 'Paid Client Projects', value: 6 },
        { label: 'Years of Experience', value: 3 },
        { label: 'Technologies Mastered', value: 20 },
    ];

    return (
        <section className="py-24 px-4 sm:px-8 lg:px-16 bg-primary relative overflow-hidden">
            {/* World Map Background (Simulated with dots) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.h2
                    className="text-4xl sm:text-5xl font-heading font-bold text-white mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Built Through <br />
                    <span className="relative inline-block mt-2">
                        Real Projects
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-2 sm:mb-4">
                                <CountUp end={stat.value} />
                            </h3>
                            <p className="text-white/80 font-body text-lg uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
