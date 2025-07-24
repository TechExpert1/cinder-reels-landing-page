import { useState } from 'react';
import arrow from '../assets/faq arrow.png';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {question: 'Does "disappear" really mean gone?', answer: 'Yes. At midnight Pacific time, the encrypted file is wiped from our servers. There\'s no back-door archive.'},
    {question: 'Can I delete something sooner?', answer: 'Absolutely—tap the trash icon and it\'s erased instantly.'},
    {question: 'Is CinderReels free?', answer: 'The core app will always be free. We\'ll offer optional premium services later.'}
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white font-['Montserrat'] pt-[40px] md:pt-[80px] px-4 md:px-[50px]">
      <div className="max-w-sm md:max-w-6xl mx-auto">
        <h2 className="text-[24px] md:text-[34px] md:leading-[80px] font-bold text-center mb-[24px] md:mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-[16px] md:space-y-[24px]">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-[#1E1E1E] rounded-[12px] md:rounded-[22px] border-[2px] border-[#2E2E2E] overflow-hidden transition-all duration-300">
              <button onClick={() => toggleFAQ(index)} className="w-full px-[12px] md:px-[24px] py-[20px] md:py-[24px] text-left flex justify-between items-center transition-colors duration-200">
                <span className="text-[16px] md:text-[20px] font-bold pr-[10px]">{faq.question} </span>
                <div className={`transform transition-transform duration-300 ${ openIndex === index ? 'rotate-180' : '' }`}> <img src={arrow}className="w-6 h-6" /></div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${ openIndex === index ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100' }`}>
                <div className="px-[12px] md:px-[24px] pb-6 text-[14px] md:text-[15.3px] leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='border-t-[1px] border-[#3C3C3C] mt-[40px] md:mt-[60px] md:px-6'>
          <div className="text-center pb-[27px] pt-[24px] md:pb-[44px] md:pt-[30px] font-normal text-sm"> © 2025 Cinder Reels. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;