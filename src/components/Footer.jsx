import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { footerLink, socialIcons } from "./common/Helper";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    // Show SweetAlert popup
    Swal.fire({
      title: "Success!",
      text: "Email submitted successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      e.target.reset();
      setEmail("");
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div id="footer" className="bg-white md:pt-20 pt-[50px]">
      <div className="container xl:max-w-[1164px] px-3 mx-auto pb-[45px]">
        <div className="flex flex-row flex-wrap">
          <div className="lg:w-5/12 w-full">
            <Link href="/">
              <Image
                className="sm:max-w-[289px] w-full max-w-[180px]"
                width={289}
                height={53}
                src="./assets/images/svg/footer-logo.svg"
                alt="Footer Logo"
              />
            </Link>
            <p className="leading-normal lg:max-w-[406px] mt-4 text-lightblack sm:text-base text-sm font-normal ff_poppins">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire.
            </p>
            <div className="sm:mt-6 mt-4 flex gap-4">
              {socialIcons.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="border border-solid border-darkred w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition-all ease-linear duration-300"
                  >
                    <Link aria-label={obj.lable} href={obj.url}>
                      {obj.svg}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-7/12 w-full lg:pt-0 pt-8">
            <div className="flex flex-row max-sm:flex-col-reverse flex-wrap lg:justify-end">
              <div className="sm:w-3/12 w-full sm:pt-0 pt-9">
                <ul>
                  <h6 className="capitalize text-base leading-normal text-lightblack font-normal ff_poppins mb-4">
                    Quick Links
                  </h6>
                  <li className="flex flex-col sm:gap-3 gap-[10px]">
                    {footerLink.map((obj, index) => (
                      <Link
                        className="text-lightblack sm:text-base text-sm leading-normal ff_poppins hover:text-darkred transition-colors ease-linear duration-300 hover:font-medium"
                        key={index}
                        href={obj.path}
                      >
                        {obj.link}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="sm:w-7/12 w-full">
                <h6 className="capitalize text-base leading-normal text-lightblack font-normal ff_poppins mb-4">
                  Get Connected
                </h6>
                <div className="rounded-[10px] border border-solid border-grey bg-grey sm:py-[7px] py-1 pr-[7px] md:pl-[21px] pl-[7px] max-w-[347px] w-full flex justify-end mb-4">
                  <form className="flex" onSubmit={handleSubmit}>
                    <input
                      required
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      autoComplete="off"
                      placeholder="Email Here"
                      className="capitalize w-full !text-lightblack text-base leading-normal ff_poppins bg-transparent placeholder:!text-lightblack outline-none"
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button className="text-white text-base leading-normal ff_poppins font-normal sm:py-[14px] py-3 sm:px-8 px-7 rounded-lg bg-darkred hover:bg-white hover:text-darkred transition-all ease-linear duration-300">
                      Submit
                    </button>
                  </form>
                </div>
                <p className="sm:text-base text-sm font-normal text-lightblack leading-normal ff_poppins lg:max-w-[306px]">
                  Your email address is very safe with Galileo Sky. You will
                  only receive our gaming updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-solid border-lightblack opacity-15"></div>
      <p className="text-center py-6 text-lightblack opacity-70 ff_poppins sm:text-base text-xs leading-normal">
        {new Date().getFullYear()} Copyrights Galileo Sky, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
