import { useState } from 'react';
import messageIcon from '../assets/Message.png';

const LaunchSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="bg-[#0E0E0E] text-white py-10 md:py-20 px-4 md:px-8 font-['Montserrat']">
      <div className="max-w-xs md:max-w-[1183px] mx-auto text-center">
        {/* Main Description */}
        <p className="text-[16px] md:text-[32px] font-medium mb-6 md:mb-12 leading-relaxed">
          Welcome to <span className="font-bold">CinderReels</span> and join our community. The 24 hours App
          where every photo and video you post vanishes at the stroke of{' '}
          <span className="font-bold">midnight Pacific Time (PDT)</span>
        </p>
        
        {/* Launch Banner */}
        <div className="bg-[#960000] py-3 md:py-6 px-4 md:px-8 rounded-[16px] mb-6 md:mb-12 mx-auto max-w-xs md:max-w-[884px]">
          <h2 className="text-[20px] md:text-[40px] font-bold text-white">Our App is Launching Soon!</h2>
        </div>
        
        {/* Signup Section */}
        <div className="bg-[#2E2E2E] p-4 md:p-8 rounded-lg max-w-xs md:max-w-[884px] mx-auto py-[25px] md:py-[50px]">
          <p className="text-[12px] md:text-[24px] mb-[20px] md:mb-[40px]">
            <span className="text-[#FF0000] font-bold">RESERVE</span> your spot for early access and
            <br />
            lock in your <span className="font-bold">@username</span>
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center rounded-lg w-full md:w-[604px] mx-auto">
            <div className="relative w-full md:w-[409px]">
              <img src={messageIcon} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[12px] h-[12px] md:w-[24px] md:h-[24px]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#181818] text-white pl-[22px] md:pl-[44px] py-[9px] md:py-[18px] rounded-lg border border-gray-600 focus:border-[#4A90E2] focus:outline-none w-full font-['Montserrat'] font-normal text-[7px] md:text-[14px] placeholder:text-[#838383] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:text-[7px] md:placeholder:text-[14px]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#3498DB] hover:bg-white text-white hover:text-[#3498DB] w-full md:w-[179px] rounded-lg font-semibold transition-colors h-[28px] md:h-[56px] text-[8px] md:text-[16px] font-['Montserrat']"
            >
              Get My Invite
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LaunchSection;
