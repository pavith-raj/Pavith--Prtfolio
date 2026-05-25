import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Optimized: single transform for the whole paragraph instead of per-word
const ScrollRevealText = ({ text, className = "" }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 90%', 'start 60%']
    });

    // Single opacity transform for the entire block
    const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [8, 0]);

    // Parse bold markers for rendering
    const parts = text.split('*');
    const rendered = parts.map((part, i) => {
        if (i % 2 === 1) {
            return <strong key={i} className="text-white font-medium">{part}</strong>;
        }
        return <span key={i}>{part}</span>;
    });

    return (
        <motion.p
            className={className}
            ref={element}
            style={{ opacity, y, willChange: 'opacity, transform' }}
        >
            {rendered}
        </motion.p>
    );
};

export default ScrollRevealText;
