import { Award } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";

const SkillsSection = () => {
  const categories = {
    languages: {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    frontend: {
      title: "Frontend",
      icon: "🎨",
      color: "from-indigo-500 to-blue-500",
    },
    backend: {
      title: "Backend",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
    },
    databases: {
      title: "Databases",
      icon: "🗄️",
      color: "from-green-500 to-teal-500",
    },
    cloud_tools: {
      title: "Tools & Platforms",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
    },
    core: {
      title: "Core Computer Science",
      icon: "🧠",
      color: "from-violet-500 to-fuchsia-500",
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 md:px-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Technologies and software engineering concepts I use to design,
          develop, and deploy scalable applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, value]) => (
            <div
              key={key}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{value.icon}</span>

                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                >
                  {value.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills[key]?.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full border border-gray-200 bg-gradient-to-r ${value.color} bg-opacity-10 text-sm font-medium text-gray-100 hover:scale-105 transition`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}

        <div className="mt-24">
          <h2 className="flex items-center justify-center gap-4 text-4xl font-bold mb-12">
            <Award className="text-yellow-500" size={42} />

            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.achievements.map((achievement) => (
              <div
                key={achievement}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-700 font-medium leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;