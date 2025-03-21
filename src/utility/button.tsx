import React from "react";
import Arrow from "../assets/icons/arrow.svg";

export default function button() {
  return (
      <button
        className="text-sm relative bg-white focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
      >
        <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
          <div className="bg-white py-2 px-4 rounded-md flex items-center font-medium" style={{
            background: 'white'
          }}>
            Book a Demo
            <span className="inline-block items-center ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
              →
            </span>
          </div>
        </div>
      </button>
  );
}
