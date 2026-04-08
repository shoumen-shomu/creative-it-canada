import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Container from "./Container";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
      <div className="mt-6.75">
        <Container>
          <div className="flex py-10 items-center justify-between">
            <div className="">
              <Image
                src="/images/creativelogo.png"
                alt="creativelogo"
                width={203}
                height={44}
              />
            </div>
            <div className="">
              <ul className="flex gap-10">
                <li>Home</li>
                <li>About us</li>
                <li>Service</li>
                <li>Freelancing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center bg-primary rounded-[50%] w-[47.14] h-[47.14]">
                <FaFacebookF />
              </div>
              <div className="flex justify-center items-center bg-primary rounded-[50%] w-[47.14] h-[47.14]">
                <FaLinkedinIn />
              </div>
              <div className="flex justify-center items-center bg-primary rounded-[50%] w-[47.14] h-[47.14]">
                <FaTwitter />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
