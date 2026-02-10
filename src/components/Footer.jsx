const Footer = () => {
    return (
        <footer className="bg-dark py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Exricx — Eric “Exricx” Stephen. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
