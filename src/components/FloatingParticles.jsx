import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
    // Generate random glowing particles
    const particles = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2, // 2px to 6px
        left: Math.random() * 100, // 0 to 100vw
        top: Math.random() * 100, // 0 to 100vh
        duration: Math.random() * 14 + 10, // 10s to 24s
        xMove: Math.random() * 200 - 100,
        yMove: Math.random() * 200 - 100,
    })), []);

    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-orange-yellow"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.left}vw`,
                        top: `${p.top}vh`,
                        boxShadow: `0 0 ${p.size * 4}px rgba(255, 206, 69, 0.8)`
                    }}
                    animate={{
                        y: [0, p.yMove, 0],
                        x: [0, p.xMove, 0],
                        opacity: [0, 0.9, 0],
                        scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
