import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const Contact = () => {
    const socialLinks = [
        {
            platform: 'LinkedIn',
            icon: 'logo-linkedin',
            url: 'https://www.linkedin.com/in/pavith-raj-'
        },
        {
            platform: 'X (Twitter)',
            icon: 'logo-twitter',
            url: 'https://x.com/pavith_shetty_?t=fPtuP9J0fMKBpptfM_ZE_w&s=09'
        },
        {
            platform: 'Instagram',
            icon: 'logo-instagram',
            url: 'https://www.instagram.com/pavith_shetty_?igsh=b2txMGhwa3hweHpk'
        }
    ];

    return (
        <motion.article
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.6 }}
            className="w-full text-center lg:text-left"
        >
            <header className="mb-8 relative inline-block text-left">
                <h2 className="text-3xl font-semibold text-white pb-3 tracking-wide">Contact</h2>
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-yellow to-vegas-gold rounded-full"></div>
            </header>

            <p className="text-gray-300 text-lg mb-10 text-left">Feel free to reach out to me below!</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-16">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center gap-3 group text-gray-400 hover:text-white transition-colors"
                    >
                        <motion.div
                            whileHover={{ y: -8, scale: 1.1 }}
                            className="w-16 h-16 bg-jet rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-yellow group-hover:text-black transition-all duration-300 text-3xl"
                        >
                            <ion-icon name={link.icon}></ion-icon>
                        </motion.div>
                        <span className="font-medium text-sm">{link.platform}</span>
                    </a>
                ))}
            </div>
        </motion.article>
    );
};

export default Contact;
