import Image from "next/image";
import React from "react";

const BackgroundImageWithText = ({ imageUrl, text }) => {
  return (
    <div className="relative flex h-[400px] w-full items-center bg-cover bg-center ">
      <Image
      src="/forest.jpg"
      alt="No img"
      fill
      className="z-0"
      />
      <div className="absolute bottom-0 text-white bg-gradient-to-t from-black to-transparent w-full h-1/2">
        <h1 className="mb-4 text-4xl font-bold">Podcast Title</h1>
        {/* Add additional text or elements here as needed */}
      </div>
    </div>
  );
};

export default BackgroundImageWithText;
