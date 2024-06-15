"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { headerSocialIcon } from "./common/Helper";

const Header = () => {
  const [open, setOpen] = useState(true);
  const [presentVideo, setPresentVideo] = useState(0);
  const [toggleScroll, setToggleScroll] = useState(false);

  // ========================== togglebtn ==========================
  useEffect(() => {
    if (toggleScroll === true) {
      const element = document.getElementById("footer");
      element?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      const element = document.getElementById("hero");
      element?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });
  // ======================== header video ========================
  const videos = [
    "/assets/video/game-1.mp4",
    "/assets/video/game-2.mp4",
    "/assets/video/game-3.mp4",
  ];

  useEffect(() => {
    const videoElements = videos.map((_, index) =>
      document.getElementById(`video-${index}`)
    );

    const handleVideoEnded = () => {
      setPresentVideo((prev) => (prev + 1) % videos.length);
    };

    videoElements.forEach((videoElement, index) => {
      videoElement.addEventListener("ended", handleVideoEnded);
      if (index !== presentVideo) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });

    videoElements[presentVideo].play();

    return () => {
      videoElements.forEach((videoElement) => {
        videoElement.removeEventListener("ended", handleVideoEnded);
      });
    };
  }, [presentVideo, videos]);
  const setCurrentVideo = (index) => {
    setPresentVideo(index);
  };
  return (
    <div
      id="hero"
      className="lg:h-[810px] md:h-[720px] sm:h-[640px] min-[390px]:h-[600px] h-[540px] 2xl:min-h-screen overflow-x-clip lg:flex lg:flex-col relative"
    >
      <div className="bg-black opacity-70 w-full h-full absolute top-0 left-0 z-[2]"></div>
      {videos.map((videoSrc, index) => (
        <video
          key={index}
          id={`video-${index}`}
          src={videoSrc}
          muted
          autoPlay
          playsInline
          preload="auto"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            presentVideo === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div
        className={`absolute right-0 top-[25%] !z-[5] duration-300 ${
          open ? "max-lg:right-[-80px]" : "right-0"
        }`}
      >
        <div className={`relative transition-opacity ease-linear duration-300`}>
          <span
            onClick={() => setOpen(!open)}
            className="sm:w-[15px] w-2 absolute left-[-10%] sm:-left-[20%] top-[30%] h-[145px] bg-whitegrey rounded-[30px_0px_0px_30px]"
          ></span>
          <div className="flex flex-col justify-center gap-[20px] md:gap-[28px] items-center md:bg-offwhite bg-offblack w-20 h-[300px] sm:h-[330px] md:h-[368px] px-[14px] sm:px-[22px]">
            {headerSocialIcon.map((icon, index) => (
              <div
                key={index}
                className="hover:scale-125 transition-all duration-300 ease-linear"
              >
                <a href={icon.link} aria-label={icon.label} target="blank">
                  {icon.headersvg}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
      <div className="container xl:max-w-[1164px] 2xl:flex-grow flex justify-center items-center flex-col mx-auto px-3 mt-[70px] sm:mt-[100px] md:mt-[164px] 2xl:mt-0 relative !z-[3]">
        <div className="flex md:flex-col max-md:items-baseline items-center sm:gap-[13px] gap-2 justify-between h-20 absolute max-md:justify-center md:left-0 xl:left-[-10%] lg:left-[5%] max-md:bottom-[-30%] max-[340px]:bottom-[-20%] md:top-[38%] translate-y-[50%] space-y-2.5">
          {videos.map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center justify-center w-[47px] h-[8px]">
                <span
                  className={`h-[8px] rounded-[21px] transition-all duration-300 ease-in-out ${
                    index === presentVideo ? "bg-red w-[47px]" : "bg-white w-5"
                  } cursor-pointer md:rotate-90`}
                  onClick={() => setCurrentVideo(index)}
                ></span>
              </div>
            </div>
          ))}
        </div>
        <div className="!bg-gamingbtn bg-no-repeat bg-size py-[11.5px] md:px-[62.5px] sm:px-[40px] px-[35px]">
          <p className="ff_inter uppercase text-whitegrey leading-normal text-sm font-medium">
            Future of Gaming
          </p>
        </div>
        <h1 className="font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8lg xl:text-9xl ff_opensans text-whitegrey text-center mt-4 lg:mt-[10px] leading-[110%] mb-4">
          BEYOND <span className="text-red md:block">ENTERTAINMENT</span>
        </h1>
        <p className="ff_poppins font-normal text-sm sm:text-base text-whitegrey !opacity-90 max-w-[809px] text-center sm:px-5 md:px-10 lg:px-0 !leading-normal">
          Galileo Sky, founded by industry experts, is redefining the gaming
          landscape. With a blend of groundbreaking technology and immersive
          entertainment, we create world-class gaming experiences and thriving
          digital economies that captivate and inspire
        </p>
      </div>
      <div className="absolute bottom-[2%] z-[3] left-0 right-0 flex items-center justify-center cursor-pointer">
        <div
          onClick={() => setToggleScroll(!toggleScroll)}
          className="border border-red lg:p-2 p-1 inline-block lg:h-[76px] h-[50px] rounded-[55px]"
        >
          <div
            className={`${
              toggleScroll ? "translate-y-[110%]" : "translate-y-0"
            } lg:w-[27px] lg:h-[27px] w-[17px] h-[17px] rounded-full bg-red duration-300`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
