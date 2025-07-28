import { useState, useEffect } from 'react';
import cinderReelsLogo from '../assets/logo-laptop view.png'
import heroBg from '../assets/hero bg.png'
import hourGlass from '../assets/hour glass.png';

const Hero = () => {
  const [timeRemaining, setTimeRemaining] = useState({ hours: 12, minutes: 6 });
  const [isLoading, setIsLoading] = useState(true);

  const fetchTimerData = async () => {
    try {
      const response = await fetch('https://cinderreels-production.up.railway.app/api/v1/vanish/timer');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data.timeRemaining) {
          setTimeRemaining({
            hours: result.data.timeRemaining.hours,
            minutes: result.data.timeRemaining.minutes
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch timer data:', error);
      // Keep default values on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTimerData();
    const interval = setInterval(fetchTimerData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-screen w-screen flex items-center justify-center m-0 p-0 md:pt-20 pt-[90px] font-['Montserrat']">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Content Container */}
      <div className="text-center text-white z-10 px-2 md:px-8 max-w-sm md:max-w-4xl relative">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6 md:mb-8 w-full ml-4 md:ml-2">
          <img src={cinderReelsLogo} className="w-[154px] h-[135px] md:w-[266px] md:h-[234px] object-contain" />
        </div>
        <h1 className="font-bold text-[44px] md:text-[68px] tracking-wide mb-2 md:mb-4">CinderReels</h1>
        <div className="font-['Montserrat'] font-bold text-[20px] md:text-[25.5px] mb-3 md:mb-6 space-x-4 md:space-x-2">
          <span>Snap </span> <span className='md:text-[23px] text-[22px]'>•</span> <span> Share </span> <span className='md:text-[23px] text-[22px]'>•</span> <span> Vanish</span>
        </div>
        
        {/* Subtitle */}
        <p className="font-['Montserrat'] font-bold text-[20px] md:text-[25.5px] mb-4 md:mb-8">Every post vanishes at midnight</p>
        
        {/* Timer Badge */}
        <div className="flex items-center justify-center bg-[#FFC70E] w-full h-[50px] md:max-w-[418px] md:w-[418px] md:h-[69px] rounded-[25px] md:rounded-[51px] text-[18px] md:text-[24px] mb-0 md:mb-12 mx-auto px-4 md:mt-0 mt-[30px] md:px-0">
              <img src={hourGlass} className="h-[20px] w-[20px] md:h-6 md:w-[17px] mr-2 md:mr-3 flex-shrink-0" />
              <span className="font-['Montserrat'] font-semibold text-[18px] md:text-[20.4px] text-[#F03817] text-center">
                {isLoading ? 'Loading...' : `Posts vanish in: ${timeRemaining.hours} h : ${String(timeRemaining.minutes).padStart(2, '0')} m`}
              </span>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
