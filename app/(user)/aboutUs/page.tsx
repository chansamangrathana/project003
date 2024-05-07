"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="mt-10 py-12 bg-gray-100 gap-10 ">
        <div className="mt-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-3xl lg:text-4xl font-bold text-gray-800 mb-10 "
              >
                About Our Cosmetics
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                Welcome to CSR, your one-stop destination for all things beauty!
                Our shop is a haven for makeup enthusiasts, offering a wide
                range of high-quality products to help you achieve the perfect
                look
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                From everyday essentials like foundation and mascara to
                statement-making lipsticks and eyeshadows, we've got everything
                you need to create your signature style. Our carefully curated
                selection includes top brands known for their quality and
                innovation, ensuring that you can shop with confidence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                But we're more than just a makeup store - we're a beauty
                community. Our knowledgeable staff are here to offer
                personalized advice and tips to help you discover new favorites
                and perfect your beauty routine.
              </motion.p>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-8">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                src="https://i.pinimg.com/736x/a2/5b/38/a25b387bb8538713dc738bb79a54e3b4.jpg"
                alt="Cosmetics"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="lg:w-1/2">
           
          
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Services
            </h3>
            <ul className="list-disc list-inside">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-gray-600 mb-2"
              >
                Cosmetic Consultation: Personalized advice on cosmetics suitable
                for your skin type.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-gray-600 mb-2"
              >
                Makeup Services: Professional makeup services for special
                occasions.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-gray-600 mb-2"
              >
                Skincare Workshops: Educational workshops on skincare routines
                and products.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-gray-600 mb-2"
              >
                Beauty Tips: Regular updates and tips on beauty trends and
                products.
              </motion.li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Delivery Information
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer fast and reliable delivery services to ensure you receive
              your cosmetics products on time.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Have a question or need assistance? Fill out the form below and
              we'll get back to you as soon as possible.
            </p>

            <form className="max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
              <div>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Cosmetics"
                  className="w-24 h-24 rounded-full mr-4"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
