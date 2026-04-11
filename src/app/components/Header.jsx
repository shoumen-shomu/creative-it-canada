'use client';

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Container from "./Container";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Top Haeder */}
      <div className="py-1.75 bg-[#FF1E1E]">
        <Container>
          <div className="flex gap-13">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-white" />
              <p className="font-hind font-medium text-base text-white leading-6.75">
                01624888444
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <IoMail className="text-white" />
              <p className="font-hind font-medium text-base text-white leading-6.75">
                help@creativeitinstitute.com
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* Header Menu */}
      <div className="mt-6.75">
        <Container>
          <div className="flex py-10 items-center justify-between">
            <div className="">
              <Link href={"/"}>
                <Image
                  src="/images/creativelogo.png"
                  alt="creativelogo"
                  width={203}
                  height={44}
                />
              </Link>
            </div>
            <div className="">
              <ul className="flex gap-10">
                <li className="font-inter font-semibold text-[18px] text-[#342B27] leading-6 hover:text-[#CF0000] duration-500">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="font-inter font-semibold text-[18px] text-[#342B27] leading-6 hover:text-[#CF0000] duration-500">
                  <Link href={"/aboutus"}>About Us</Link>
                </li>
                <li className="font-inter font-semibold text-[18px] text-[#342B27] leading-6 hover:text-[#CF0000] duration-500">
                  <Link href={"/service"}>Service</Link>
                </li>
                <li className="font-inter font-semibold text-[18px] text-[#342B27] leading-6 hover:text-[#CF0000] duration-500">
                  <Link href={"/freelancing"}>Freelancing</Link>
                </li>
                <li className="font-inter font-semibold text-[18px] text-[#342B27] leading-6 hover:text-[#CF0000] duration-500">
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center bg-primary rounded-[50%] w-[47.14] h-[47.14] border-white border group hover:bg-white hover:border-[#CF0000] duration-300">
                <FaFacebookF className="text-white group-hover:text-[#CF0000]" />
              </div>
              <div className="flex justify-center items-center bg-primary rounded-[50%] w-[47.14] h-[47.14] border-white border group hover:bg-white hover:border-[#CF0000] duration-300">
                <FaLinkedinIn className="text-white group-hover:text-[#CF0000]" />
              </div>
              <div className="flex justify-center items-center bg-primary rounded-[50%] w-[47.14] h-[47.14]  border-white border group hover:bg-white hover:border-[#CF0000] duration-300">
                <FaTwitter className="text-white group-hover:text-[#CF0000]" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
