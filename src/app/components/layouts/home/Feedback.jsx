import React from "react";
import Container from "../../Container";
import Image from "next/image";

const Feedback = () => {
  return (
    <>
      <section>
        <div className="mt-25 bg-[#FBFBFB]">
          <Container>
            <div className="pt-25">
              <h2 className="font-inter font-bold text-[48px] text-[#1F1E1E] leading-[120%] text-center">
                Our Clients{" "}
                <span className="font-tri font-bold text-[48px] text-primary leading-[120%] italic">
                  Feedback
                </span>
              </h2>
              <div className="mt-15 flex gap-7.5">
                <div className="space-y-7.5">
                  <div className="p-6 bg-white rounded-xl border border-[#D4D4D4]">
                    <p className="font-inter font-normal text-base text-[#605F62] leading-[150%] w-66.75">
                      Creative IT is one of the top institutes for learning
                      .they teach us in a highly informative manner while also
                      providing a conducive learning environment.
                    </p>
                    <Image
                      className="pb-4 pt-6"
                      src="/images/reviewone.png"
                      alt="reviewone"
                      width={60}
                      height={60}
                    />
                    <h5 className="font-inter font-bold  text-[20px] text-[#000000] leading-[150%]">
                      Md Uzzal Hossain
                    </h5>
                    <p className="font-inter font-normal text-[18px] text-[#7E7E7E] leading-[150%]">
                      Student of Web Development
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl border border-[#D4D4D4]">
                    <p className="font-inter font-normal text-base text-[#605F62] leading-[150%] w-66.75">
                      Creative IT is one of best IT Institute in Bangladesh. As
                      a student of CIT, i must say teachers here are realy very
                      dedicated and no one can be left out without great results
                      snd opportunities in freelancing career from Creative IT.
                    </p>
                    <Image
                      className="pb-4 pt-6"
                      src="/images/reviewtwo.png"
                      alt="reviewone"
                      width={60}
                      height={60}
                    />
                    <h5 className="font-inter font-bold  text-[20px] text-[#000000] leading-[150%]">
                      Fahmida Ashrafi Oishi
                    </h5>
                    <p className="font-inter font-normal text-[18px] text-[#7E7E7E] leading-[150%]">
                      Student of Web Development
                    </p>
                  </div>
                </div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Feedback;
