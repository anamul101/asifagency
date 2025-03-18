import Image from "next/image";
import logosaas from "../assets/images/logosaas.png"
import Menu from "../assets/icons/menu.svg"

export const Navbar = () => {
  return(
    <div className="container bg-black">
      <div className="py-4 flex items-center justify-between">
      <div className="relative">
        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
      <Image src={logosaas} alt="sass logo" className="h-12, w-12 relative"/>
      </div>
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg">
      <Menu className="text-white"/>
      </div>
      </div>
    </div>
  );
  
};
