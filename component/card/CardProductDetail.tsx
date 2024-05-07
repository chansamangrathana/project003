'use client'
import { Card } from "flowbite-react";

type PropsType = {
  name: string;
  image: string;
  desc: string;
};

export default function CardComponentDetail({
  name,
  image,
  desc,
}: PropsType) {
  return (
    <Card className="max-w-sm p-4" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
    </Card>
  );
}
