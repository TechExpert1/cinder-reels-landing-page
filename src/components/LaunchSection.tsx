import { useState } from "react";
import messageIcon from "../assets/Message.png";
import axios from "axios";

const LaunchSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitMessage("");
    
    try {
      await axios.post(
        "https://cinderreels-production.up.railway.app/api/v1/auth/early-access-welcome",
        {
          email: email,
        },
        {
          timeout: 10000, // 10 second timeout
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      setSubmitMessage("✓ Email submitted successfully! We'll be in touch soon.");
      setEmail(""); // Clear the form
    } catch (error) {
      console.error("Error submitting email:", error);
      setSubmitMessage("✗ Error submitting email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <div className="bg-[#0E0E0E] text-white py-[40px] md:py-20 px-4 md:px-8 font-['Montserrat']">
      <div className="max-w-sm md:max-w-[1183px] mx-auto text-center">
        {/* Main Description */}
        <p className="text-[20px] justify-center text-center mx-auto md:text-[27px] md:max-w-[1000px] font-medium mb-6 md:mb-12 leading-relaxed">
          Welcome to <span className="font-bold">CinderReels</span> and join our
          community. The 24 hours App where every photo and video you post
          vanishes at the stroke of{" "}
          <span className="font-bold">midnight Pacific Time (PDT)</span>
        </p>

        {/* Launch Banner */}
        <div className="bg-[#960000] py-5 md:py-5 px-3 md:px-8 rounded-[10px] md:rounded-[16px] mb-6 md:mb-12 mx-auto max-w-sm md:max-w-[884px] ">
          <h2 className="text-[20px] md:text-[30px] font-bold text-white">
            Our App is Launching Soon!
          </h2>
        </div>

        {/* Signup Section */}
        <div className="bg-[#1E1E1E] border-[#2E2E2E] border-[1px] p-4 md:p-8 rounded-2xl max-w-sm md:max-w-[884px] mx-auto py-[25px] md:py-[50px]">
          <p className="text-[18px] md:text-[20px] mb-[20px] md:mb-[40px] md:px-[148px]">
            We'll email your download link to enable you to secure your username
            - <span className="font-bold">@handle</span>
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center rounded-lg w-full md:w-[604px] mx-auto"
          >
            <div className="relative w-full md:w-[409px]">
              <img
                src={messageIcon}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px]"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#181818] text-white pl-[44px] py-[15px] md:py-[18px] rounded-lg border border-[#2E2E2E] focus:border-[#4A90E2] focus:outline-none w-full font-['Montserrat'] font-normal text-[14px] placeholder:text-[#838383] placeholder:font-['Montserrat'] placeholder:font-normal placeholder:text-[14px]"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleButtonClick}
              disabled={isSubmitting || !email.trim()}
              className="bg-[#3498DB] py-[13px] md:py-[18px] hover:bg-white text-white hover:text-[#3498DB] w-[179px] rounded-lg font-semibold transition-colors max-h-[56px] md:h-[56px] text-[16px] font-['Montserrat'] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get My Invite"}
            </button>
          </form>
          
          {/* Status Message */}
          {submitMessage && (
            <div className={`mt-4 text-sm font-['Montserrat'] ${submitMessage.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchSection;
