import React from "react";
import Container from "../../Container";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <section>
        <div className="mt-25">
          <Container>
            <div className="text-center">
              <h2 className="font-inter font-bold text-[48px] text-[#1F1E1E] leading-13.5 pb-[32px]">
                Our{" "}
                <span className="font-tri font-bold text-[48px] text-primary leading-13.5 tracking-[0.2px] italic">
                  Services
                </span>
              </h2>
              <p className="w-204.25 font-inter font-normal text-base text-[#605F62] leading-6.5 tracking-[0.2px] mx-auto">
                We have designed our courses with the most demanding
                professional skills. The knowledge, experience, and expertise
                gained through the program will ensure your desired job in the
                global market.
              </p>
            </div>
            <div className="mt-7.5 p-2 border-[#D9D9D9] border rounded-[37px] w-119 flex mx-auto ">
              <div className="group py-4 px-16 bg-white text-white border-white rounded-[29px] border hover:border-primary hover:bg-primary duration-300 inline-block cursor-pointer">
                <p className="font-inter font-semibold text-[24px] text-[#000000] group-hover:text-white leading-6.5 tracking-[0.2px] ">
                  Courses
                </p>
              </div>
              <div className="group py-4 px-16 bg-white text-white border-white rounded-[29px] border hover:border-primary hover:bg-primary duration-300 inline-block cursor-pointer">
                <p className="font-inter font-semibold text-[24px] text-[#000000] group-hover:text-white leading-6.5 tracking-[0.2px] ">
                  Projects
                </p>
              </div>
            </div>
            <div className="flex gap-7.5 mt-15">
              <div className="p-7.5 bg-linear-to-r from-[#FFFFFF] to-[#FFE7E7] rounded-[20px] shadow-[0px_34px_44px_0px_rgba(0,0,0,0.02)]">
                <div className="p-4 rounded-[20px] bg-[#FFF7EB] w-28">
                  <Image
                    src="/images/serviceImgone.png"
                    alt="serviceImgone"
                    width={90}
                    height={90}
                  />
                </div>
                <h3 className="font-inter font-bold text-[32px] text-[#1F1E1E] leading-[130%] w-66.25 mt-15 mb-4">
                  Branding Identity Design
                </h3>
                <p className="font-inter font-normal text-base text-[#605F62] leading-6.5 w-[320px]">
                  We have designed our courses with the most demanding
                  professional skills.
                </p>
              </div>
              <div className="p-7.5 bg-linear-to-r from-[#FFFFFF] to-[#FFE7E7] rounded-[20px] shadow-[0px_34px_44px_0px_rgba(0,0,0,0.02)]">
                <div className="p-4 rounded-[20px] bg-[#FFF7EB] w-28">
                  <Image
                    src="/images/serviceimgtwo.png"
                    alt="serviceImgone"
                    width={90}
                    height={90}
                  />
                </div>
                <h3 className="font-inter font-bold text-[32px] text-[#1F1E1E] leading-[130%] w-66.25 mt-15 mb-4">
                  Web Application Development
                </h3>
                <p className="font-inter font-normal text-base text-[#605F62] leading-6.5 w-[320px]">
                  We have designed our courses with the most demanding
                  professional skills.
                </p>
              </div>
              <div className="p-7.5 bg-linear-to-r from-[#FFFFFF] to-[#FFE7E7] rounded-[20px] shadow-[0px_34px_44px_0px_rgba(0,0,0,0.02)]">
                <div className="p-4 rounded-[20px] bg-[#FFF7EB] w-28">
                  <Image
                    src="/images/serviceimgthree.png"
                    alt="serviceImgone"
                    width={90}
                    height={90}
                  />
                </div>
                <h3 className="font-inter font-bold text-[32px] text-[#1F1E1E] leading-[130%] w-66.25 mt-15 mb-4">
                  Social Media Marketing
                </h3>
                <p className="font-inter font-normal text-base text-[#605F62] leading-6.5 w-[320px]">
                  We have designed our courses with the most demanding
                  professional skills.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Service;
