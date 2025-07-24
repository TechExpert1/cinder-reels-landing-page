import InstantConfirmation from '../assets/instant conformation.png'
import D1A from '../assets/day one access.png'
const SignupPerks = () => {
  const signupSteps = [
    {
      title: "Instant confirmation",
      description: "Check your inbox (and spam) for a \"You're on the list!\" email.",
      image: InstantConfirmation
    },
    {
      title: "Day-one access",
      description: "We'll email your download link & reserved @handle.",
      image: D1A
    }
  ];

  return (
    <div className="bg-black text-white md:py-[0px] py-[30px] px-[20px] md:px-[50px]">
      <div className="max-w-sm md:max-w-6xl mx-auto">
        <h2 className="text-[24px] md:text-[30px] font-bold font-['Montserrat'] text-center mb-[24px] md:mb-[50px]">
          What happens after you sign up?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-[25px] md:mb-[50px] ">
          {signupSteps.map((step, index) => (
            <div key={index} className="bg-[#1E1E1E] hover:bg-[#78808A] hover:border-[#4A90E2] border-[#2E2E2E] border-[1px] rounded-[20px] py-[24px] px-[14px] md:py-8 md:px-8 transition-colors">
              <div className="mb-4"><img src={`${step.image}`} className="w-[36px] h-[36px] md:w-[44px] md:h-[44px] object-contain" /></div>
              <h3 className="text-[18px] md:text-[20px] font-bold font-['Montserrat'] mb-4">{step.title}</h3>
              <p className="font-['Montserrat'] text-[14px] md:text-[15.3px] leading-loose">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center md:max-w-[600px] mx-auto">
          <p className="text-[18px] leading-[32px] font-semibold font-['Montserrat'] md:text-[25.5px] md:leading-[50px] ">
            Share the website link with friends to double the fun when we launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPerks;
