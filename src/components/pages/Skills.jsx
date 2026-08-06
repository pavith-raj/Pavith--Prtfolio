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

/**
 * Skills data organized by category.
 * Each item has a `name` and an optional `img` pointing to a file in /assets/images/.
 * Items without an `img` will render a text-based fallback badge.
 */
const skillCategories = [
    {
        title: "🧠 Generative AI",
        items: [
            { name: "LangChain", img: "langchain-text.svg" },
            { name: "Gemini API", img: "gemini-text.svg" },
            // TODO: Add logo – prompt-engineering.png or similar
            { name: "Prompt Engineering" },
            // TODO: Add logo – rag.png or similar
            { name: "RAG" },
            // TODO: Add logo – hybrid-search.png or similar
            { name: "Hybrid Search" },
            { name: "MCP", img: "mcp-text.svg" },
            // TODO: Add logo – ai-agents.png or similar
            // { name: "AI Agents" },
        ],
    },
    {
        title: "💻 Programming Languages",
        items: [
            { name: "Python", img: "Python.png" },
            { name: "JavaScript", img: "javascript.png" },
            // TODO: Add logo – sql.png or similar
            // { name: "SQL" },
            { name: "C#", img: "c-sharp.png" },
        ],
    },
    {
        title: "⚙️ Frameworks & Libraries",
        items: [
            { name: "FastAPI", img: "fastapi-wordmark-light.png" },
            { name: "React.js", img: "React.png" },
            { name: "Next.js", img: "nextjs-light.png" },
            { name: "Node.js", img: "nodejs.png" },
            { name: "Express.js", img: "express-js.png" },
            { name: "Tailwind CSS", img: "tailwind.png" },
        ],
    },
    {
        title: "🗄️ Databases",
        items: [
            { name: "PostgreSQL", img: "postgresql.png" },
            { name: "Supabase", img: "supabase.png" },
            { name: "MongoDB", img: "MongoDB.png" },
            { name: "MySQL", img: "mysql.png" },
            { name: "ChromaDB", img: "chroma.png" },
        ],
    },
    {
        title: "☁️ Cloud & DevOps",
        items: [
            { name: "Google Cloud Platform", img: "google-cloud.png" },
            { name: "Git", img: "git.png" },
            // { name: "GitHub", img: "github.png" },
            { name: "GitHub Actions", img: "github.png" },
            // TODO: Add logo – rest-api.png or similar
            { name: "REST APIs" },
        ],
    },
    {
        title: "🤖 AI Tools & Models",
        items: [
            { name: "Groq", img: "groq-text.svg" },
            { name: "Llama / Ollama", img: "ollama-text.svg" },
            // TODO: Add logo – ragas.png or similar
            { name: "RAGAS" },
            // TODO: Add logo – opencv.png or similar
            { name: "OpenCV" },
        ],
    },
    {
        title: "🛠 Development Tools",
        items: [
            { name: "VS Code", img: "vscode.png" },
            { name: "Unity", img: "Unity.png" },
        ],
    },
];

/**
 * Text fallback badge for skills that don't have a logo image yet.
 */
const TextBadge = ({ name }) => (
    <span className="text-xs font-semibold text-light-gray text-center leading-tight select-none">
        {name}
    </span>
);

const Skills = () => {
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
                {skillCategories.map((category, idx) => (
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
                                    {item.img ? (
                                        <img
                                            src={`/assets/images/${item.img}`}
                                            alt={item.name}
                                            loading="lazy"
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    ) : (
                                        <TextBadge name={item.name} />
                                    )}
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

