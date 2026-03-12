import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WordReveal = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <span className="relative inline-block">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

export default function ScrollRevealText({ text, className = "" }) {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 90%', 'start 60%']
    });

    const parsedWords = [];
    const parts = text.split('*');
    parts.forEach((part, i) => {
        const isBold = i % 2 === 1;
        const tokens = part.match(/\S+|\s+/g) || [];
        tokens.forEach(token => {
            parsedWords.push({ text: token, isBold });
        });
    });

    const textTokens = parsedWords.filter(w => /\S/.test(w.text));
    const totalWords = textTokens.length;
    let wordCount = 0;

    return (
        <p className={className} ref={element}>
            {parsedWords.map((wordObj, i) => {
                if (/^\s+$/.test(wordObj.text)) {
                    return <span key={i}>{wordObj.text}</span>;
                }

                const start = totalWords > 0 ? wordCount / totalWords : 0;
                const end = totalWords > 0 ? start + (1 / totalWords) : 1;
                wordCount++;

                const content = wordObj.isBold ?
                    <strong className="text-white font-medium">{wordObj.text}</strong> :
                    wordObj.text;

                return (
                    <WordReveal key={i} progress={scrollYProgress} range={[start, end]}>
                        {content}
                    </WordReveal>
                );
            })}
        </p>
    );
}
