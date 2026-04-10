"use client";
import React from "react";
import Container from "../../Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // একবারই এনিমেশন হবে
    threshold: 0.5, // ৫০% দেখা গেলে শুরু হবে
  });
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
              <div className="flex flex-col items-center">
                <p
                  ref={ref}
                  className="font-inter font-extrabold text-[72px] text-primary tabular-nums"
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
                  className="font-inter font-extrabold text-[72px] text-primary tabular-nums"
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
                  className="font-inter font-extrabold text-[72px] text-primary tabular-nums"
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
                  className="font-inter font-extrabold text-[72px] text-primary tabular-nums"
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
