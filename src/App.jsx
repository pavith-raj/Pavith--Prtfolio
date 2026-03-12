import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Certificates from './components/pages/Certificates';
import Contact from './components/pages/Contact';

function App() {
    const [activeTab, setActiveTab] = useState('about');

    const renderPage = () => {
        switch (activeTab) {
            case 'about':
                return <About key="about" setActiveTab={setActiveTab} />;
            case 'skills':
                return <Skills key="skills" />;
            case 'projects':
                return <Projects key="projects" />;
            case 'certificates':
                return <Certificates key="certificates" />;
            case 'contact':
                return <Contact key="contact" />;
            default:
                return <About key="about" setActiveTab={setActiveTab} />;
        }
    };

    return (
        <div className="bg-smoky-black text-white antialiased min-h-screen relative font-sans">
            {/* Background Blobs */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[40vw] h-[40vw] bg-orange-yellow/20 rounded-full blur-[100px] -top-[10%] -left-[10%] animate-pulse"
                    style={{ animationDuration: '10s' }}
                ></div>
                <div
                    className="absolute w-[30vw] h-[30vw] bg-vegas-gold/20 rounded-full blur-[100px] bottom-[10%] -right-[10%] animate-pulse"
                    style={{ animationDuration: '7s' }}
                ></div>
            </div>

            <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 items-start relative pb-28 min-h-[100vh]">

                {/* SIDEBAR */}
                <Sidebar />

                {/* CONTENT AREA */}
                <div className="w-full relative min-w-0">

                    {/* NAVBAR */}
                    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* SECTIONS */}
                    <div className="glass-panel rounded-3xl p-6 md:p-10 lg:pt-24 mt-0 min-h-[80vh] relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {renderPage()}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
