import { PORTFOLIO_DATA } from "../assets/data";

const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
    <div className="text-center">
      <div className="flex gap-4 mb-8">
        {PORTFOLIO_DATA.personal.name.split(' ').map((word, i) => (
          <span key={i} className="text-5xl md:text-7xl font-bold text-white opacity-0" 
                style={{ animation: `fadeInUp 0.8s ease-out ${i * 0.3}s forwards` }}>
            {word}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-white rounded-full" 
               style={{ animation: `bounce 1s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </div>
    </div>
  </div>
);

export default LoadingScreen