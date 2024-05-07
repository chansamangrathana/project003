import React from "react";
import Home from "./home/page";
import CarouselComponent from "@/component/partner/CarouselComponent";
import CardComponent from "@/component/card/CardComponent";
import ButtonComponent from "@/component/card/ButtonComponent";

export default function HomePage() {
  return (
    <main >
      <section className="  bg-no-repeat bg-[url('https://i.pinimg.com/564x/3b/99/34/3b9934f8e72b853589c175b71a1eee64.jpg')] bg-slate-500 bg-blend-multiply h-fit bg-cover  ">
        <ul className=" grid grid-cols-1 gap-4 lg:grid-cols-2 h-[550px]">
          <div className="mb-10 text-center px-4 mx-auto py-24 lg:py-56 ">
            <h1 className="mb-4 text-4xl font-extrabold text-white">
              "Unlock Your Beauty Trends"
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              "Embark on a transformative beauty journey with our comprehensive
              collection of cosmetic products, designed to enhance your natural
              "
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="/home"
                className=" inline-flex justify-center hover:text-gray-900 items-center py-2 px-2 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-pink-300 focus:ring-4 focus:ring-gray-400"
              >
                Our Products
                {
                  // <svg
                  //   className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  //   aria-hidden="true"
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   fill="none"
                  //   viewBox="0 0 14 10"
                  // >
                  //   <path
                  //     stroke="currentColor"
                  //     strokeLinecap="round"
                  //     strokeLinejoin="round"
                  //     strokeWidth="2"
                  //     d="M1 5h12m0 0L9 1m4 4L9 9"
                  //   />
                  // </svg>
                }
              </a>
              {
                <a
                  href="#"
                  className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-pink-300 focus:ring-4 focus:ring-gray-400"
                >
                  Learn more
                </a>
              }
            </div>
          </div>
        </ul>
        
        
      </section>
      <h3 className=" text-lg font-bold tracking-tight leading-none text-pink-500 md:text-lg lg:text-2xl text-center p-10 ">
        My Partner
      </h3>
      <CarouselComponent />
      <div className="p-20">
        <ul className="mt-32 grid grid-cols-1 gap-5 lg:grid-cols-5 ">
          <li>
            <CardComponent
              button=""
              title=""
              image="https://i.pinimg.com/564x/9f/94/a3/9f94a3692c97db0daeab04d6e4a4a6a7.jpg"
            />
          </li>
          <li>
            <CardComponent
              button=""
              title=""
              image="https://i.pinimg.com/564x/b3/ef/bc/b3efbccede05fabb31a58d1147309573.jpg"
            />
          </li>
          <li>
            <CardComponent
              button=""
              title=""
              image="https://i.pinimg.com/564x/88/1d/18/881d182bbb40275f71daf56839ae3794.jpg"
            />
          </li>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <CardComponent
              button=""
              title=""
              image="https://i.pinimg.com/564x/57/3b/67/573b674839e9f1594f5673188f6982bf.jpg"
            />
          </div>
          <div className="lg:col-span-3 lg:col-start-3 lg:row-span-1 lg:row-start-2 p-5">
            <h2 className="text-xl font-bold text-pink-500 sm:text-3xl uppercase">
              New collection
            </h2>

            <p className="mt-4 py-4 text-gray-500 ">
              Elevate your makeup game with our new Radiance Reveal! This
              innovative product enhances your natural beauty, giving you a
              luminous glow that lasts all day. Formulated with nourishing
              ingredients, Radiance Reveal hydrates and smooths the skin,
              creating the perfect canvas for your makeup. Whether you're going
              for a natural look or full glam, Radiance Reveal is your secret
              weapon for radiant, flawless skin. Try it today and discover the
              magic of Radiance Reveal!
            </p>
            <div className="flex gap-2 mt-4">
              <ButtonComponent name="Shop Now" />
              <ButtonComponent name="Contact Us" />
            </div>
          </div>
        </ul>
      </div>
      <h3 className="mt-20 text-xl font-extrabold tracking-tight leading-none text-pink-500 md:text-2xl lg:text-5xl text-center p-10 ">
        My All Product for you
      </h3>
      <Home />
    </main>
  );
}
