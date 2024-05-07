import { Button } from "flowbite-react";
import React from "react";

type PropType = {
  name: string;
  // className: string;
};
export default function ButtonComponent({ name }: PropType) {
  return (
    <button
      className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center bg-pink-500 text-white rounded-lg border border-black hover:bg-pink-300 focus:ring-4 focus:ring-gray-400"
    >
      {name}
    </button>
  );
}
