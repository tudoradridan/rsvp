import React from "react";
import Image from "next/image";

import Image1 from "@/app/images/image1.jpg";
import Image2 from "@/app/images/image2.jpg";
import Image3 from "@/app/images/image3.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image1,
  Image2,
  Image3,
  Image2,
  Image3,
  Image1,
  Image2,
  Image2,
  Image3,
  Image1,
  Image2,
  Image3,
  Image3,
  Image1,
];

const MasonryGrid = () => {
  return (
    <div className="columns-3 lg:columns-4 p-4 md:p-20 gap-2 md:gap-4">
      {images.map((image, index) => (
        <div className="mb-4 break-inside-avoid" key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
