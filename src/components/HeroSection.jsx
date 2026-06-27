import { ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../assets/data";
import BubblesAnimated from "./ui/BubblesAnimated";

const stats = [
  {
    num: "4+",
    label: "Months Industry Experience",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    num: "10+",
    label: "Full-Stack Projects",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    num: "300+",
    label: "DSA Problems Solved",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    num: "1",
    label: "International Internship",
    gradient: "from-orange-600 to-red-600",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-5
        sm:px-6
        lg:px-8
        pt-28
        sm:pt-32
        md:pt-36
        lg:pt-40
        pb-10
      "
    >
      <BubblesAnimated />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center animate-fadeInUp">
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-600">
          Hello, I'm
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {PORTFOLIO_DATA.personal.name}
        </h2>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Software
          </span>
        </h1>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-none">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Engineer
          </span>
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          Building scalable software applications using
          <span className="font-semibold text-blue-600"> React.js</span>,
          <span className="font-semibold text-purple-600"> Node.js</span>,
          <span className="font-semibold text-pink-600"> Java</span>,
          <span className="font-semibold text-indigo-600"> PostgreSQL</span> and
          modern software engineering practices.
        </p>

        <div className="flex justify-center mt-6">
          <span className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 sm:px-5 py-2 text-xs sm:text-sm md:text-base font-medium text-blue-700">
            🌍 International Software Engineering Intern • Nextchain Co. Ltd.
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-10 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-gray-100 bg-white/90 backdrop-blur p-5 lg:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.num}
              </h3>

              <p className="mt-2 text-sm text-gray-600 font-medium leading-5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <ArrowDown
            size={28}
            className="text-gray-400 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
