import React from "react";
import Container from "../../Container";
import Button from "../../Button";

const Banner = () => {
  return (
    <>
      <section className="px-2 lg:px-0">
        <div className="bg-[url('/images/banner.png')] pt-48.25 pb-43 bg-cover bg-no-repeat bg-center rounded-2xl lg:mx-30.5 ">
          <Container className={"lg:px-0 px-2"}>
            <h3 className="font-tri font-semibold lg:text-[42px] text-[30px] text-[#FF7E31] leading-[120%] italic">
              The Journey of
            </h3>
            <h1 className="font-inter font-bold lg:text-[92px] text-[62px] text-white leading-[100%] lg:w-140.25 w-full mt-2">Creativity & Innovation</h1>
            <div className="lg:mt-25 mt-15 flex gap-5">
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
