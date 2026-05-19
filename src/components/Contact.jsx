import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-28 px-6 sm:px-12 lg:px-20 bg-darker relative overflow-hidden">
            {/* Elegant luxury line divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] luxury-line-h"></div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="editorial-label">
                        GET IN TOUCH
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-heading font-light text-white">
                        Start a <span className="italic text-gradient-gold">project brief</span>
                    </h2>
                    <p className="text-gray-400 text-base font-body font-light max-w-xl mx-auto">
                        Have an application, custom database, or website to build? Share your details and our team will get back to you within 24 hours.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-gold/15 bg-darker/60 backdrop-blur-sm p-8 sm:p-16 relative"
                >
                    <div className="absolute inset-4 border border-gold/5 pointer-events-none"></div>

                    <form className="space-y-10 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-1">
                                <label className="text-gold font-subheading text-[9px] tracking-[0.2em] uppercase font-light">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full py-3 bg-transparent border-b border-white/10 focus:border-gold focus:outline-none text-white font-body font-light transition-colors text-sm"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-gold font-subheading text-[9px] tracking-[0.2em] uppercase font-light">Your Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full py-3 bg-transparent border-b border-white/10 focus:border-gold focus:outline-none text-white font-body font-light transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-1 flex flex-col">
                                <label className="text-gold font-subheading text-[9px] tracking-[0.2em] uppercase font-light mb-1">Project Category</label>
                                <select className="w-full py-3 bg-darker border-b border-white/10 focus:border-gold focus:outline-none text-gray-300 font-body font-light transition-colors text-sm cursor-pointer appearance-none">
                                    <option value="web">Custom Web Engineering</option>
                                    <option value="mobile">Mobile Application Suite</option>
                                    <option value="backend">API Systems & Server Tools</option>
                                    <option value="ecommerce">Luxury E-Commerce / Checkout</option>
                                    <option value="other">Other System Solution</option>
                                </select>
                            </div>
                            <div className="space-y-1 flex flex-col">
                                <label className="text-gold font-subheading text-[9px] tracking-[0.2em] uppercase font-light mb-1">Estimated Budget</label>
                                <select className="w-full py-3 bg-darker border-b border-white/10 focus:border-gold focus:outline-none text-gray-300 font-body font-light transition-colors text-sm cursor-pointer appearance-none">
                                    <option value="tier1">Under $5,000</option>
                                    <option value="tier2">$5,000 – $10,000</option>
                                    <option value="tier3">$10,000 – $25,000</option>
                                    <option value="tier4">$25,000+</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-gold font-subheading text-[9px] tracking-[0.2em] uppercase font-light">Project Scope & Details</label>
                            <textarea
                                rows="4"
                                required
                                className="w-full py-3 bg-transparent border-b border-white/10 focus:border-gold focus:outline-none text-white font-body font-light transition-colors resize-none text-sm"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full border border-gold/40 hover:border-gold py-4 bg-transparent text-white font-subheading text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-gold hover:text-dark"
                            >
                                SUBMIT PROJECT BRIEF
                            </motion.button>
                        </div>
                    </form>

                    <div className="mt-16 flex justify-center space-x-8 relative z-10 border-t border-white/5 pt-10">
                        {[
                            { icon: Mail, href: 'mailto:eracissebeauty@gmail.com' },
                            { icon: Github, href: 'https://github.com/EricStephen12' },
                            { icon: Linkedin, href: '#' },
                            { icon: Twitter, href: '#' },
                        ].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    className="w-10 h-10 border border-gold/15 flex items-center justify-center text-gold/60 hover:text-dark hover:bg-gold hover:border-gold transition-all duration-500"
                                >
                                    <Icon size={16} strokeWidth={1.5} />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
