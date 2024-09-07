import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Contact = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <a
        className="border-2 z-40 justify-self-center text-center rounded-xl border-black hover:bg-yellow-300 w-full p-1 hover:cursor-pointer"
        onClick={handleToggle}
      >
        Contact me! 
      </a>
      {toggle &&
        createPortal(
          <div
            id="contact-modal"
            tabindex="-1"
            class="fixed backdrop-blur justify-center flex py-12 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Contacts me
                  </h3>
                  <button
                    onClick={handleToggle}
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-4 md:p-5 space-y-4">
                  <p class="text-base leading-relaxed text-black dark:text-gray-400">
                    If you feel like i'm a good fit to your company, please feel
                    free to contact me through the means below:
                  </p>
                  <p class="text-base leading-relaxed text-gray-700">
                    <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Email address
                        </dt>
                        <dd class="text-lg font-semibold">
                          itamarcasspi@gmail.com
                        </dd>
                      </div>

                      <div class="flex flex-col pt-3">
                        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Phone number
                        </dt>
                        <dd class="text-lg font-semibold">+972 054-3543778</dd>
                      </div>
                    </dl>
                  </p>
                </div>

                <div class="flex text-xs items-center  p-4 md:p-5 border-t border-gray-200 rounded-b">
                  <svg
                    class="flex-shrink-0 mr-2 w-4 h-4 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  The contacts provided above are private information. Please
                  use caution when using them.
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Contact;
