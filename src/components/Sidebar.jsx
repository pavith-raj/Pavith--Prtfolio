import React from 'react';

const Sidebar = () => {
    return (
        <aside className="glass-panel w-full lg:w-80 flex-shrink-0 rounded-3xl p-6 lg:sticky lg:top-8 z-10 transition-all duration-300">
            <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-0">
                <img
                    src="/assets/images/Photo.jpg"
                    alt="Pavith Raj"
                    className="w-32 h-32 rounded-3xl object-cover lg:mb-4 shadow-lg"
                />
                <div className="flex flex-col items-start lg:items-center">
                    <h1 className="text-2xl font-semibold text-white mb-2">Pavith Raj</h1>
                    <p className="px-3 py-1 bg-jet rounded-lg text-xs tracking-wide text-white">VR Programmer</p>
                </div>
            </div>

            <hr className="border-jet my-6 hidden lg:block" />

            <div className="flex flex-col gap-6 mt-6 lg:mt-0">
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-jet flex items-center justify-center text-orange-yellow shadow-md group-hover:scale-110 transition-transform">
                        <ion-icon name="mail-outline" className="text-2xl"></ion-icon>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-[11px] text-gray-400 uppercase font-semibold">Email</p>
                        <a href="mailto:pavithraj802@gmail.com" className="text-sm hover:text-orange-yellow transition-colors truncate block">
                            pavithraj802@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-jet flex items-center justify-center text-orange-yellow shadow-md group-hover:scale-110 transition-transform">
                        <ion-icon name="logo-github" className="text-2xl"></ion-icon>
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold">GitHub</p>
                        <a href="https://github.com/pavith-raj" target="_blank" rel="noreferrer" className="text-sm hover:text-orange-yellow transition-colors">
                            Pavith-raj
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-jet flex items-center justify-center text-orange-yellow shadow-md group-hover:scale-110 transition-transform">
                        <ion-icon name="location-outline" className="text-2xl"></ion-icon>
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold">Location</p>
                        <address className="text-sm not-italic">Mangalore, India</address>
                    </div>
                </div>
            </div>

            <hr className="border-jet my-6" />

            <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/pavith-raj-" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-yellow hover:scale-125 transition-all text-xl">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://x.com/pavith_shetty_?t=fPtuP9J0fMKBpptfM_ZE_w&s=09" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-yellow hover:scale-125 transition-all text-xl">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="https://www.instagram.com/pavith_shetty_?igsh=b2txMGhwa3hweHpk" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-yellow hover:scale-125 transition-all text-xl">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
