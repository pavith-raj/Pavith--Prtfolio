import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } }
};

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            items: [
                { name: "C#", img: "c-sharp.png" },
                { name: "Python", img: "Python.png" },
                { name: "Javascript", img: "javascript.png" }
            ]
        },
        {
            title: "Frameworks",
            items: [
                { name: "React", img: "React.png" },
                { name: "Node.js", img: "nodejs.png" }
            ]
        },
        {
            title: "Database",
            items: [
                { name: "MySQL", img: "mysql.png" },
                { name: "MongoDB", img: "MongoDB.png" }
            ]
        },
        {
            title: "Tools & Platform",
            items: [
                { name: "Unity", img: "Unity.png" },
                { name: "AWS", img: "aws.png" },
                { name: "VS Code", img: "vscode.png" },
                { name: "GitHub", img: "github.png" },
                { name: "Photoshop", img: "photoshop.png" },
                { name: "Premiere Pro", img: "premierepro.png" }
            ]
        }
    ];

    return (
        <motion.article
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.6 }}
        >
            <header className="mb-8 relative inline-block">
                <h2 className="text-3xl font-semibold text-white pb-3 tracking-wide">Skills</h2>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-yellow to-vegas-gold rounded-full"></div>
            </header>

            <div className="space-y-10">
                {categories.map((category, idx) => (
                    <section key={idx}>
                        <h3 className="text-xl font-medium text-white mb-6">{category.title}</h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-wrap gap-4"
                        >
                            {category.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, borderColor: 'hsla(45, 100%, 72%, 0.5)' }}
                                    className="bg-jet p-4 rounded-2xl shadow-md border border-white/5 transition-colors duration-300 w-24 h-24 flex items-center justify-center cursor-pointer"
                                    title={item.name}
                                >
                                    <img src={`/assets/images/${item.img}`} alt={item.name} className="max-w-full max-h-full object-contain" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                ))}
            </div>
        </motion.article>
    );
};

export default Skills;
