import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full lg:absolute lg:top-0 lg:left-auto lg:right-0 lg:w-auto lg:bottom-auto bg-[#282829] border border-jet lg:border-t-0 lg:border-r-0 rounded-t-2xl lg:rounded-bl-3xl lg:rounded-tr-3xl lg:rounded-tl-none lg:rounded-br-none z-20 overflow-x-auto hide-scroll">
            <ul className="flex justify-start lg:justify-center items-center gap-6 px-8 py-5 text-sm font-medium w-max mx-auto">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => {
                                setActiveTab(item.id);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
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
