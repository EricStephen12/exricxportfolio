import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PortfolioGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'SmartBestBrands',
            category: 'Next.js · Tailwind CSS · Stripe checkout',
            description: 'A high-end luxury e-commerce storefront focusing on premium branding and seamless user checkout workflows.',
            link: 'https://smart-best-brand.vercel.app/'
        },
        {
            id: 2,
            title: 'Eixora',
            category: 'React.js · Cloud Architecture · SaaS CRM',
            description: 'An advanced client relations dashboard engineered for tracking real-time operations, cloud metrics, user stats, and system workflows.',
            link: 'https://client-murex-one-36.vercel.app/'
        },
        {
            id: 3,
            title: 'Bespoke Rentals Portal',
            category: 'Next.js · Mapbox API · Serverless Web',
            description: 'A custom hospitality rental booking interface with full interactive map integrations, calendar booking reservation slots, and luxury filters.',
            link: 'https://airbandb-three.vercel.app/'
        },
        {
            id: 4,
            title: 'Glow Cosmetics Boutique',
            category: 'Next.js · Cart Ecosystem · Paystack',
            description: 'A premier beauty, wellness, and luxury cosmetics retail store showcasing catalog collections, checkouts, and customer profiles.',
            link: 'https://glow-blue-ten.vercel.app/'
        },
        {
            id: 5,
            title: 'Kiddies Arcade',
            category: 'HTML5 Canvas · Tailwind CSS · Game Loop',
            description: 'An interactive games and play portal for kids, designed with custom interactive canvas overlays, scoring loops, and sound engines.',
            link: 'https://kiddies-arcade-uwxc.vercel.app/'
        },
        {
            id: 6,
            title: 'Sharers Gym Network',
            category: 'Next.js · Member Booking · Stripe billing',
            description: 'A fitness booking network, integrating payment gateways, membership packages, and schedule bookings for fitness trainers and clients.',
            link: 'https://sharersgym.com/'
        },
        {
            id: 7,
            title: 'Oyibest Properties',
            category: 'Next.js · Real Estate Listing',
            description: 'A premium real estate listing board delivering ultra-crisp responsive property cards, filtering matrices, and instant agent calls.',
            link: 'https://www.onyibestproperties.com.ng/'
        },
        {
            id: 8,
            title: 'Studio Metavuz',
            category: 'Next.js · Creative Agency Portal',
            description: 'A gorgeous, visually striking creative agency portfolio with fluid layout systems, custom scroll behaviors, and responsive layouts.',
            link: 'https://www.studiometavuz.com/'
        },
        {
            id: 9,
            title: 'FussionFlux Gateway',
            category: 'TypeScript · Developer Tooling',
            description: 'An advanced developer tools suite featuring API gateway routing, caching engines, and detailed performance telemetry dashboards.',
            link: 'https://convertflowcom.vercel.app/'
        },
        {
            id: 10,
            title: 'Yutaka Farm',
            category: 'Next.js · Logistics & Supply Chain',
            description: 'An agricultural wholesaling hub showcasing farm crops, supply chain logistics, and secure inquiry mailers powered by secure OAuth2 services.',
            link: 'https://yutaka-farm.vercel.app/'
        },
        {
            id: 11,
            title: 'TaskClarify Ecosystem',
            category: 'React Native · Node.js API · Supabase',
            description: 'A complete enterprise task management ecosystem featuring dual iOS/Android apps, robust JWT/RBAC auth, and real-time synchronization.',
            link: 'https://taskclarify-backend.vercel.app/'
        }
    ];

    return (
        <section id="portfolio" className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 space-y-4"
                >
                    <span className="editorial-label">
                        L'ATELIER DES PROJETS
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white">
                        Our Featured <span className="italic text-gradient-gold">Client Works</span>
                    </h2>
                    <p className="text-gray-400 text-base font-body font-light max-w-xl mx-auto">
                        Each card renders a live dynamic thumbnail of the actual running project website. Click to visit the platform.
                    </p>
                </motion.div>

                {/* Asymmetric / clean alignment grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-card rounded-none p-3 group relative cursor-pointer flex flex-col h-full"
        >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full justify-between">
                {/* Dynamic Live Scaled Iframe Thumbnail (perfume box proportion: aspect-[3/4]) */}
                <div className="w-full aspect-[3/4] bg-dark relative overflow-hidden border border-gold/15">
                    {/* Golden wash filter container */}
                    <div className="absolute inset-0 origin-top-left w-[400%] h-[400%] scale-[0.25] pointer-events-none select-none z-0">
                        <iframe
                            src={project.link}
                            title={`${project.title} live thumbnail`}
                            className="w-full h-full border-none pointer-events-none select-none grayscale contrast-125"
                            scrolling="no"
                            loading="lazy"
                        />
                    </div>

                    {/* Translucent premium golden layer on top of frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent mix-blend-color-burn z-10 pointer-events-none"></div>

                    {/* Thin border frame label inside card */}
                    <div className="absolute inset-4 border border-gold/10 group-hover:border-gold/30 transition-all duration-500 z-10 pointer-events-none"></div>

                    {/* Interactive hover details */}
                    <div className="absolute inset-0 bg-darker/95 border border-gold/45 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-6">
                        <div className="absolute inset-4 border border-gold/10"></div>
                        <ExternalLink size={24} className="text-gold mb-3" />
                        <span className="text-white font-subheading text-[10px] tracking-[0.3em] uppercase">VISIT LIVE PLATFORM</span>
                    </div>
                </div>

                {/* Typography info */}
                <div className="pt-6 pb-2 px-2 flex-1 flex flex-col justify-between">
                    <div>
                        <span className="text-gold font-subheading text-[9px] tracking-[0.2em] uppercase font-light">
                            {project.category}
                        </span>
                        <h3 className="text-2xl font-heading font-light mt-2 mb-3 text-white group-hover:text-gold transition-colors font-medium">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 font-body text-xs font-light leading-relaxed font-light">
                            {project.description}
                        </p>
                    </div>

                    {/* Decorative bottom line */}
                    <div className="h-[1px] w-12 bg-gold/20 group-hover:w-20 transition-all duration-500 mt-6"></div>
                </div>
            </a>
        </motion.div>
    );
};

export default PortfolioGrid;
