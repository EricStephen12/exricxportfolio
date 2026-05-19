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
        { name: 'TEAM', href: '#team' },
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
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 lg:px-20 ${isScrolled
                ? 'py-4 bg-darker/90 backdrop-blur-md border-b border-gold/10'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Luxury Brand Logo */}
                <motion.a
                    href="#home"
                    className="flex items-center gap-3 group"
                    onClick={(e) => scrollToSection(e, '#home')}
                >
                    <span className="text-2xl font-heading tracking-[0.25em] text-white group-hover:text-gold transition-colors font-medium">
                        E X R I C X<span className="text-gold">.</span>
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-12">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-[10px] text-gray-400 hover:text-white transition-colors duration-300 font-subheading tracking-[0.25em] relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-2/3"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Minimalist Editorial Button (Perfume Box label style) */}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="border border-gold/40 hover:border-gold px-6 py-2.5 bg-transparent text-white font-subheading text-[10px] tracking-[0.25em] transition-all duration-300 hover:bg-gold hover:text-dark"
                        onClick={(e) => scrollToSection(e, '#contact')}
                    >
                        HIRE THE STUDIO
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white hover:text-gold transition-colors p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? '100vh' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden fixed inset-0 top-0 left-0 w-full bg-darker/98 h-screen z-40 overflow-hidden"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-xl text-white hover:text-gold transition-colors font-heading tracking-[0.2em] uppercase font-light"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="border border-gold/50 px-8 py-3 bg-transparent text-gold font-subheading text-xs tracking-[0.2em] mt-8 hover:bg-gold hover:text-dark transition-all"
                        onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            scrollToSection(e, '#contact');
                        }}
                    >
                        HIRE THE STUDIO
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
