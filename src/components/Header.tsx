
import shareIcon from '../assets/share.png';
import shareIconHover from '../assets/share-hoover.png';
import { useState } from 'react';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-20 py-[22px] pr-[80px]">
      <div className="flex justify-end">
        <button
          className="bg-[#4A90E2] hover:bg-white text-white hover:text-[#4A90E2] flex items-center justify-center gap-2 w-[179px] h-[56px] rounded-[116px]"
          onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >
          <img src={isHovered ? shareIconHover : shareIcon} className="w-4 h-4 transition-all" />
          <span className="font-['Montserrat'] font-semibold text-base">Share</span>
        </button>
      </div>
    </header>
  );
}

export default Header
