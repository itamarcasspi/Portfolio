import {React,useEffect} from "react";
import { linkedinFullLogo, linkedinPfp, linkedinSVG} from "../../assets";

const LinkedinPopover = ({pfp}) => {
  useEffect(() => {
    // Get the button and tooltip elements after the component mounts
    const button = document.getElementById("linkedin-popover-profile");
    const tooltip = document.getElementById("linkedin-popover-profile-content");

    // Show the tooltip on mouseover of either the button or the tooltip itself
    const handleMouseOver = () => {
      tooltip.classList.remove("opacity-0");
      tooltip.classList.add("opacity-100");
      tooltip.style.zIndex = "50";

    };

    // Hide the tooltip on mouseout of both the button and the tooltip
    const handleMouseOut = (e) => {
      // Check if the related target (element where mouse is moving to) is the popover or button
      if (
        !button.contains(e.relatedTarget) && 
        !tooltip.contains(e.relatedTarget)
      ) {
        tooltip.classList.remove("opacity-100");
        tooltip.classList.add("opacity-0");
        tooltip.style.zIndex = "0";

      }
    };

    button.addEventListener("mouseover", handleMouseOver);
    button.addEventListener("mouseout", handleMouseOut);
    // tooltip.addEventListener("mouseover", handleMouseOver);
    tooltip.addEventListener("mouseout", handleMouseOut);

    // Clean up event listeners on component unmount
    return () => {
      button.removeEventListener("mouseover", handleMouseOver);
      button.removeEventListener("mouseout", handleMouseOut);
      // tooltip.removeEventListener("mouseover", handleMouseOver);
      tooltip.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
    
  return (
    <div className="mt-4">
      <button
        id="linkedin-popover-profile"
        data-popover-target="linkedin-popover-profile-content"
        type="button"
        className="text-white font-medium rounded-lg text-sm px-1 py-2 text-center "
      >
        <img className="w-24" src={linkedinSVG} alt="" />
      </button>

      <div
        data-popover
        id="linkedin-popover-profile-content"
        role="tooltip"
        className="absolute z-0 py-1 inline-block w-64 text-sm text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 -translate-y-48 -translate-x-1/3 sm:-translate-x-1/3 lg:-translate-x-2/3  "
      >
        <div className="p-3">
          <div className="flex border-b items-center justify-between mb-2">
            <a href="#">
              <img
                className="w-10 h-10 mb-2 rounded-full"
                src={linkedinPfp}
                alt="Jese Leos"
              />
            </a>
            <div>
              <img className="w-14" src={linkedinFullLogo} alt="LinkedIn logo" />
            </div>
          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Itamar Caspi</a>
          </p>
          <p className="mb-3 text-xs font-normal">
          <a href="#" className="hover:underline">
              @itamar-ofir-caspi
            </a>
          </p>
          <p className="mb-4 text-sm">
          Computer Science Graduate | Aspiring Software Engineer | MERN stack | Unity
            

          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <p className="text-gray-500">Center District, Israel</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  300+{" "}
                </span>
                <span>connections</span>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default LinkedinPopover;
