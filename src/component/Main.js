import React, { useState } from 'react';
import { Globe, Palette, GraduationCap, Users, Leaf, ChevronDown,Github } from 'lucide-react';

const KidsEducation = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const scrollToMain = () => {
    const mainSection = document.getElementById('main');
    mainSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const themes = [
    {
      title: "Bidang Teknologi",
      subtitle: "Inovasi Digital untuk Membangun Masa Depan",
      icon: <Globe className="w-16 h-16 text-blue-600" />,
      color: "bg-blue-100",
      textColor: "text-blue-800",
      hoverColor: "hover:bg-blue-200"
    },
    {
      title: "Bidang Seni",
      subtitle: "Kreativitas Visual: Menyuarakan Semangat Pemuda",
      icon: <Palette className="w-16 h-16 text-purple-600" />,
      color: "bg-purple-100",
      textColor: "text-purple-800",
      hoverColor: "hover:bg-purple-200"
    },
    {
      title: "Bidang Pendidikan",
      subtitle: "Pendidikan Inovatif: Mendorong Generasi Cerdas",
      icon: <GraduationCap className="w-16 h-16 text-green-600" />,
      color: "bg-green-100",
      textColor: "text-green-800",
      hoverColor: "hover:bg-green-200"
    },
    {
      title: "Bidang Sosial",
      subtitle: "Pemuda dan Perubahan Sosial: Menggerakkan Komunitas",
      icon: <Users className="w-16 h-16 text-red-600" />,
      color: "bg-red-100",
      textColor: "text-red-800",
      hoverColor: "hover:bg-red-200"
    },
    {
      title: "Bidang Lingkungan",
      subtitle: "Seni dan Inovasi untuk Keberlanjutan",
      icon: <Leaf className="w-16 h-16 text-emerald-600" />,
      color: "bg-emerald-100",
      textColor: "text-emerald-800",
      hoverColor: "hover:bg-emerald-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 h-screen flex flex-col items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Membangun Masa Depan Bersama</h1>
          <p className="text-2xl mb-8 animate-fade-in-delay">Mari bergabung dalam perjalanan menuju Indonesia yang lebih baik</p>
          <button 
            onClick={scrollToMain}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Mulai Sekarang
          </button>
        </div>
      </header>

      <main className="min-h-screen flex items-center justify-center py-16 px-4" id="main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`
                  ${theme.color} 
                  ${theme.hoverColor} 
                  rounded-xl 
                  p-8 
                  shadow-xl 
                  transform 
                  hover:scale-105 
                  transition-all 
                  duration-300 
                  cursor-pointer
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  min-h-[320px]
                  ${selectedTheme === index ? 'scale-105 shadow-2xl' : ''}
                `}
                onClick={() => setSelectedTheme(index)}
              >
                <div className="flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform">
                  {theme.icon}
                </div>
                <h2 className={`text-2xl font-bold mb-4 ${theme.textColor} text-center`}>
                  {theme.title}
                </h2>
                <p className="text-gray-700 text-center text-lg">
                  {theme.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© Fann</p>
        </div>
        <div className="flex justify-center">
            <a 
              href="https://github.com/FannNt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors flex items-center space-x-2 group"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:underline">Visit My GitHub</span>
            </a>
          </div>
      </footer>
    </div>
  );
};

export default KidsEducation;