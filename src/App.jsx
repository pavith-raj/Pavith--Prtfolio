import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Certificates from './components/pages/Certificates';
import Contact from './components/pages/Contact';
import FloatingParticles from './components/FloatingParticles';

function App() {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="text-white antialiased min-h-screen relative font-sans">
            {/* Floating Fireflies Background */}
            <FloatingParticles />

            {/* Background Blobs */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none mix-blend-screen">
                <div
                    className="absolute w-[40vw] h-[40vw] bg-orange-yellow/10 rounded-full blur-[100px] -top-[10%] -left-[10%] animate-pulse"
                    style={{ animationDuration: '15s' }}
                ></div>
                <div
                    className="absolute w-[30vw] h-[30vw] bg-vegas-gold/10 rounded-full blur-[100px] bottom-[10%] -right-[10%] animate-pulse"
                    style={{ animationDuration: '12s' }}
                ></div>
            </div>

            <main className="max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center gap-8 relative pb-28 min-h-[100vh]">

                {/* HERO HEADER (formerly Sidebar) */}
                <Sidebar />

                {/* CONTENT AREA */}
                <div className="w-full relative min-w-0 flex flex-col gap-8">
                    
                    {/* NAVBAR */}
                    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

                    <section id="about" className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden scroll-mt-32">
                        <About setActiveTab={setActiveTab} />
                    </section>
                    
                    <section id="skills" className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden scroll-mt-32">
                        <Skills />
                    </section>
                    
                    <section id="projects" className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden scroll-mt-32">
                        <Projects />
                    </section>
                    
                    <section id="certificates" className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden scroll-mt-32">
                        <Certificates />
                    </section>
                    
                    <section id="contact" className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden scroll-mt-32">
                        <Contact />
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
