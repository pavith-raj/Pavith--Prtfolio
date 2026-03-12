import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const Certificates = () => {
    const certificatesList = [
        {
            title: 'Python Foundation Certification',
            issuer: 'Infosys Springboard',
            image: 'Python Foundation Certification.jpeg'
        },
        {
            title: 'Object Oriented Programming using Python',
            issuer: 'Infosys Springboard',
            image: 'Object Oriented Programming using Python.jpeg'
        },
        {
            title: 'Software Eng & Agile Development',
            issuer: 'Infosys Springboard',
            image: 'Software Engineering and Agile Software Development.jpeg'
        },
        {
            title: 'Web Development (HTML, CSS, JS)',
            issuer: 'Coursera (IBM)',
            image: 'webdevlopment.png'
        }
    ];

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
                <h2 className="text-3xl font-semibold text-white pb-3 tracking-wide">Certificates</h2>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-yellow to-vegas-gold rounded-full"></div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certificatesList.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8 }}
                        className="bg-jet rounded-2xl shadow-lg border border-white/5 overflow-hidden group transition-colors duration-300 hover:border-orange-yellow/50"
                    >
                        <img
                            src={`/assets/images/certificates/${cert.image}`}
                            alt={cert.title}
                            className={`w-full h-48 object-cover ${cert.image.endsWith('.png') ? 'bg-white' : ''}`}
                        />
                        <div className="p-6">
                            <h3 className="text-white font-semibold text-lg mb-2">{cert.title}</h3>
                            <p className="text-orange-yellow text-sm">{cert.issuer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.article>
    );
};

export default Certificates;
