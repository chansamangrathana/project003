
"use client";

import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-50 border-t border-pink-700 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-950 dark:border-gray-950 ">
    <span className="text-sm text-pink-800 sm:text-center dark:text-black">
       2023 <a href="/about" className="hover:underline">JINA</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-pink-600 dark:text-pink-600 sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul> 
  </footer>
  );
}
