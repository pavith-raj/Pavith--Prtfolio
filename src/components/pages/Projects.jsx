import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const allProjects = [
        {
            id: 1,
            category: 'unity',
            title: 'TekkenClone Unity 3D',
            subtitle: 'Unity Developments',
            type: 'video',
            src: '/assets/Videos/TekkenClone Recordings.mp4',
            poster: '/assets/images/Tekken.png',
            link: 'https://drive.google.com/file/d/1kWpzbFt8iHlqjE0qNTbIVQzaBjvhuyzE/view?usp=sharing'
        },
        {
            id: 2,
            category: 'unity',
            title: 'VR Bowling Game',
            subtitle: 'Unity Developments',
            type: 'video',
            src: '/assets/Videos/VR Bowling Game 2.mp4',
            poster: '/assets/images/VrBowling.png',
            link: 'https://drive.google.com/file/d/18axS1hIdEc8lvtd-_Q1oQE4C98X5Vs8r/view?usp=sharing'
        },
        {
            id: 3,
            category: 'unity',
            title: '2D Mono Game',
            subtitle: 'Unity Developments',
            type: 'video',
            src: '/assets/Videos/2D Jumping Game.mp4',
            poster: '/assets/images/2dgame.png',
            link: 'https://drive.google.com/file/d/1_qopDSredpyiSMkqcaqs6JRemOaOMgGP/view?usp=sharing'
        },
        {
            id: 4,
            category: 'mobile',
            title: 'AuraX - Beauty Services',
            subtitle: 'Mobile Applications',
            type: 'image',
            src: '/assets/images/Aurax1.png',
            link: 'https://github.com/pavith-raj/AuraX.git'
        },
        {
            id: 5,
            category: 'web',
            title: 'Spare Parts Depot',
            subtitle: 'Web Applications',
            type: 'image',
            src: '/assets/images/spare.png',
            link: 'https://github.com/pavith-raj/SpareParts.git'
        },
        {
            id: 6,
            category: 'mobile',
            title: 'ReviewBite | Food Review App',
            subtitle: 'Mobile Applications',
            type: 'image',
            src: '/assets/images/reviewbite.jpg',
            link: 'https://github.com/pavith-raj/Review-Bite.git'
        }
    ];

    const filteredProjects = filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter);

    return (
        <motion.article
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.6 }}
            className="w-full"
        >
            <header className="mb-8 relative inline-block">
                <h2 className="text-3xl font-semibold text-white pb-3 tracking-wide">Projects</h2>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-yellow to-vegas-gold rounded-full"></div>
            </header>

            <ul className="flex flex-wrap gap-6 mb-8 text-sm md:text-base font-medium">
                {[
                    { id: 'all', label: 'All' },
                    { id: 'unity', label: 'Unity Developments' },
                    { id: 'web', label: 'Web Applications' },
                    { id: 'mobile', label: 'Mobile Applications' }
                ].map((f) => (
                    <li key={f.id}>
                        <button
                            onClick={() => setFilter(f.id)}
                            className={`transition-colors ${filter === f.id ? 'text-orange-yellow' : 'text-gray-400 hover:text-orange-yellow'}`}
                        >
                            {f.label}
                        </button>
                    </li>
                ))}
            </ul>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group cursor-pointer"
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-4 bg-jet border border-white/5 group-hover:border-orange-yellow/50 shadow-lg group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 h-[220px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-orange-yellow w-12 h-12 rounded-xl flex items-center justify-center text-black text-2xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>
                                </div>
                                {project.type === 'video' ? (
                                    <video
                                        className="project-video group-hover:scale-105 transition-transform duration-500"
                                        poster={project.poster}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={project.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                            </div>
                            <h3 className="text-white font-medium text-lg">{project.title}</h3>
                            <p className="text-gray-400 text-sm font-light">{project.subtitle}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.article>
    );
};

export default Projects;
