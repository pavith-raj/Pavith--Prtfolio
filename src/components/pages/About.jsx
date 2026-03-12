import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../ScrollRevealText';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.6
};

const About = ({ setActiveTab }) => {
    return (
        <motion.article
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-section"
        >
            <header className="mb-8 relative inline-block">
                <h2 className="text-3xl font-semibold text-white pb-3 tracking-wide">About Me</h2>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-yellow to-vegas-gold rounded-full"></div>
            </header>

            <div className="text-gray-300 font-light leading-relaxed space-y-4 mb-10">
                <ScrollRevealText text="*Currently a VR Programmer Intern*, I am passionate about immersive technologies and interactive experiences." />
                <ScrollRevealText text="My expertise includes developing *virtual reality applications*, *3D environments*, and *interactive simulations* using *Unity*, *C#*, and *VR hardware*." />
                <ScrollRevealText text="I am also skilled in *full-stack web development* (React.js, Node.js, MongoDB), *RESTful APIs*, and *Agile practices*." />
                <ScrollRevealText text="Quick to learn and adapt, I enjoy collaborating in teams and am committed to delivering innovative solutions." />

                <div className="text-center md:text-left mt-8">
                    <button
                        onClick={() => {
                            setActiveTab('projects');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-block bg-orange-yellow text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Explore my works
                    </button>
                </div>
            </div>

            {/* Internships */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-jet rounded-xl flex items-center justify-center text-orange-yellow shadow-md">
                        <ion-icon name="briefcase-outline" className="text-2xl"></ion-icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Internship</h3>
                </div>

                <ol className="border-l-2 border-jet ml-6 space-y-8">
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-orange-yellow shadow-[0_0_10px_#ffce45] -left-[9px] top-1"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">VR Programmer Intern</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">Karanji InfoTech Pvt Ltd | Aug 2025 - Present</p>
                        <p className="text-gray-400 text-sm leading-relaxed">Currently learning VR development, focusing on building immersive experiences and interactive 3D simulations using Unity and C#.</p>
                    </li>
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-jet -left-[9px] top-1 border border-gray-600"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">Full Stack Developer Intern</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">Softionik Solutions Pvt Ltd | May 2025 - July 2025</p>
                        <p className="text-gray-400 text-sm leading-relaxed">Built SportsLine, an e-commerce app for sports goods and jerseys, with full-stack features using React.js, Node.js, MongoDB, and Express.js. Integrated REST APIs for products, orders, and user auth.</p>
                    </li>
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-jet -left-[9px] top-1 border border-gray-600"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">Web Development Intern</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">St Joseph Engineering College, Mangalore | Oct 2024 - Nov 2024</p>
                        <p className="text-gray-400 text-sm leading-relaxed">Developed a web-based IA Management System to streamline academic operations. Built the Admin Module for managing faculty, student data, and subject assignments using HTML, CSS, PHP, MySQL, and Bootstrap.</p>
                    </li>
                </ol>
            </div>

            {/* Education */}
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-jet rounded-xl flex items-center justify-center text-orange-yellow shadow-md">
                        <ion-icon name="book-outline" className="text-2xl"></ion-icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>

                <ol className="border-l-2 border-jet ml-6 space-y-8">
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-orange-yellow shadow-[0_0_10px_#ffce45] -left-[9px] top-1"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">St Joseph Engineering College</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">2023 - 2025</p>
                        <p className="text-gray-400 text-sm leading-relaxed">Master of Computer Application</p>
                    </li>
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-jet -left-[9px] top-1 border border-gray-600"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">Sri Ramakrishna College</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">2020 - 2023</p>
                        <p className="text-gray-400 text-sm leading-relaxed">Bachelor of Computer Application</p>
                    </li>
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-jet -left-[9px] top-1 border border-gray-600"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">Chemnad Jama-ath Higher Secondary School</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">July 2018 - March 2020</p>
                        <p className="text-gray-400 text-sm leading-relaxed">Pre-University Education</p>
                    </li>
                    <li className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full bg-jet -left-[9px] top-1 border border-gray-600"></div>
                        <h4 className="text-white font-medium text-lg leading-snug">B.E.M.H.S Kasaragod</h4>
                        <p className="text-orange-yellow text-sm mb-2 font-medium">March 2018</p>
                        <p className="text-gray-400 text-sm leading-relaxed">High School Education</p>
                    </li>
                </ol>
            </div>
        </motion.article>
    );
};

export default About;
