"use client";
import React from "react";
import Container from "../../Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });
  return (
    <>
      <section className="mt-25">
        <Container>
          <div className="text-center">
            <h2 className="font-inter font-bold lg:text-[48px] text-[30px] text-[#1F1E1E] leading-6 lg:mb-15 mb-10">
              Showcase Of Our{" "}
              <span className="font-tri font-bold text-primary italic">
                Achievements
              </span>
            </h2>
            <div className="lg:flex justify-between">
              <div className="lg:flex lg:flex-col items-center">
                <p
                  ref={ref}
                  className="font-inter font-extrabold lg:text-[72px] text-[52px] text-primary tabular-nums"
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={57}
                      duration={4.5}
                      decimals={0}
                      suffix=""
                    />
                  ) : (
                    "0"
                  )}
                </p>
                <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">
                  Clients
                </span>
              </div>
              <div className="flex flex-col items-center">
                <p
                  ref={ref}
                  className="font-inter font-extrabold lg:text-[72px] text-[52px] text-primary tabular-nums"
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={93}
                      duration={4.5}
                      decimals={0}
                      suffix=""
                    />
                  ) : (
                    "0"
                  )}
                </p>
                <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">
                  Projects
                </span>
              </div>
             <div className="flex flex-col items-center">
                <p
                  ref={ref}
                  className="font-inter font-extrabold lg:text-[72px] text-[52px] text-primary tabular-nums"
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={600}
                      duration={4.5}
                      decimals={0}
                      suffix=""
                    />
                  ) : (
                    "0"
                  )}
                </p>
                <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">
                  Employees 
                </span>
              </div>
              <div className="flex flex-col items-center">
                <p
                  ref={ref}
                  className="font-inter font-extrabold lg:text-[72px] text-[52px] text-primary tabular-nums"
                >
                  {inView ? (
                    <CountUp
                      start={0}
                      end={25}
                      duration={4.5}
                      decimals={0}
                      suffix=""
                    />
                  ) : (
                    "0"
                  )}
                </p>
                <span className="font-inter font-medium text-[24px] text-[#000000] leading-6">
                  Awards
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Achievement;
