import Button from "@/utility/button";
import Image from "next/image";
import cursor from "../assets/images/cursor.png";
import message from "../assets/images/message.png";
export const Hero = () => {
  return (
    <section className="bg-[#020202] container text-white py-40">
      <div className="flex justify-center ">
        <div className="inline-flex relative">
          <h1 className="text-[2.5rem] font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center">
            Power
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
              {" "}
              Government AI
            </span>
            <br />
            With Your Data
          </h1>
          <Image src={cursor} alt="hero" className="absolute left-[-150px] top-[60px]"/>
          <Image src={message} alt="hero" className="absolute top-[50px] sm:left-[850px] mt-20"/>
        </div>
      </div>
      <p className="my-6 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
        Make the best models with the best data. Scale Data Engine powers nearly
        every major foundation model, and with Scale GenAI Platform, leverages
        your enterprise data to unlock the value of AI.
      </p>
      <div className="text-black flex justify-center">
        <Button />
        <a
          href="#"
          className="text-white text-sm relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
        >
          <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[14px]">
            <div className="py-2 px-4 rounded-md flex items-center font-medium">
              Build AI
              <span className="inline-block items-center ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
