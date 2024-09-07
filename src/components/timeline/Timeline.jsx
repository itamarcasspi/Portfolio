import React from "react";
//group-hover:animate-grow transform transition-transform hover:scale-110 animation

const Timeline = () => {
  return (
    <div>
      <ol className="relative border-s border-gray-300">
        <li className="mb-10 ms-4 group ">
          <div className="absolute w-3 h-3 bg-gray-300 group-hover:bg-blue-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ">
            October 2023 - 2024 (Ongoing), Israel
          </time>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          Active Reserve Duty Soldier
          </h4>
          <h3 className="mb-4">
            Israel Defense Force
          </h3>
          <ul className="list-disc mb-4 ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="mb-2">Serving as an infantry soldier in active combat, demonstrating great discipline, concentration and commitment to any task on hands.</li>
            <li className="mb-2">Participated in and led missions in high-pressure environments, enhancing strategic planning and with a large focus
            teamwork.</li>
          </ul>
        </li>
        <li className="mb-10 ms-4 group ">
          <div className="absolute w-3 h-3 bg-gray-300 group-hover:bg-blue-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ">
            March 2020 - August 2023, Israel
          </time>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          Bachelor Degree
          </h4>
          <h3 className="mb-4">
            Ariel University
          </h3>
          <ul className="list-disc mb-4 ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="mb-2">Dual major degree in <span className=" text-black ">Computer Science and Mathematics</span>.</li>
            
            
          </ul>
        </li>
        <li className="mb-10 ms-4 group">
          <div className="absolute w-3 h-3 bg-gray-300 group-hover:bg-blue-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2018 - September 2019, Petah Tikva
          </time>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          Insurance Sales Agent
          </h4>
          <h3 className="mb-4">
            IDI Insurance
          </h3>
          <ul className="list-disc mb-4 ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="mb-2">High communication skills for both interacting with costumers and working in a tightly knitted team.</li>
            <li className="mb-2">Responsible for mentoring new recruits both socially and professionally in a large and established team.</li>
            <li className="mb-2">Recieved company's Vice President customer satisfaction award. </li>
            
          </ul>
        </li>

        <li className="mb-10 ms-4 group">
          <div className="absolute w-3 h-3 bg-gray-300 group-hover:bg-blue-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2014 - November 2017, Israel
          </time>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          First Sergeant
          </h4>
          <h3 className="mb-4">
            Israel Defense Force, Givaty Brigade
          </h3>
          <ul className="list-disc mb-4 ml-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="mb-2"> Served as a Platoon Sergeant, demonstrating exceptional leadership, discipline, and commitment in managing a platoon.</li>
            <li className="mb-2">Position requires maximum performance in a high pressure and around the clock environment.</li>
            <li className="mb-2">Responsible for over 70 soldiers personal and professional well being, both in working environment and home. </li>
            
          </ul>
        </li>
        
      </ol>
    </div>
  );
};

export default Timeline;
