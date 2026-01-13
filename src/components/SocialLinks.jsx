import { PORTFOLIO_DATA } from "../assets/data";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Linkedin, link: PORTFOLIO_DATA.social.linkedin, color: 'bg-blue-600', label: 'LinkedIn' },
    { icon: Instagram, link: PORTFOLIO_DATA.social.instagram, color: 'bg-pink-600', label: 'Instagram' },
    { icon: Github, link: PORTFOLIO_DATA.social.github, color: 'bg-gray-800', label: 'GitHub' },
    { icon: Mail, link: `mailto:${PORTFOLIO_DATA.personal.email}`, color: 'bg-red-600', label: 'Email' }
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      {socials.map((s, i) => (
    <a
  key={i}
  href={s.link}
  target="_blank"
  rel="noopener noreferrer"
  title={s.label}
  className={`${s.color} relative text-white flex items-center 
    rounded-r-xl mb-2 shadow-lg group overflow-hidden
    w-14 hover:w-44 transition-[width] duration-300`}
  style={{ animation: `slideInLeft 0.5s ease-out ${i * 0.1}s both` }}
>
  
  <span className="min-w-14 h-14 flex items-center justify-center flex-shrink-0">
    <s.icon size={20} />
  </span>

 
  <span
    className="opacity-0 group-hover:opacity-100
      transition-opacity duration-200 whitespace-nowrap font-semibold pr-4"
  >
    {s.label}
  </span>
</a>




      ))}
    </div>
  );
};

export default SocialLinks;