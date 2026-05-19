const Footer = () => {
    return (
        <footer className="bg-darker py-12 px-6 sm:px-12 lg:px-20 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-gray-500 font-subheading text-[10px] tracking-[0.25em] font-light">
                    &copy; {new Date().getFullYear()} EXRICX AGENCY. ALL RIGHTS RESERVED.
                </p>
                <p className="text-gold/40 font-subheading text-[9px] tracking-[0.2em] font-light">
                    POUR LA PERFECTION INFORMATIQUE
                </p>
            </div>
        </footer>
    );
};

export default Footer;
