import { Award } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";

const SkillsSection = () => {
  const colors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-purple-500 to-pink-500',
    databases: 'from-green-500 to-teal-500',
    tools: 'from-orange-500 to-red-500'
  };
  const icons = { frontend: '🎨', backend: '⚙️', databases: '🗄️', tools: '🚀' };

  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(PORTFOLIO_DATA.skills).map(([cat, skills]) => (
            <div key={cat} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{icons[cat]}</span>
                <h3 className={`text-2xl font-bold capitalize bg-gradient-to-r ${colors[cat]} bg-clip-text text-transparent`}>
                  {cat}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span key={i}
                    className={`bg-gradient-to-r ${colors[cat]} bg-opacity-10 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:scale-110 hover:shadow-lg transition-all cursor-default border border-gray-200`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4 justify-center">
            <Award className="text-yellow-600" size={48} />
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.achievements.map((ach, i) => (
              <div key={i} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <p className="text-gray-700 font-medium">{ach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;