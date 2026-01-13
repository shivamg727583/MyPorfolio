

function BubblesAnimated() {
  return (
    <>
 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
    
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
          style={{
            width: `${Math.random() * 100 + 30}px`,
            height: `${Math.random() * 100 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>

    </>
  )
}

export default BubblesAnimated