"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function InfiniteCarouselComponent() {
  return (
    <main>
      <div className="mx-20  ">
      <div className="flex justify-center items-center ">
          <Marquee
            gradient
            pauseOnHover={false} 
            className="h-[100px]  overflow-hidden grid "
          >
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../4.jpg" className="w-20  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../5.jpg" className="w-20  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../6.jpg" className="w-20 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../7.jpg" className="w-20 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../8.jpg" className="w-20 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../11.jpg" className="w-20 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../12.jpg" className="w-20 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../13.jpg" className="w-20 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../9.jpg" className="w-20 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../14.jpg" className="w-20 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../11.jpg" className="w-20 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../4.jpg" className="w-20 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../8.jpg" className="w-20 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src="../7.jpg" className="w-20 " alt="" />
            </div>
          </Marquee>
      </div>
      </div>
    </main>
  );
}
