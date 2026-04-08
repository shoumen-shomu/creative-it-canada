import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Container from "./Container";

const Header = () => {
  return (
    <header className="py-1.75 bg-red-500">
      <Container>
        <div className="">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-white" />
            <p className="text-white">01624888444</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
