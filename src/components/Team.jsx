import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Eric Stephen',
            role: 'Founder & Principal Engineer',
            bio: '3+ years architecting bespoke, high-performance web systems and cross-platform mobile suites. Expert in Node.js, Next.js, and DB design.',
            image: '/profile2.png',
            initials: 'ES',
            socials: {
                github: 'https://github.com/EricStephen12',
                linkedin: '#',
                twitter: '#',
                email: 'mailto:eracissebeauty@gmail.com'
            }
        },
        {
            name: 'George',
            role: 'Lead UI/UX & Frontend Designer',
            bio: 'Specialist in modern editorial layout, branding typography, luxury design systems, and crafting responsive React interfaces.',
            image: '/team-george.jpg',
            initials: 'G',
            socials: {
                github: '#',
                linkedin: '#',
                twitter: '#',
                email: 'mailto:george@exricx.com'
            }
        },
        {
            name: 'Emmanuel',
            role: 'Senior Full-Stack & Mobile Developer',
            bio: 'Expert in cross-platform mobile architectures (React Native/Expo) and robust, scalable backend server environments.',
            image: '/team-emmanuel.jpg',
            initials: 'E',
            socials: {
                github: '#',
                linkedin: '#',
                twitter: '#',
                email: 'mailto:emmanuel@exricx.com'
            }
        }
    ];

    return (
        <section id="team" className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="editorial-label">
                        OUR AGENCY TEAM
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white">
                        Meet Our <span className="italic text-gradient-gold">Designers & Engineers</span>
                    </h2>
                    <p className="text-gray-400 font-body max-w-xl mx-auto text-base font-light">
                        A collaborative group of creative minds and technical experts dedicated to building superior websites and apps for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="editorial-card rounded-none p-2 flex flex-col h-full group"
                        >
                            {/* Member Image with Grayscale and Hover Effect */}
                            <div className="h-80 overflow-hidden relative bg-darker border border-gold/15 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-90"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div 
                                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold-dark/20 to-darker text-gold-light font-heading font-light text-7xl"
                                >
                                    {member.initials}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Member Info */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-heading font-light text-white group-hover:text-gold transition-colors">
                                        {member.name}
                                    </h3>
                                    <h4 className="text-gold font-subheading text-[9px] tracking-[0.25em] uppercase font-light">
                                        {member.role}
                                    </h4>
                                    <p className="text-gray-400 text-sm font-body font-light leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                                    <a
                                        href={member.socials.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gold transition-colors"
                                    >
                                        <Github size={16} />
                                    </a>
                                    <a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gold transition-colors"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                    <a
                                        href={member.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gold transition-colors"
                                    >
                                        <Twitter size={16} />
                                    </a>
                                    <a
                                        href={member.socials.email}
                                        className="text-gray-500 hover:text-gold transition-colors ml-auto"
                                    >
                                        <Mail size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
