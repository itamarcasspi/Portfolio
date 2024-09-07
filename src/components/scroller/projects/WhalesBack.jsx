import React from "react";
import { GithubSVG, flyingWhalesGihubtLink, flyingWhalesItchLink, itchSVG } from "../../../assets";
const WhalesBack = () => {
  return (
    <div className="flip-card-back w-full h-auto " id="whales-card-back">
      <div className="flex flex-col w-full h-auto items-center bg-white border  border-gray-200 lg:flex-row hover:bg-gray-100">
        <div className="ml-4 flex flex-col h-full justify-between p-4 leading-normal flex-grow ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Flying-Whales features:
          </h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside ">
            <li>Multi character controls in real-time action </li>
            <li>Fully original sprites and graphics</li>
            <li>Multiple skills and actions for dynamic game feel</li>
            <li>
              Each level consists of multiple different quest that allows
              progression
            </li>
          </ul>
          <h5 className="mb-2 text-lg mt-10 font-semi-bold tracking-tight text-gray-900 ">
            Technologies used:
          </h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside ">
            <li>
              Built in <span className="font-bold">Unity</span>
            </li>
            <li>
              <span className="font-bold">C#</span> for scripts and behavioral
              development
            </li>
            <li>
              Unique task-based progressions system implemented for reusable and
              scalable development.{" "}
            </li>
          </ul>
          <span className="text-gray-500 mt-4"></span>
          <div className="flex-row flex">
            <a
              className="inline-block"
              href={flyingWhalesGihubtLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="object-cover mt-4 mb-6 w-8 h-8 ml-4 hover:cursor-pointer rounded-t-lg"
                src={GithubSVG}
                alt="Github link"
              />
            </a>
                    
            <a
              className=""
              href={flyingWhalesItchLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="object-cover mt-4 mb-6 w-8 h-8 ml-4 hover:cursor-pointer rounded-t-lg fill-blue-600 "
                src={itchSVG}
                alt="Github link"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhalesBack;
