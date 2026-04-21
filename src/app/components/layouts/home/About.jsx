import React from "react";
import Container from "../../Container";
import Button from "../../Button";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section>
        <div className="lg:w-360 w-full bg-[#F7FCE7] rounded-3xl pt-9.5 pb-15 mt-25 mx-auto">
          <Container>
            <div className=" lg:flex block lg:justify-between items-center">
              <div className="">
                <p className="font-tri font-bold lg:text-[32px] text-[22px] text-primary leading-[120%] italic">
                  We started back in 2008.
                </p>
                <h2 className="font-inter font-bold lg:text-[40px] text-[20px] text-[#342B27] leading-[120%] lg:w-160.75 w-100 pt-2 lg:pb-7.5 pb-3">
                  Since then, we have been travelling towards one goal creating
                  a supreme experience for our clients.
                </h2>
                <p className="font-inter font-normal lg:text-base text-[14px] text-[#605F62] leading-6.5 lg:w-160.75 lg-100">
                  We have designed our courses with the most demanding
                  professional skills. The knowledge, experience, and expertise
                  gained through the program will ensure your desired job in the
                  global market.
                </p>
                <div className="lg:mt-15 mt-5 flex gap-5">
                  <Button
                    className={
                      "font-inter font-medium text-[18px] border border-primary hover:border-white hover:bg-white hover:text-[#CF0000] duration-300"
                    }
                    btnTxt={"Get Started"}
                  />
                  <Button
                    className={
                      "font-inter font-medium text-[18px] border border-primary hover:border-white hover:bg-white hover:text-[#CF0000] duration-300"
                    }
                    btnTxt={"Explore more"}
                  />
                </div>
              </div>
              <div className="">
                <Image src="/images/aboutImg.png" alt="aboutImg" width={638} height={610} />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
