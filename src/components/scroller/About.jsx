import React from "react";
import Technologies from "../Technologies/Technologies";

const About = () => {
  return (
    <div className="grid pl-4 pr-14 ml-10 min-h-screen">
      <span className="text-2xl w-full mb-4 font-bold  ">About me</span>
      <span className="font-thin w-full mb-8 ">
        I'm a Computer Science and Mathematics B.Sc graduate seeking a junior
        fullstack and backend developer roles in a forward-thinking
        organization. Self-driven and highly motivated, eager to contribute
        within a collaborative and innovative working environment. Fast learner
        and committed to continuous learning and professional growth in the
        software world.
      </span>
      <span className="font-semibold mt-16 w-full mb-4"> Technical skills</span>
      <span className="font-thin w-full mb-8 grid">
        <span className="mb-8">
          In my recent projects i have been working a lot with the following
          technologies:{" "}
        </span>
        {/* <span className="font-normal">* MongoDB</span> <span className="font-normal">Express</span> for my RESTful API,   */}

        <ul className="space-y-4 text-left ">
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="font-normal shrink-0 w-20">MongoDB-</span>{" "}
            <span> For flexible and easily implemented NoSQL database.</span>
          </li>

          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="font-normal shrink-0 w-20 ">Express- </span>{" "}
            <span>For implementing RESTful API's.</span>
          </li>
          <li className="flex items-center  space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 justify-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>

            <span className="font-normal shrink-0 w-20">React- </span>
            <span className="">
              {" "}
              Using a combination of React and Tailwind for fast and
              professional application development.
            </span>
          </li>

          <li className="flex items-center  space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 justify-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>

            <span className="font-normal shrink-0 w-20">NodeJS- </span>
            <span className=""> For all server-side development.</span>
          </li>
          <li className="flex items-center  space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-blue-500 justify-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>

            <span className="font-normal shrink-0 w-20">Socket.IO- </span>
            <span className=""> For real-time client-to-client communication.</span>
          </li>
        </ul>
      </span>
      <Technologies></Technologies>
    </div>
  );
};

export default About;
