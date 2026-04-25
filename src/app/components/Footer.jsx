"use client";
import React from "react";
import Container from "./Container";
import { SiGooglemaps } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-93 pb-10 bg-[#1F1E1E]">
      <Container>
        <div className="flex justify-between">
          <div className="space-y-7.5">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px]">
              Contact Us
            </h4>
            <div className="flex gap-4">
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
            <div className="flex gap-4">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <SiGooglemaps size={20} className="text-white" />
              </div>
              <div className="">
                <h5 className="font-tri font-bold text-[24px] text-white/70 leading-[150%] italic">
                  Head Office
                </h5>
                <p className="w-54 font-inter font-medium text-base text-white leading-[150%] pt-2">
                  Momtaz Plaza (4th Floor)House # 07 , Road # 04Dhanmondi,
                  Dhaka- 1205
                </p>
              </div>
            </div>
            <div className="flex gap-4">
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
                Branding Identity Design
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Logo Design
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                App Development
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Digital Marketing
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Search Engine Optimization
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Web Design
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px] pb-7.5">
              Popular Courses
            </h4>
            <ul className="space-y-3">
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Web Development
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Graphic Design
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Digital Marketing
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Mern Stack Development
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Motion Graphics
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Professional 3D Animation
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px] pb-7.5">
              Others
            </h4>
            <ul className="space-y-3">
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                About Us
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Our Facility
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Our Achievement
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Career Placement
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Freelancing
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Students Feedback
              </li>
              <li className="font-tri font-medium text-base text-white/70 leading-8 tracking-[0.2px]">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-[0.1px] bg-white/70 mt-20 mb-10"></div>
        <div className="flex justify-between items-center">
          <Image src="/images/footerlogo.png" width={203} height={44}/>
          <p className="font-inter font-normal text-base text-white/70 leading-[26px] tracking-[0.2px]">Copyright © 2026 Creative IT Institute. All right reserved</p>
            <Image src="/images/creativeslug.png" width={149} height={58}/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;