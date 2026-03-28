import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    })
};

const Sidebar = () => {
    // Typing effect logic
    const [typedRole, setTypedRole] = useState('');
    const fullRole = "GENAI ENGINEER | AR/VR";
    
    useEffect(() => {
        // start typing shortly after it appears (appears at 0.4s marker)
        const timeout = setTimeout(() => {
            let i = 0;
            const intervalId = setInterval(() => {
                setTypedRole(fullRole.substring(0, i + 1));
                i++;
                if (i >= fullRole.length) {
                    clearInterval(intervalId);
                }
            }, 80); // typing speed
            return () => clearInterval(intervalId);
        }, 500);
        
        return () => clearTimeout(timeout);
    }, []);

    return (
        <header className="w-full flex flex-col items-center justify-center pt-10 pb-16 text-center z-10 transition-all duration-300">
            {/* Avatar Profile */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={itemVariants} className="relative mb-8">
                {/* Clean Rotating Glow purely behind avatar */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                    className="absolute -inset-4 bg-gradient-to-tr from-orange-yellow/40 via-transparent to-vegas-gold/40 rounded-full blur-[25px]" 
                />
                <img
                    src="/assets/images/Photo.jpg"
                    alt="Pavith Raj"
                    className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-jet shadow-2xl bg-smoky-black"
                />
            </motion.div>
            
            {/* Name */}
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                Pavith Raj
            </motion.h1>
            
            {/* Role Badge with Typing Effect */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={itemVariants}>
                <p className="px-5 py-2 bg-jet border border-jet rounded-full text-sm md:text-base tracking-widest text-orange-yellow font-semibold mb-8 shadow-md inline-block min-w-[300px] text-center">
                    {typedRole}
                    <motion.span 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-1.5 h-4 ml-1 bg-orange-yellow align-middle"
                    />
                </p>
            </motion.div>
            
            {/* Contact Pills */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={itemVariants} className="flex flex-wrap justify-center gap-4 max-w-2xl mb-8">
                <a href="mailto:pavithraj802@gmail.com" className="flex items-center gap-2 px-5 py-2.5 bg-jet/40 hover:bg-jet border border-jet rounded-full transition-colors group shadow-sm">
                    <ion-icon name="mail-outline" className="text-orange-yellow text-lg"></ion-icon>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">pavithraj802@gmail.com</span>
                </a>
                
                <a href="https://github.com/pavith-raj" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-jet/40 hover:bg-jet border border-jet rounded-full transition-colors group shadow-sm">
                    <ion-icon name="logo-github" className="text-orange-yellow text-lg"></ion-icon>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Pavith-raj</span>
                </a>
                
                <div className="flex items-center gap-2 px-5 py-2.5 bg-jet/40 border border-jet rounded-full shadow-sm">
                    <ion-icon name="location-outline" className="text-orange-yellow text-lg"></ion-icon>
                    <span className="text-sm text-gray-300">Mangalore, India</span>
                </div>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div custom={4} initial="hidden" animate="visible" variants={itemVariants} className="flex justify-center gap-8">
                <a href="https://www.linkedin.com/in/pavith-raj-" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-yellow hover:-translate-y-1 transition-all text-2xl">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://x.com/pavith_shetty_?t=fPtuP9J0fMKBpptfM_ZE_w&s=09" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-yellow hover:-translate-y-1 transition-all text-2xl">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="https://www.instagram.com/pavith_shetty_?igsh=b2txMGhwa3hweHpk" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-yellow hover:-translate-y-1 transition-all text-2xl">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </motion.div>
        </header>
    );
};

export default Sidebar;
