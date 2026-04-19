'use client';
import React from 'react'
import Container from './Container';
import { SiGooglemaps } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (

    <footer className='pt-93 pb-10 bg-[#1F1E1E]'>
      <Container>
        <div className="flex">
          <div className="space-y-7.5">
            <h4 className='font-inter font-bold text-[21px] text-white leading-8.25 tracking-[0.2px] '>Contact Us</h4>
            <div className="flex gap-4">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <SiGooglemaps size={20} className='text-white' /> 
              </div>
              <div className="">
                  <h5 className='font-tri font-bold text-[24px] text-white/70 leading-[150%] italic'>Head Office</h5>
                  <p className='w-54 font-inter font-medium text-base text-white leading-[150%] pt-2'>Momtaz Plaza (4th Floor)House # 07 , Road # 04Dhanmondi, Dhaka- 1205</p>
                </div>
            </div>
            <div className="flex gap-4">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <SiGooglemaps size={20} className='text-white' /> 
              </div>
              <div className="">
                  <h5 className='font-tri font-bold text-[24px] text-white/70 leading-[150%] italic'>Head Office</h5>
                  <p className='w-54 font-inter font-medium text-base text-white leading-[150%] pt-2'>Momtaz Plaza (4th Floor)House # 07 , Road # 04Dhanmondi, Dhaka- 1205</p>
                </div>
            </div>
            <div className="flex gap-4">
              <div className="w-9.25 h-9.25 flex justify-center items-center bg-[#695C49] rounded-[50%] ">
                <IoIosMail  size={20} className='text-white' /> 
              </div>
              <div className="">
                  <p className='w-[216px] font-inter font-medium text-base text-white leading-[150%] pt-2'>info@creativeitinstitute.com</p>
                </div>
            </div>
          </div>
        </div>
      </Container>

    </footer>
    
  )
}

export default Footer