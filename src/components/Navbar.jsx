import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT', href: '#about' },
        { name: 'SERVICES', href: '#services' },
        { name: 'PORTFOLIO', href: '#portfolio' },
        { name: 'CONTACT', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 lg:px-16 ${isScrolled
                ? 'py-4 bg-dark/95 backdrop-blur-md shadow-lg border-b border-white/5'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => scrollToSection(e, '#home')}
                >
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xl uppercase italic">Ex</div>
                    <span className="text-xl font-heading font-bold text-white tracking-widest">EXRICX<span className="text-primary">.</span></span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-10">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-[13px] text-gray-400 hover:text-white transition-colors duration-300 font-heading font-semibold tracking-widest relative group"
                            >
                                {link.name}
                                {link.name === 'HOME' && !isScrolled && (
                                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
                                )}
                                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 px-6 py-3 bg-primary text-white font-heading font-bold text-xs tracking-[0.2em] rounded-full hover:glow-primary"
                    >
                        HIRE ME
                        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-primary">
                            <ArrowRight size={14} />
                        </span>
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? '100vh' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="lg:hidden fixed inset-0 top-0 left-0 w-full bg-darker/98 h-screen z-40 overflow-hidden"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-2xl text-white hover:text-primary transition-colors duration-300 font-heading tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-heading font-bold rounded-full mt-8"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        HIRE ME
                        <ArrowRight size={18} />
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
