import Lock from '../assets/lock.png'
import Ghost from '../assets/tiny ghost.png'
import ThinkingBubble from '../assets/thinking bubble.png';
import POM from '../assets/peace of mind.png';
import StartFresh from '../assets/start fresh everyday.png';
import POP from '../assets/private or public.png';

const Features = () => {
  const features = [
    {
      title: "24 hour Privacy Design",
      description: "CinderReels erases all your content by midnight Pacific Time, shielding you from digital footprints, privacy misuse, and unwanted exposure.",
      image: Lock
    },
    {
      title: "Zero Footprint",
      description: "Recruiters, your exes, and trolls have nothing to scroll back to. Yesterday's content is history. Every user gets a fresh start after 24 hours.",
      image: Ghost
    },
    {
      title: "Share Freely, Without Fear",
      description: "Say goodbye to anxiety. Your content vanishes at midnight Pacific Time, empowering you to share authentically, knowing it's gone with the day.",
      image: ThinkingBubble
    },
    {
      title: "Peace of Mind, Always",
      description: "We've designed CinderReels with an auto-erase shield, ensuring your files vanish before they can be misused. Share what you want, when you want.",
      image: POM
    },
    {
      title: "Start Fresh Every Day",
      description: "We created CinderReels as a space to live in the moment, share freely, and sleep easy. Built for students, professionals, and creators worldwide.",
      image: StartFresh
    },
    {
      title: "Private or Public",
      description: "Lock your circle or broadcast to everyone, either way, 24 hours is the limit. Experience social media with no FOMO tomorrow.",
      image: POP
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-[10px] px-[20px] md:px-8">
      <div className="max-w-sm md:max-w-6xl text-['Montserrat'] mx-auto">
        <h1 className="text-[24px] md:text-[40px] font-bold text-center mb-[24px] md:mb-16">
          What you'll love on Day 1 with CinderReels
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-2 md:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1E1E1E] rounded-[20px] md:py-6 md:px-6 py-[24px] px-[14px] hover:bg-[#78808A] hover:border-[#4A90E2] border-[#2E2E2E] border-[1px] transition-colors">
              <div className="mb-4">
                <img src={`${feature.image}`} className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] object-contain" />
              </div>
              <h3 className=" text-[18px] md:text-[24px] font-bold mb-4">{feature.title}</h3>
              <p className="text-[14px] md:text-[18px] font-normal leading-[32px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
