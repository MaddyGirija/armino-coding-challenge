import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Page = () => {

  // Smiley swing
  useEffect(() => {
    const image = document.getElementById("pendulum-image");
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.set(image, { transformOrigin: "center", rotation: -35 });
    tl.to(image, {
      rotation: 25,
      duration: 2,
      ease: "power1.inOut",
    });

    tl.play();
  }, []);

  // Lady hover up and down while scrolling

  return (
    <>
      <div className="block relative mt-[5rem] md:mt-0">
        <div className="relative w-full top-0 left-0 bg-[#88b2c4]">
          <div className="relative md:pb-[75%] pb-[75%]">
            <div className="top-0 left-0 h-full w-full absolute">
              <div className="flex flex-col initial items-center justify-center">
                <div className="md:top-[7.5vw] top-0 md:w-[6vw] w-[4rem] md:h-[6vw] h-[4rem] opacity-100 left-[50%] absolute -translate-x-2/4 -translate-y-2/4 z-10">
                  <img
                    src="https://chungiyoo.com/img/faces/smile%2002.svg"
                    alt="Smile"
                    id="pendulum-image"
                  />
                </div>
                <div className="top-0 left-0 absolute bg-[#f3eee8] min-h-[60vw] md:top-[50vw] w-full contents"></div>
                <div className="rounded-t-[50%] absolute top-0 left-0 leading-[0] w-full h-[100vw] bg-[#f3eee8] content-none"></div>
                <img
                  src="https://chungiyoo.com/img/contact-title.svg"
                  alt="Contact Title"
                  className="absolute z-10 top-0 md:top-0 md:mt-[3.75vw] md:px-[11vw] px-[6vw] py-0 w-full h-full pt-[5rem] md:pt-0"
                />
                <div className="opacity-100 pt-[44vw] md:pt-[30vw] px-4 relative w-full h-full align-middle border-none md:max-w-[41.66667%] md:shrink-0 md:grow-0 md:basis-[41.66667%] max-w-[50%] shrink-0 grow-0 basis=[50%]">
                  <img
                    src="https://images.ctfassets.net/8b1jz4cf6kyy/DFViCTj7kZvz7vKa9MXPi/05563fe4ae894a10925311a6e6bc2a81/Swimming.svg?w=640&fl=progressive&q=92"
                    alt="Picture of lady"
                    className="border-none align-middle w-full h-full"
                  />
                </div>
                <div className="z-10 md:px-0 md:mb-0 mb-4 px-8 pt-4 relative md:text-base text-[10px]">
                  <p className="text-center m-0 p-0 md:leading-5 leading-3">
                    With passionate creatives
                    <br className="" />
                    striving to create uniqueness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
