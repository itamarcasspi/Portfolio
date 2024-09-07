import Popover from "./popovers/LinkedinPopover";
import React from "react";
import { linkedinSVG } from "../assets";
import LinkedinPopover from "./popovers/LinkedinPopover";
import GithubPopover from "./popovers/GithubPopover";
import Contact from "./contact/Contact";
const Hero = () => {
  return (
    // Hero section screen size
    <div className="fixed bg-yellow-400 z-50 items-center justify-center flex w-1/3 h-screen border-r-2 ">
      {/* content */}
      <div className="font-serif w-1/2 break-normal grid">
        <span className="text-xl w-full mb-2 font-bold">
          Hey! I'm an aspiring full stack software developer. Lets work together!
        </span>
        <span className="text-sm font-thin mb-6">
          My name is Itamar Caspi. I'm a Computer Science and Mathematics B.Sc
          graduate looking to join a development team in a growing company.
        </span>
        <Contact></Contact>
        
        <span className="flex h-auto w-full flex-row">
        <LinkedinPopover></LinkedinPopover>

        <GithubPopover></GithubPopover>

        

          
        </span>
      </div>
    </div>
  );
};

export default Hero;
