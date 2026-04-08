import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Container from "./Container";

const Header = () => {
  return (
    <header className="py-1.75 bg-red-500">
      <Container>
        <div className="flex gap-13">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-white" /> 
            <p className="font-hind font-medium text-base text-white leading-6.75">01624888444</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMail  className="text-white" /> 
            <p className="font-hind font-medium text-base text-white leading-6.75">help@creativeitinstitute.com</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
