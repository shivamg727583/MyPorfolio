import { Briefcase, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";

const ExperienceSection = () => (
  <section id="experience" className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 flex items-center gap-4">
        <Briefcase className="text-blue-600" size={56} />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
      </h2>

      {PORTFOLIO_DATA.experience.map((exp, idx) => (
        <div key={idx} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl mb-8 hover:shadow-3xl transition-all hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Internship
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3">{exp.title}</h3>
              <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
              <p className="text-gray-600">{exp.location}</p>
            </div>
            <p className="font-semibold text-lg text-gray-600 mt-4 md:mt-0">{exp.duration}</p>
          </div>

          <ul className="space-y-3">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <span className="text-blue-600 mt-1 font-bold text-xl group-hover:scale-125 transition-transform">▸</span>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <GraduationCap className="text-purple-600" size={48} />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Pursuing
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3">{PORTFOLIO_DATA.education.degree}</h3>
              <p className="text-xl text-purple-600 font-semibold">{PORTFOLIO_DATA.education.institution}</p>
              <p className="text-gray-600">{PORTFOLIO_DATA.education.location}</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="font-semibold text-lg text-gray-600">{PORTFOLIO_DATA.education.duration}</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                CGPA: {PORTFOLIO_DATA.education.cgpa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;