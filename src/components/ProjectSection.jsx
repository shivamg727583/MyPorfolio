import { CheckCircle, Code, ExternalLink, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";

const ProjectsSection = () => (
  <section id="projects" className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="space-y-16">
        {PORTFOLIO_DATA.projects.map((proj, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 aspect-video flex items-center justify-center ">
                {/* <Code size={80} className="text-blue-600 opacity-60" /> */}
                <video src={proj.video} autoPlay loop muted className="w-full h-full object-contain rounded-2xl"></video>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">{proj.title}</h3>
              <p className="text-gray-600 text-lg">{proj.desc}</p>
              <p className="text-sm text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg inline-block">
                {proj.tech}
              </p>

              <ul className="space-y-2">
                {proj.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 pt-4">
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg">
                  <Github size={18} /> Code
                </a>
                {proj.demo !== '#' && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg">
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;