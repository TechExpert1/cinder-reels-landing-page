import cinderReelsLogo from '../assets/logo-laptop view.png'
import heroBg from '../assets/hero bg.png'

const Hero = () => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex items-center justify-center m-0 p-0 font-['Montserrat']">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Content Container */}
      <div className="text-center text-white z-10 px-8 max-w-4xl relative">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={cinderReelsLogo} className="w-[266px] h-[234px] object-contain" />
        </div>
        
        {/* Main Title */}
        <h1 className="font-bold text-[80px] tracking-wide mb-4">CinderReels</h1>
        
        {/* Tagline */}
        <div className="text-xl mb-6 space-x-2">
          <span>Snap</span>
          <span>•</span>
          <span>Share</span>
          <span>•</span>
          <span>Vanish</span>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl mb-8">Every post vanishes at midnight</p>
        
        {/* Timer Badge */}
        <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full mb-12">
          <span className="mr-2">⏰</span>
          <span className="font-semibold">Posts vanish in: 12 h : 06 m</span>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
