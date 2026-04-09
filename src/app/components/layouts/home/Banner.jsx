import React from "react";
import Container from "../../Container";
import Button from "../../Button";

const Banner = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/images/banner.png')] pt-48.25 pb-43 bg-cover bg-no-repeat bg-center">
          <Container>
            <h3 className="font-tri font-semibold text-[42px] text-[#FF7E31] leading-[120%] italic">
              The Journey of
            </h3>
            <h1 className="font-inter font-bold text-[92px] text-white leading-[100%] w-140.25 mt-2">Creativity & Innovation</h1>
            <div className="mt-25 flex gap-5">
                <Button className={"font-inter font-medium text-[18px] border border-primary hover:border-white hover:bg-white hover:text-[#CF0000] duration-300"} btnTxt={"Get Started"}/>
                <Button className={"font-inter font-medium text-[18px] border border-primary hover:border-white hover:bg-white hover:text-[#CF0000] duration-300"} btnTxt={"Explore more"}/>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
