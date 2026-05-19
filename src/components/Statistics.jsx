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
        { label: 'CLIENT APPLICATIONS SHIPPED', value: 15 },
        { label: 'YEARS COMBINED EXPERIENCE', value: 6 },
        { label: 'INTEGRATED CLOUD SERVICE APIS', value: 30 },
    ];

    return (
        <section className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            {/* Subtle premium dot grid background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #c5a880 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center space-y-20">
                <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="editorial-label">
                        THE NUMBERS
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white">
                        Proven Delivery <br />
                        <span className="italic text-gradient-gold">For Real Clients</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col items-center justify-center p-8 ${
                                index !== 2 ? 'md:border-r md:border-gold/10' : ''
                            }`}
                        >
                            <h3 className="text-5xl sm:text-7xl font-heading font-light text-gold mb-4 tracking-tighter">
                                <CountUp end={stat.value} />+
                            </h3>
                            <p className="text-gray-400 font-subheading text-[10px] tracking-[0.25em] font-light max-w-[200px] text-center">
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
