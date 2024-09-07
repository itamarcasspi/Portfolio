import { React, useEffect } from "react";
import {
  githubFollowersLink,
  githubFollowingLink,
  githubFullLogo,
  githubInnerLogo,
  githubProfileLink,
  githubProfilePicture,
  organizationLogo,
  githubOrganizationLink,
} from "../../assets";

const GithubPopover = ({ pfp }) => {
  useEffect(() => {
    // Get the button and tooltip elements after the component mounts
    const button = document.getElementById("github-popover-profile");
    const tooltip = document.getElementById("github-popover-profile-content");

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
        id="github-popover-profile"
        data-popover-target="github-popover-profile-content"
        type="button"
        className="text-white font-medium rounded-lg text-sm px-1 py-4 text-center "
      >
        <img className="w-20" src={githubFullLogo} alt="" />
      </button>

      <div
        data-popover
        id="github-popover-profile-content"
        role="tooltip"
        className="absolute z-0 inline-block w-64 text-sm text-black transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 -translate-y-48 -translate-x-1/3 sm:-translate-x-1/3 lg:-translate-x-2/3  "
      >
        <div className="p-3">
          <div className="flex border-b items-center justify-between mb-2">
            <a
              href={githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-9 h-9 rounded-full"
                src={githubProfilePicture}
                alt="Github profile picture"
              />
            </a>
            <div>
              <img
                className="w-12 "
                src={githubInnerLogo}
                alt="LinkedIn logo"
              />
            </div>
          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a
              href={githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Itamar Caspi
            </a>
          </p>
          <p className="mb-3 text-xs font-normal">
            <a
              href={githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @itamarcasspi
            </a>
          </p>
          <p className="mb-4 text-sm font-semiold ">
            Organizations
            <a
              href={githubOrganizationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-5 mt-2 h-5 rounded-md"
                src={organizationLogo}
                alt="Flying whales organization"
              />
            </a>
          </p>
          <ul class="flex text-sm ">
            <li class="me-2">
              <a
                href={githubFollowersLink}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline"
              >
                <span class="font-semibold text-gray-900 dark:text-white">
                  10
                </span>
                <span> followers · </span>
              </a>
            </li>
            <li>
              <a
                href={githubFollowingLink}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline"
              >
                <span class="font-semibold text-gray-900 dark:text-white">
                  11
                </span>
                <span> following</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GithubPopover;
