import React, { useMemo } from 'react';

const FloatingParticles = () => {
    // Reduced from 50 to 20 particles, using pure CSS animations instead of framer-motion
    const particles = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 2, // 2px to 5px
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 14 + 10,
        delay: Math.random() * -20, // negative delay for staggered start
        xMove: Math.random() * 100 - 50,
        yMove: Math.random() * 100 - 50,
    })), []);

    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle-dot"
                    style={{
                        '--x-move': `${p.xMove}px`,
                        '--y-move': `${p.yMove}px`,
                        width: p.size,
                        height: p.size,
                        left: `${p.left}vw`,
                        top: `${p.top}vh`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        boxShadow: `0 0 ${p.size * 3}px rgba(255, 206, 69, 0.6)`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
