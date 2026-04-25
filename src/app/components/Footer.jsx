"use client";
import React from "react";
import Container from "./Container";
import { SiGooglemaps } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-15 pb-10 bg-[#1F1E1E]">
      <Container>
        <div className="lg:flex lg:justify-between text-center lg:text-left space-y-20 lg:space-y-0">
          <div className="space-y-7.5">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px]">
              Contact Us
            </h4>
            <div className="flex gap-4 justify-center lg:justify-start text-left">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <SiGooglemaps size={20} className="text-white" />
              </div>
              <div className="">
                <h5 className="font-tri font-bold text-[24px] text-white/70 leading-[150%] italic">
                  Head Office
                </h5>
                <p className="w-54 font-inter font-medium text-base text-white leading-[150%] pt-2">
                  Momtaz Plaza (4th Floor)House # 07 , Road # 04 Dhanmondi,
                  Dhaka- 1205
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start text-left ">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <SiGooglemaps size={20} className="text-white" />
              </div>
              <div className="">
                <h5 className="font-tri font-bold text-[24px] text-white/70 leading-[150%] italic">
                  Canada Office
                </h5>
                <p className="w-54 font-inter font-medium text-base text-white leading-[150%] pt-2">
                  Momtaz Plaza (4th Floor)House # 07 , Road # 04Dhanmondi,
                  Canada
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <IoIosMail size={20} className="text-white" />
              </div>
              <div className="">
                <p className="w-54 font-inter font-medium text-base text-white leading-[150%] pt-2">
                  info@creativeitinstitute.com
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px] pb-7.5">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Branding Identity Design</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Logo Design</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>App Development</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Digital Marketing</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Search Engine Optimization</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                <Link href={"/"}>Web Design</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px] pb-7.5">
              Popular Courses
            </h4>
            <ul className="space-y-3">
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                <Link href={"/"}>Web Development</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Graphic Design
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Digital Marketing
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                <Link href={"/"}>Mern Stack Development
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                <Link href={"/"}>Motion Graphics
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Professional 3D Animation
</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px] pb-7.5">
              Others
            </h4>
            <ul className="space-y-3">
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>About Us
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Our Facility
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Our Achievement
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Career Placement
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                <Link href={"/"}>Freelancing</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Students Feedback
</Link>
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                 <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-[0.1px] bg-white/70 mt-20 mb-10"></div>
        <div className="lg:flex lg:justify-between lg:items-center space-y-3 text-center">
          <div className="flex justify-center items-center">
            <Image src="/images/footerlogo.png" width={203} height={44} />
          </div>
          <p className="font-inter font-normal lg:text-base text-[14px] text-white/70 leading-6.5 tracking-[0.2px]">
            Copyright © 2026 Creative IT Institute. All right reserved
          </p>
          <div className="flex justify-center items-center">
            <Image src="/images/creativeslug.png" width={149} height={58} />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
