"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "./common/Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [nav, setNav] = useState(true);

  useEffect(() => {
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }, [nav]);

  return (
    <div className="bg-blur shadow-[0px_7px_10.9px_0px_#0000002E] relative z-10">
      <div className="container mx-auto xl:max-w-[1164px] px-4 lg:px-3">
        <ul className="flex items-center justify-center gap-[24px] max-lg:hidden">
          <li className="relative navdrop">
            <Link
              onClick={() => setNav(!nav)}
              href="#games"
              className="text-whitegrey ff_poppins leading-normal text-base font-semibold flex items-center gap-1"
            >
              Games
              <span
                className={`${isOpen ? "rotate-180" : ""}`}
                onClick={toggleDropdown}
              >
                <Arrow />
              </span>
            </Link>
            {isOpen && (
              <div className="flex flex-col whitespace-nowrap bg-white py-5 px-4 text-black gap-3 absolute z-[1] top-10 font-medium text-base rounded-lg">
                <a href="#">Game 1</a>
                <a href="#">Game 2</a>
                <a href="#">Game 3</a>
              </div>
            )}
          </li>
          <li>
            <Link
              onClick={() => setNav(!nav)}
              href="#ai-platform"
              className="text-whitegrey ff_poppins leading-normal text-base font-semibold after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
            >
              AI-Platform
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/assets/images/svg/nav-logo.svg"
                alt="navlogo"
                width={372}
                height={71}
                className="w-[372px] h-[71px] mx-4"
              />
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(!nav)}
              href="#team"
              className="text-whitegrey ff_poppins leading-normal text-base font-semibold after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(!nav)}
              href="#careers"
              className="text-whitegrey ff_poppins leading-normal text-base font-semibold after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
            >
              Careers
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center lg:hidden">
          <Link href="/">
            <Image
              src="/assets/images/svg/nav-logo.svg"
              alt="navlogo"
              width={372}
              height={71}
              className="md:w-[300px] sm:w-[250px] w-[200px] h-[71px]"
            />
          </Link>
          <ul
            className={`${
              nav ? "left-[-100%]" : "left-0 !z-50"
            } flex items-center gap-[24px] max-lg:bg-black lg:flex-row max-lg:justify-center max-lg:flex-col top-0 max-lg:min-h-screen max-lg:w-full max-lg:fixed !z-30 lg:pl-[60px] xl:pl-[100px] transition-all duration-300 ease-linear`}
          >
            <li className="relative navdrop">
              <Link
                onClick={() => setNav(!nav)}
                href="#games"
                className="text-whitegrey ff_poppins leading-normal text-base font-semibold flex items-center gap-1 after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
              >
                Games <Arrow />
              </Link>
              {/* <Dropdown /> */}
            </li>
            <li>
              <Link
                onClick={() => setNav(!nav)}
                href="#ai-platform"
                className="text-whitegrey ff_poppins leading-normal text-base font-semibold after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
              >
                AI-Platform
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNav(!nav)}
                href="#team"
                className="text-whitegrey ff_poppins leading-normal text-base font-semibold after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNav(!nav)}
                href="#careers"
                className="text-whitegrey ff_poppins leading-normal text-base font-semibold after:h-[2px] after:w-[0] hover:after:w-full after:bg-whitegrey after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] transition-all duration-300 ease-linear"
              >
                Careers
              </Link>
            </li>
          </ul>
          <div className="flex items-center lg:hidden cursor-pointer">
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden flex w-[40px] h-[26px] justify-between items-center flex-col !z-50 relative"
            >
              <span
                className={`${
                  !nav && "rotate-[50deg] translate-y-[22px]"
                } bg-white h-[4px] w-full rounded-[10px] transition-all ease-linear duration-300`}
              ></span>
              <span
                className={`${
                  !nav && "hidden"
                } bg-white h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
              ></span>
              <span
                className={`${
                  !nav && "rotate-[-50deg] translate-y-[10%]"
                } bg-white h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
