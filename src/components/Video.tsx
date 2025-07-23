import { useRef, useState, useEffect } from 'react';
const Video = () => {
      const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showThumbnail, setShowThumbnail] = useState(true);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        let timeout: number;
        if (isPlaying) {timeout = setTimeout(() => {setShowButton(false);}, 4000);
        } else { setShowButton(true); }
        return () => clearTimeout(timeout);}, [isPlaying]);

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                setShowThumbnail(false);
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };
    return (
        <div className="flex items-center justify-center relative bg-black min-h-screen  md:pb-[40px] px-[20px] md:px-[100px]">
            <video ref={videoRef} className="relative md:w-full h-full object-cover z-0 rounded-[8.3px] md:rounded-3xl" loop poster="/src/assets/thumbnail.png" onEnded={() => { setIsPlaying(false); setShowThumbnail(true); }} /*playsInline*/>
              <source src="\src\assets\CinderReels Holding page video.mp4" type="video/mp4"/> ur browser does not support the video tag  
            </video>  

            <button onClick={handlePlayClick} className={`h-[33px] w-[33px] md:h-[80px] md:w-[80px] flex items-center justify-center absolute rounded-full bg-opacity-50 bg-black hover:bg-opacity-30 transition-all z-10 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {!isPlaying ? (
                <div className="w-0 h-0 border-l-[10px] md:border-l-[20px] border-l-white border-t-[6px] md:border-t-[12px] border-t-transparent border-b-[6px] md:border-b-[12px] border-b-transparent ml-1"></div>
              ) : (
                <div className="flex gap-1">
                  <div className="w-[3px] h-[10px] md:w-[6px] md:h-[20px] bg-white"></div>
                  <div className="w-[3px] h-[10px] md:w-[6px] md:h-[20px] bg-white"></div>
                </div>
              )}
            </button>
        </div>

    );
};
export default Video;
