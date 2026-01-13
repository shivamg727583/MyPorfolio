import { useEffect, useState } from "react";
import { PORTFOLIO_DATA } from "../assets/data";
import { Download, Menu, X } from "lucide-react";

const Navigation = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all ${
        scrolled ? 'bg-white/95 shadow-2xl' : 'bg-white/90'
      } backdrop-blur-md rounded-full px-8 py-4 w-11/12 md:w-auto`}>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-semibold transition-all relative group ${
                activeSection === item.toLowerCase() ? 'text-blue-600 scale-110' : 'text-gray-700 hover:text-blue-600'
              }`}>
              {item}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all ${
                activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
          <a href={PORTFOLIO_DATA.personal.resume} download
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <Download size={16} /> Resume
          </a>
        </div>
        <button className="md:hidden w-full flex items-center justify-between" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="font-bold">{PORTFOLIO_DATA.personal.initials}</span>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden animate-fadeIn">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button key={item} onClick={() => { scrollToSection(item.toLowerCase()); setMenuOpen(false); }}
                className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};


export default Navigation;