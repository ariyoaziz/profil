import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false); // Set initial state to false for light mode

    return (
        <>
            {/* Section 1: Halaman Utama */}
            <section
                className={`h-screen flex flex-col justify-center items-center px-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
                    }`}
            >
                <motion.div
                    className="h-screen flex flex-col items-center justify-center"
                    initial={{ opacity: 0, translateY: 50 }} // Gunakan `translateY` untuk lebih konsisten dengan CSS
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.10, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    {/* Dekorasi Latar Belakang */}
                    <div
                        className={`absolute top-0 left-0 w-full h-full bg-${isDarkMode ? 'black' : 'gray-300'} opacity-20`}
                    >
                        {/* Dekorasi Pola atau Elemen di belakang */}
                        <div className={`absolute top-0 left-0 w-full h-full bg-[url('/images/decorative-pattern.png')] bg-cover bg-center`} />
                    </div>

                    {/* Foto dan Deskripsi */}
                    <div className="text-center relative">
                        {/* Foto Profil */}
                        <div className="flex justify-center items-center relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
                            {/* Latar belakang dengan blur, opacity, dan shadow */}
                            <div
                                className={`w-24 h-24 sm:w-32 sm:h-32 ${isDarkMode ? "bg-[#E9ECEF] backdrop-blur-md" : "bg-[#212529] backdrop-blur-sm"
                                    } rounded-t-full z-0 mx-auto shadow-xl`}
                            ></div>

                            {/* Foto Profil */}
                            <img
                                src="/images/profile.png" // Ganti path gambar Anda
                                alt="Ariyo Aziz Pratama"
                                className="w-full h-full object-contain z-10 absolute top-0 left-1/2 transform -translate-x-1/2"
                            />
                        </div>

                        {/* Label Kiri */}
                        <div
                            className={`group absolute top-1/2 -left-16 sm:-left-32 text-xs sm:text-[6px] md:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md transition ${isDarkMode ? "bg-gray-700 text-white hover:bg-white hover:text-black" : "bg-white text-gray-900 hover:bg-gray-900 hover:text-white"}`}
                        >
                            <img
                                src={isDarkMode ? "/icons/mouse.svg" : "/icons/mouse-dark.svg"} // Ganti ikon sesuai mode
                                alt="Mouse Icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-5 -left-3 sm:-left-4 transition-transform duration-500 group-hover:translate-x-5"
                            />
                            UI/UX
                        </div>

                        {/* Label Kanan */}
                        <div
                            className={`group absolute top-1/4 -right-16 sm:-right-32 text-xs sm:text-[6px] md:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md transition ${isDarkMode ? "bg-gray-700 text-white hover:bg-white hover:text-black" : "bg-white text-gray-900 hover:bg-gray-900 hover:text-white"}`}
                        >
                            <img
                                src={isDarkMode ? "/icons/mouse.svg" : "/icons/mouse-dark.svg"} // Ganti ikon sesuai mode
                                alt="Mouse Icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-5 -left-3 sm:-left-4 transition-transform duration-500 group-hover:translate-x-5"
                            />
                            Seni Visual
                        </div>


                    </div>

                    {/* Nama dan Deskripsi */}
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-none -mt-2 sm:-mt-4 lg:-mt-8">
                        Ariyo Aziz Pratama
                    </h1>
                    <p className="text-xs sm:text-sm lg:text-lg leading-none mt-10 typing-animation text-center max-w-full w-full overflow-hidden">
                        Informatics Student at University Technology of Yogyakarta
                    </p>



                    {/* Garis Dekorasi */}
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-6 rounded-full" />

                    {/* Let's Connect Text */}
                    <p className="text-[#6C757D] text-xs sm:text-sm mt-3">Let&apos;s connect!</p>

                    {/* Social Links */}
                    <div className="flex space-x-4 sm:space-x-6 mt-8 justify-center">
                        {[
                            { href: "https://instagram.com/ariyoaziz_", icon: "ig", label: "Instagram" },
                            { href: "https://linkedin.com/in/ariyo-aziz-pratama", icon: "in", label: "LinkedIn" },
                            { href: "https://behance.net/ariyoaziz_", icon: "be", label: "Behance" },
                            { href: "https://github.com/ariyoaziz", icon: "git", label: "GitHub" },
                        ].map((link, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center transition ${isDarkMode
                                    ? "text-white hover:text-gray-300"
                                    : "text-gray-900 hover:text-gray-600"
                                    }`}
                            >
                                <a href={link.href} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={`/icons/${link.icon}-${isDarkMode ? "light" : "dark"}.svg`}
                                        alt={link.label}
                                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform transform hover:scale-150 hover:rotate-6 hover:shadow-lg"
                                    />
                                </a>
                                <p className="text-xs sm:text-sm mt-2">{link.label}</p>
                            </div>
                        ))}
                    </div>


                    {/* Mode Toggle */}
                    <div className="mt-10 flex flex-col items-center justify-center text-center">
                        <p className="text-[0.5rem] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] mb-8 text-[#6C757D]">
                            Dark mode untuk yang chill, light mode buat yang fresh. Kamu tim mana?
                        </p>

                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg transition z-50 mb-10 ${isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
                        >
                            <img
                                src={isDarkMode ? "/icons/power.svg" : "/icons/power-light.svg"} // Ganti ikon sesuai mode
                                alt="Power Icon"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Section 2: Tentang Saya */}
            <section
                className={`h-screen flex flex-col items-center justify-center px-4 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                    }`}
            >
                <motion.div
                    className="h-screen flex flex-col items-center justify-start pt-20 bg-opacity-50"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Tentang Saya</h2>
                        <p className="text-sm sm:text-base max-w-md">
                            Saya seorang mahasiswa informatika yang memiliki passion dalam bidang UI/UX, seni visual, dan pengembangan web.
                            Mari berkolaborasi!
                        </p>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
