import React from "react";
import Container from "../../Container";
import Image from "next/image";

const Companies = () => {
  return (
    <>
      <section className="mt-25 mb-20 px-2 lg:px-0">
        <Container>
          <div className="text-center">
            <h2 className="font-tri font-bold lg:text-[48px] text-[30px] text-primary leading-[150%] italic">
              700+ Companies
            </h2>
            <p className="font-inter font-normal lg:text-[32px] text-[20px] text-[#1F1E1E] leading-[150%] tracking-[0.2px]">
              Are Connected to Us
            </p>
          </div>
          <div className="mt-14.5 p-2 border-[#D9D9D9] border rounded-[37px] flex lg:w-200 mx-auto items-center">
            <div className="group py-4 lg:px-16 px-3 bg-white rounded-[29px] hover:bg-primary duration-300 cursor-pointer transition-all">
              <p className="font-inter font-semibold lg:text-[24px] text-base text-[#000000] group-hover:text-white leading-tight tracking-[0.2px] whitespace-nowrap">
                Working with
              </p>
            </div>

            <div className="group py-4 lg:px-16 px-3 bg-white rounded-[29px] hover:bg-primary duration-300 cursor-pointer transition-all">
              <p className="font-inter font-semibold lg:text-[24px] text-base text-[#000000] group-hover:text-white leading-tight tracking-[0.2px] whitespace-nowrap">
                Members of
              </p>
            </div>

            <div className="group py-4 lg:px-16 px-3 bg-white rounded-[29px] hover:bg-primary duration-300 cursor-pointer transition-all">
              <p className="font-inter font-semibold lg:text-[24px] text-base text-[#000000] group-hover:text-white leading-tight tracking-[0.2px] whitespace-nowrap">
                Our Concerns
              </p>
            </div>
          </div>
          <Container>
            <div className="lg:mt-25 mt-15">
              <Image src="/images/allinstitute.png" alt="allinstitute" width={1313} height={425}/>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Companies;
