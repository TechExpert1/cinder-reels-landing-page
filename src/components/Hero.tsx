import cinderReelsLogo from '../assets/logo-laptop view.png'
import heroBg from '../assets/hero bg.png'
import hourGlass from '../assets/hour glass.png';

const Hero = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center m-0 p-0 md:pt-20 pt-0 font-['Montserrat']">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Content Container */}
      <div className="text-center text-white z-10 px-2 md:px-8 max-w-sm md:max-w-4xl relative">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6 md:mb-8 w-full ml-4 md:ml-2">
          <img src={cinderReelsLogo} className="w-[154px] h-[135px] md:w-[266px] md:h-[234px] object-contain" />
        </div>
        
        <h1 className="font-bold text-[44px] md:text-[80px] tracking-wide mb-2 md:mb-4">CinderReels</h1>
        
        <div className="font-['Montserrat'] font-bold text-[20px] md:text-[30px] mb-3 md:mb-6 space-x-1 md:space-x-2">
          <span>Snap</span> <span>•</span> <span>Share</span> <span>•</span> <span>Vanish</span>
        </div>
        
        {/* Subtitle */}
        <p className="font-['Montserrat'] font-bold text-[20px] md:text-[30px] mb-4 md:mb-8">Every post vanishes at midnight</p>
        
        {/* Timer Badge */}
        <div className="flex items-center justify-center bg-[#FFC70E] w-[209px] h-[35px] md:w-[418px] md:h-[69px] rounded-[25px] md:rounded-[51px] text-[18px] md:text-[24px] mb-12 mx-auto">
          <img src={hourGlass} className="h-3 w-[9px] md:h-6 md:w-[17px] mr-2 md:mr-3" />
          <span className="font-['Montserrat'] font-semibold text-[12px] md:text-[24px] text-[#F03817]">Posts vanish in: 12 h : 06 m</span>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
