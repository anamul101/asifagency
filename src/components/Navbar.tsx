import Image from "next/image";
import logosaas from "../assets/images/logosaas.png"
import Menu from "../assets/icons/menu.svg"

export const Navbar = () => {
  return(
    <div className="bg-black">
        <div className="px-4">
      <div className="py-4 flex items-center justify-between">
      <div className="relative">
        <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
      <Image src={logosaas} alt="sass logo" className="h-12, w-12 relative"/>
      </div>
      <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
      <Menu className="text-white"/>
      </div>
      <nav className="gap-6 items-center hidden sm:flex">
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transtion">services</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transtion">product</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transtion">About</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transtion">projects</a>
        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transtion">testimonial</a>
        <button className="bg-white py-2 px-4 rounded-md">get in touch</button>
      </nav>
      </div>
    </div>
    </div>
  );
  
};
