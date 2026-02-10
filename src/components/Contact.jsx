import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-darker">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-body max-w-2xl mx-auto">
                        Have a project, idea, or product you want to build? Let’s talk.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-dark rounded-xl p-8 sm:p-12"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-darker rounded-lg border border-gray-700 focus:border-primary focus:outline-none text-white font-body transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-darker rounded-lg border border-gray-700 focus:border-primary focus:outline-none text-white font-body transition-colors"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 bg-darker rounded-lg border border-gray-700 focus:border-primary focus:outline-none text-white font-body transition-colors"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 bg-darker rounded-lg border border-gray-700 focus:border-primary focus:outline-none text-white font-body transition-colors resize-none"
                        ></textarea>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-8 py-4 bg-primary text-white font-heading font-semibold rounded-lg hover:glow-primary-lg transition-all duration-300"
                        >
                            Send Message
                        </motion.button>
                    </form>

                    <div className="mt-12 flex justify-center space-x-6">
                        {[
                            { icon: Mail, href: 'mailto:eric@exricx.tech' },
                            { icon: Github, href: 'https://github.com/exricx' },
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
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-12 h-12 rounded-full bg-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon size={20} />
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
