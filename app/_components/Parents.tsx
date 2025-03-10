import React from "react";
import Image from "next/image";
import FlowerImage from "@/app/images/flower.png";
import { STRINGS } from "@/app/utils/strings";

const Parents = () => {
  const { parents, parentsName, godParents, godParentsName } = STRINGS;
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        src={FlowerImage}
        alt="Flower Image"
        width={60}
        height={60}
        style={{ objectFit: "cover" }}
        quality={100}
        className="rotate-90 my-8"
      />
      <p className="allura-font text-2xl text-gold-star font-semibold">
        {parents}
      </p>
      <p>{parentsName}</p>
      <p className="allura-font text-2xl text-gold-star font-semibold">
        {godParents}
      </p>
      <p>{godParentsName}</p>
      <Image
        src={FlowerImage}
        alt="Flower Image"
        width={60}
        height={60}
        style={{ objectFit: "cover" }}
        quality={100}
        className="rotate-90 my-8"
      />
    </div>
  );
};

export default Parents;
