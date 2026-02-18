import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PortfolioGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'TaskClarify',
            category: 'Full-Stack · Backend + Mobile',
            description: 'Task management system with React Native mobile app (Android & iOS) and Node.js/Next.js backend. JWT auth, RBAC, Supabase (PostgreSQL).',
            image: '/project1.jpg',
            link: 'https://taskclarify-backend.vercel.app/'
        },
        {
            id: 2,
            title: 'FurniLux (Smart Best Brand)',
            category: 'E-Commerce · Paid Client',
            description: 'Luxury furniture e-commerce platform. Next.js, TypeScript, Supabase, Prisma ORM — product catalogue, cart, wishlist, and Vercel deployment.',
            image: '/project2.jpg',
            link: 'https://smart-best-brand.vercel.app/'
        },
        {
            id: 3,
            title: 'Yutaka Farm',
            category: 'Business Website · Paid Client',
            description: 'Professional farm business website with contact and wholesale inquiry forms. Node.js email API with Gmail App Password auth.',
            image: '/project3.jpg',
            link: 'https://yutaka-farm.vercel.app/'
        },
        {
            id: 4,
            title: 'Oyibest Properties',
            category: 'Real Estate · Paid Client',
            description: 'Real estate listing and showcase website with responsive property pages, filtering, and client inquiry functionality.',
            image: '/project4.jpg',
            link: 'https://www.onyibestproperties.com.ng/'
        },
        {
            id: 5,
            title: 'Studio Metavuz',
            category: 'Creative Agency · Paid Client',
            description: 'Full creative studio website — requirements, development, and deployment delivered for a paying client.',
            image: '/project5.jpg',
            link: 'https://www.studiometavuz.com/'
        },
        {
            id: 6,
            title: 'FussionFlux',
            category: 'Full-Stack · TypeScript',
            description: 'Full-stack TypeScript web application — personal project showcasing modern full-stack architecture.',
            image: '/project6.jpg',
            link: 'https://convertflowcom.vercel.app/'
        },
    ];

    return (
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                        My <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-body max-w-2xl mx-auto">
                        A collection of projects showcasing my passion for creating beautiful and functional digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-darker rounded-xl overflow-hidden cursor-pointer"
        >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 relative overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-heading text-primary/30">
                        {project.id}
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                        className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-white font-heading font-semibold text-lg">View Project</span>
                    </motion.div>
                </div>
            </a>

            <div className="p-6">
                <span className="text-primary text-sm font-body uppercase tracking-wider">
                    {project.category}
                </span>
                <h3 className="text-xl font-heading font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 font-body text-sm">
                    {project.description}
                </p>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-primary pointer-events-none" />
        </motion.div>
    );
};

export default PortfolioGrid;
