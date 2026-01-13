import { ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";
import BubblesAnimated from "./ui/BubblesAnimated";
// import { useEffect, useRef } from "react";

const HeroSection = ({ scrollToSection }) => {
  // const sheryInit = useRef(false);

  // useEffect(() => {
  //   if (!window.Shery || sheryInit.current) return;

  //   window.Shery.textAnimate(".hero-text", {
  //     style: 2,
  //     y: 20,
  //     delay: 0.1,
  //     duration: 1.5,
  //   });

  //   sheryInit.current = true;
  // }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <BubblesAnimated />

      <div className="relative z-10 text-center max-w-5xl animate-fadeInUp">
        <p className="text-lg md:text-2xl text-gray-600 mt-16 font-medium">
          Hi! I'm{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold hero-text">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Full Stack
          </span>
        </h1>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="text-base md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
          Specializing in{" "}
          <span className="font-semibold text-blue-600">MERN Stack</span> &{" "}
          <span className="font-semibold text-purple-600">Next.js</span>
        </p>

        <button
          onClick={() => scrollToSection("about")}
          className="bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-3 mx-auto group hover:scale-105"
        >
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown
            className="group-hover:translate-y-1 transition-transform text-blue-600"
            size={24}
          />
        </button>

        <div className="grid grid-cols-3 gap-6 mt-5 max-w-2xl mx-auto">
          {[
            { num: "3+", label: "Months Experience", gradient: "from-blue-600 to-purple-600" },
            {
              num: `${PORTFOLIO_DATA.projects.length + 20}+`,
              label: "Projects",
              gradient: "from-purple-600 to-pink-600",
            },
            {
              num: `${Object.values(PORTFOLIO_DATA.skills).flat().length}+`,
              label: "Technologies",
              gradient: "from-pink-600 to-blue-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <p
                className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.num}
              </p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
