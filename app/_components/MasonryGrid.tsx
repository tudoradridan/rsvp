import React from "react";
import Image from "next/image";

import Image1 from "@/app/images/image1.png";
import Image2 from "@/app/images/image2.png";
import Image3 from "@/app/images/image3.png";
import Image4 from "@/app/images/image4.png";
import Image6 from "@/app/images/image6.png";
import Image5 from "@/app/images/image5.png";
import Image7 from "@/app/images/image7.png";
import Image8 from "@/app/images/image8.png";

const images = [Image3, Image1, Image2, Image4, Image5, Image6, Image7, Image8];

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
