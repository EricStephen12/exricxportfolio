import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, ShieldCheck, Code, Server, Database, Landmark } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: '01',
            title: 'Digital Flagships',
            description: 'Bespoke web applications designed and built from scratch. Fast, responsive, and tailored to capture attention.',
            icon: Code,
            action: 'DISCOVER MORE'
        },
        {
            id: '02',
            title: 'Mobile Suites',
            description: 'Fluid mobile applications engineered with React Native. Native performance designed with editorial precision.',
            icon: Smartphone,
            action: 'EXPLORE APPS'
        },
        {
            id: '03',
            title: 'Robust Infrastructures',
            description: 'Quiet, stable backend architectures and secure API networks built to manage your data safely.',
            icon: Server,
            action: 'UNDERSTAND ARCHITECTURE'
        },
        {
            id: '04',
            title: 'Data Schemas',
            description: 'Clean database schemas and query logic built to scale efficiently as your audience grows.',
            icon: Database,
            action: 'VIEW DATA SOLUTIONS'
        },
        {
            id: '05',
            title: 'Custom Commerce',
            description: 'Smooth, secure checkout flows integrated with global payment networks like Stripe and Paystack.',
            icon: Landmark,
            action: 'LEARN MORE'
        },
        {
            id: '06',
            title: 'Cloud Orchestration',
            description: 'Zero-downtime server setups and continuous deployment pipelines powered by Vercel and AWS.',
            icon: ShieldCheck,
            action: 'VIEW INFRASTRUCTURE'
        }
    ];

    return (
        <section id="services" className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <span className="editorial-label">
                        WHAT WE DO
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white">
                        Our Core <span className="italic text-gradient-gold">Capabilities</span>
                    </h2>
                    <p className="text-gray-400 font-body max-w-xl mx-auto text-base font-light">
                        We build stable websites and apps that help brands stand out and run smoothly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="editorial-card rounded-none p-8 flex flex-col justify-between h-full group"
                        >
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-4xl font-heading font-light text-gold/30 group-hover:text-gold transition-colors duration-500">
                                        {service.id}
                                    </span>
                                    <div className="text-gold/60 group-hover:text-gold transition-colors duration-300">
                                        <service.icon size={20} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-heading font-light text-white leading-snug">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm font-body font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="pt-8 mt-auto flex items-center justify-between border-t border-white/5">
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center gap-3 text-white font-subheading text-[9px] tracking-[0.25em] hover:text-gold transition-colors"
                                >
                                    {service.action}
                                    <ArrowRight size={12} className="text-gold" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
