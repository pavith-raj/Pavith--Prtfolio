import React, { useEffect, useRef, useCallback } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ];

    // Use ref to avoid re-creating the scroll handler when activeTab changes
    const activeTabRef = useRef(activeTab);
    activeTabRef.current = activeTab;

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = navItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItems[i].id);
            if (section && section.offsetTop <= scrollPosition) {
                if (activeTabRef.current !== navItems[i].id) {
                    setActiveTab(navItems[i].id);
                }
                break;
            }
        }
    }, [setActiveTab]);

    useEffect(() => {
        // Throttled scroll handler using requestAnimationFrame
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

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
