import React from "react";
import {GithubSVG,chatGituhbLink} from "../../../assets";
const MyChatBack = () => {
  return (
    <div className="flip-card-back w-full h-auto " id="chat-card-back">
          <div className="flex flex-col w-full h-auto items-center bg-white border  border-gray-200 lg:flex-row hover:bg-gray-100">
            <div className="ml-4 flex flex-col h-full justify-between p-4 leading-normal flex-grow ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                myCHAT features:
              </h5>
              <ul className="space-y-1 text-gray-500 list-disc list-inside ">
                <li>Real-time messaging using peer-to-peer connection</li>
                <li>
                  Implemented User authentication service API using JWT and
                  BCRYPT
                </li>
                <li>Chat history for each user with MongoDB</li>
              </ul>
              <h5 className="mb-2 text-lg mt-10 font-semi-bold tracking-tight text-gray-900 ">
                Technologies used:
              </h5>
              <ul className="space-y-1 text-gray-500 list-disc list-inside ">
                <li>React with Tailwind CSS for frontend development</li>
                <li>NodeJS and Express for backend development</li>
                <li>Express for the API implementation</li>

                <li>
                  MongoDB for database modeling and management
                </li>
                <li>Socket.IO API for real-time messaging</li>
              </ul>
              <span className="text-gray-500 mt-4"></span>

              <a href={chatGituhbLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <img
                className="object-cover mt-4 mb-6 w-8 h-8 ml-4 hover:cursor-pointer rounded-t-lg"
                src={GithubSVG}
                alt="Github link"
              />
              </a>
            </div>
          </div>
        </div>
  );
};

export default MyChatBack;
