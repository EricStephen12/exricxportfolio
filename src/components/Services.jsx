import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Palette, Code, Layout, Globe, Monitor } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: '01',
            title: 'Full-Stack Web Development',
            description: 'End-to-end web apps with React, Next.js, TypeScript, Node.js, and PostgreSQL — from architecture to Vercel deployment.',
            icon: Monitor,
            action: 'Learn More'
        },
        {
            id: '02',
            title: 'Mobile App Development',
            description: 'Cross-platform Android & iOS apps with React Native and Expo. EAS Build for production distribution.',
            icon: Smartphone,
            action: 'View Details'
        },
        {
            id: '03',
            title: 'Backend & API Development',
            description: 'Secure REST APIs with Node.js, Express, JWT auth, RBAC, input validation, PostgreSQL, MongoDB, and Prisma ORM.',
            icon: Code,
            action: 'Explore'
        },
        {
            id: '04',
            title: 'Database Design',
            description: 'Schema design and modelling with PostgreSQL, MySQL, MongoDB, Supabase, Prisma, and Sequelize.',
            icon: Layout,
            action: 'See Work'
        },
        {
            id: '05',
            title: 'Payment Integration',
            description: 'Paystack and Flutterwave payment gateway integration for e-commerce and subscription platforms.',
            icon: Globe,
            action: 'Build Now'
        },
        {
            id: '06',
            title: 'Firebase & Cloud Services',
            description: 'Firebase Realtime Database, Firestore, FCM push notifications, Firebase Auth, and full deployment pipeline.',
            icon: Palette,
            action: 'Get Started'
        }
    ];

    return (
        <section id="services" className="py-24 px-4 sm:px-8 lg:px-16 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block px-6 py-2 bg-primary/10 text-primary text-sm font-heading font-bold rounded-full mb-6 border border-primary/20">
                        Services
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white relative inline-block">
                        My Services
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-darker rounded-[30px] p-6 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-primary/20 transition-all duration-300 relative group border border-gray-800 hover:border-primary/50 h-full"
                        >
                            {/* Number */}
                            <div className="text-center mb-6">
                                <span className="text-5xl font-heading font-bold text-gray-800 group-hover:text-primary/20 transition-colors duration-300">
                                    {service.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-heading font-bold text-white text-center mb-6 px-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm sm:text-base font-body leading-relaxed mb-auto pb-8">
                                {service.description}
                            </p>

                            {/* Action Link & Icon Circle */}
                            <div className="mt-auto flex flex-col items-center gap-6 w-full">
                                <a href="#" className="inline-flex items-center gap-2 text-white font-heading font-bold text-sm tracking-widest hover:text-primary transition-colors">
                                    {service.action}
                                    <ArrowRight size={16} />
                                </a>

                                <div className="w-16 h-16 rounded-full border-4 border-dark flex items-center justify-center text-white bg-primary group-hover:scale-110 transition-transform duration-300 shadow-lg glow-primary relative z-10">
                                    <service.icon size={24} strokeWidth={2.5} />
                                </div>
                                {/* Connecting line effect */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-t from-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
