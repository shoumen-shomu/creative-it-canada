import React from "react";
import Container from "../../Container";
import Button from "../../Button";
import Image from "next/image";

const Newslatter = () => {
  return (
    <>
  <section className="px-2 lg:px-0 mb-25">
        <Container>
          <div className="lg:p-25 p-10 items-center bg-[#FFF7EB] rounded-[48px] flex justify-between">
            <div className="">
              <h2 className="font-inter font-bold lg:text-[60px] text-[30px] text-[#000000] leading-[110%] tracking-[0.2px]">
                Get in Touch <br />
                <span className="font-tri font-bold lg:text-[60px] text-[30px] text-primary leading-[110%] tracking-[0.2px] italic">
                  with Us!
                </span>
              </h2>
              <p className="font-inter font-normal text-base text-[#4D4541] leading-[150%] tracking-[0.2px] lg:w-147.25 w-full pt-7.5 pb-15">
                We believe all of our students are part of the Creative IT
                family. We consider your comments with utmost importance to
                improve our services.
              </p>
              <div className="flex lg:gap-5 gap-1">
                <Button
                  className={
                    "font-inter font-medium text-[18px] border border-primary hover:border-white hover:bg-white hover:text-[#CF0000] duration-300 shrink-0"
                  }
                  btnTxt={"Get Started"}
                />
                <Button
                  className={
                    "font-inter font-medium text-[18px] border border-primary hover:border-white hover:bg-white hover:text-[#CF0000] duration-300 shrink-0"
                  }
                  btnTxt={"Explore more"}
                />
              </div>
            </div>
            <div className="">
              <Image
                src="/images/newsletterImg.png"
                alt="newsletterImg"
                width={284}
                height={283}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Newslatter;
