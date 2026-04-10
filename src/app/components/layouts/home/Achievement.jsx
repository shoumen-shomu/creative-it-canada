import React from "react";
import Container from "../../Container";

const Achievement = () => {
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="text-center">
            <h2 className="font-inter font-bold text-[48px] text-[#1F1E1E] leading-6  mb-15">
              Showcase Of Our{" "}
              <span className="font-tri font-bold text-primary italic">
                Achievements
              </span>
            </h2>
            <div className="flex justify-between">
                <div className="">
                    <p className="font-inter font-extrabold text-[72px] text-primary">57</p>
                    <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">Clients</span>
                </div>
                <div className="">
                    <p className="font-inter font-extrabold text-[72px] text-primary">93</p>
                    <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">Projects</span>
                </div>
                <div className="">
                    <p className="font-inter font-extrabold text-[72px] text-primary">600</p>
                    <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">Employees </span>
                </div>
                <div className="">
                    <p className="font-inter font-extrabold text-[72px] text-primary">25</p>
                    <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">Awards</span>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Achievement;
