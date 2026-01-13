import { Mail,Github,Linkedin,Instagram,ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";

const Footer = ({ scrollToSection }) => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="text-lg font-semibold">Made with ❤️ by {PORTFOLIO_DATA.personal.name}</p>
        <p className="text-gray-400 text-sm mt-1">© 2025 All rights reserved</p>
      </div>

      <div className="flex gap-4">
        {[
          { icon: Linkedin, link: PORTFOLIO_DATA.social.linkedin },
          { icon: Instagram, link: PORTFOLIO_DATA.social.instagram },
          { icon: Github, link: PORTFOLIO_DATA.social.github },
          { icon: Mail, link: `mailto:${PORTFOLIO_DATA.personal.email}` }
        ].map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 hover:scale-110 transition-all">
            <social.icon size={20} />
          </a>
        ))}
      </div>

      <button onClick={() => scrollToSection('home')}
        className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 hover:scale-105 transition-all">
        <span className="font-semibold">Back to Top</span>
        <ArrowUp size={18} />
      </button>
    </div>
  </footer>
);

export default Footer;