import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PortfolioGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'Smart Best Brand',
            category: 'E-Commerce Platform',
            description: 'A modern e-commerce storefront focusing on premium branding and seamless user flow.',
            image: '/project1.jpg',
            link: 'https://smart-best-brand.vercel.app/'
        },
        {
            id: 2,
            title: 'ConvertFlow',
            category: 'Web Application',
            description: 'Custom conversion-focused web platform built for high-performance marketing.',
            image: '/project2.jpg',
            link: 'https://convertflowcom.vercel.app/'
        },
        {
            id: 3,
            title: 'Studio Metavuz',
            category: 'Creative Agency',
            description: 'Bold and interactive portfolio for a design studio, featuring smooth animations.',
            image: '/project3.jpg',
            link: 'https://www.studiometavuz.com/'
        },
        {
            id: 4,
            title: 'Onyibest Properties',
            category: 'Real Estate Platform',
            description: 'Scalable properties listing and management platform for real estate businesses.',
            image: '/project4.jpg',
            link: 'https://www.onyibestproperties.com.ng/'
        },
        {
            id: 5,
            title: 'Yutaka Farms',
            category: 'Agricultural Business',
            description: 'Digital presence for an agricultural hub, connecting farming with modern tech.',
            image: '/project5.jpg',
            link: 'https://yutakafarmsandco.com.ng/'
        },
        {
            id: 6,
            title: 'Interior Black',
            category: 'Design Showcase',
            description: 'Sleek and minimal design portfolio focusing on interior aesthetics and UX.',
            image: '/project6.jpg',
            link: 'https://interior-black.vercel.app/'
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
