import React, { useEffect } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    if (activeTab !== navItems[i].id) {
                        setActiveTab(navItems[i].id);
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab, setActiveTab]);

    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 lg:sticky lg:top-8 lg:w-max mx-auto lg:mb-10 bg-eerie-black/95 lg:bg-eerie-black/90 backdrop-blur-md border border-jet rounded-t-2xl lg:rounded-full overflow-x-auto hide-scroll shadow-lg transition-all duration-300">
            <ul className="flex justify-start lg:justify-center items-center gap-6 px-6 lg:px-10 py-4 lg:py-5 text-sm font-medium w-max mx-auto">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => {
                                const section = document.getElementById(item.id);
                                if (section) {
                                    section.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className={`nav-btn transition-colors hover:text-orange-yellow ${activeTab === item.id ? 'text-orange-yellow' : 'text-gray-400'
                                }`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
