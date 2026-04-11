import React from "react";
import Container from "../../Container";

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
          </Container>
        </div>
      </section>
    </>
  );
};

export default Service;
