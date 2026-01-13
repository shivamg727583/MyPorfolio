import { Code, Mail, MapPin, Phone,Github, Linkedin} from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";

const AboutSection = () => (
  <section id="about" className="min-h-screen py-20 px-4 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed">{PORTFOLIO_DATA.personal.bio}</p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently pursuing B.Tech at <span className="font-semibold text-purple-600">SIRT Bhopal</span>, 
            I've gained practical experience building scalable applications and optimizing performance.
          </p>

          <div className="space-y-3 pt-4">
            {[
              { icon: Mail, text: PORTFOLIO_DATA.personal.email, color: 'text-blue-600', link: `mailto:${PORTFOLIO_DATA.personal.email}` },
              { icon: Phone, text: PORTFOLIO_DATA.personal.phone, color: 'text-purple-600' },
              { icon: MapPin, text: PORTFOLIO_DATA.personal.location, color: 'text-pink-600' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <item.icon className={item.color} size={20} />
                {item.link ? (
                  <a href={item.link} className="hover:text-blue-600 transition-colors">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 pt-6">
            {[
              { icon: Github, link: PORTFOLIO_DATA.social.github, label: 'GitHub', color: 'bg-gray-800' },
              { icon: Linkedin, link: PORTFOLIO_DATA.social.linkedin, label: 'LinkedIn', color: 'bg-blue-600' },
              { icon: Code, link: PORTFOLIO_DATA.social.leetcode, label: 'LeetCode', color: 'bg-orange-600' }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 ${social.color} text-white px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg`}>
                <social.icon size={20} /> {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
             <img src={PORTFOLIO_DATA.personal.picture} alt={PORTFOLIO_DATA.personal.initials} className="w-full h-full object-cover" />
              {/* <span className="text-white text-8xl font-bold">{ PORTFOLIO_DATA.personal.initials}</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;