import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const Certificates = () => {
    const certificatesList = [
        // --- AI / GenAI Certificates ---
        {
            title: 'Agentic AI',
            issuer: 'DeepLearning.AI',
            image: 'AgenticAI_Certificate.png'
        },
        {
            title: 'RAG (Retrieval-Augmented Generation)',
            issuer: 'DeepLearning.AI',
            image: 'RAG_Certificate.png'
        },
        {
            title: 'Introduction to MCP',
            issuer: 'DeepLearning.AI',
            image: 'Intro to mcp.png'
        },
        {
            title: 'Introduction to Agent Skills',
            issuer: 'DeepLearning.AI',
            image: 'Intro to agent skills.png'
        },
        {
            title: 'Claude with Anthropic API',
            issuer: 'DeepLearning.AI',
            image: 'Claude with Anthropic API.png'
        },
        // --- Python Certificates ---
        {
            title: 'Python Foundation Certification',
            issuer: 'Infosys Springboard',
            image: 'Python Foundation Certification.jpeg'
        },
        {
            title: 'Basics of Python',
            issuer: 'Infosys Springboard',
            image: 'Bacis of Python.jpeg'
        },
        {
            title: 'Programming Fundamentals Using Python Part 1',
            issuer: 'Infosys Springboard',
            image: 'Programming Fundamentals Using Python Part 1.jpeg'
        },
        {
            title: 'Programming Fundamentals Using Python Part 2',
            issuer: 'Infosys Springboard',
            image: 'Programming Fundamentals Using Python Part 2.jpeg'
        },
        {
            title: 'Object Oriented Programming using Python',
            issuer: 'Infosys Springboard',
            image: 'Object Oriented Programming using Python.jpeg'
        },
        // --- Database Certificates ---
        {
            title: 'Database Management System Part 1',
            issuer: 'Infosys Springboard',
            image: 'Database Management System Part 1.jpeg'
        },
        {
            title: 'Database Management System Part 2',
            issuer: 'Infosys Springboard',
            image: 'Database Management System Part 2.jpeg'
        },
        {
            title: 'Introduction to NoSQL Databases',
            issuer: 'Infosys Springboard',
            image: 'Introduction to NoSQL databases.jpeg'
        },
        // --- Software Engineering & Agile ---
        {
            title: 'Software Eng & Agile Development',
            issuer: 'Infosys Springboard',
            image: 'Software Engineering and Agile Software Development.jpeg'
        },
        {
            title: 'Agile Scrum in Practice',
            issuer: 'Infosys Springboard',
            image: 'Agile Scrum in Practice.jpeg'
        },
        // --- Cloud ---
        {
            title: 'AWS Workshop',
            issuer: 'AWS',
            image: 'AWS Workshop.jpg'
        },
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
                            loading="lazy"
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
