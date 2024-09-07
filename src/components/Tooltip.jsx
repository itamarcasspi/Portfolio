import {React , useEffect} from "react";
import { tooltipSVG } from "../assets";

const Tooltip = () => {
    useEffect(() => {
        // Get the button and tooltip elements after the component mounts
        const button = document.getElementById("tooltip-btn");
        const tooltip = document.getElementById("tooltip-content");
    
        // Show the tooltip on mouseover
        const handleMouseOver = () => {
          tooltip.classList.remove("opacity-0");
          tooltip.classList.add("opacity-100");
        };
    
        // Hide the tooltip on mouseout
        const handleMouseOut = () => {
          tooltip.classList.remove("opacity-100");
          tooltip.classList.add("opacity-0");
        };
    
        button.addEventListener("mouseover", handleMouseOver);
        button.addEventListener("mouseout", handleMouseOut);
    
        // Clean up event listeners on component unmount
        return () => {
          button.removeEventListener("mouseover", handleMouseOver);
          button.removeEventListener("mouseout", handleMouseOut);
        };
      }, []); // Empty dependency array means this runs once after the initial render
    
  
  return (
    <div className="right-0">
      <button
        id="tooltip-btn"
        type="button"
        className="ml-4 right-0 focus:ring-1 bg-blue-500 text-white  hover:bg-blue-400 rounded-full focus:outline-none focus:ring-blue-300 font-medium text-sm px-2"
      >
        i
      </button>

      <div
        id="tooltip-content"
        role="tooltip"
        className="absolute right-0 -translate-x-1/4 z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0"
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
          <h3 className="font-semibold text-gray-900 ">
            Project links
          </h3>
        </div>
        <div className="px-3 py-2">
          <p>Both projects cards have their Github links inside, don't forget to check them out!</p>
        </div>
        <div data-popper-arrow></div>
      </div>
      </div>
  );
};

export default Tooltip;
