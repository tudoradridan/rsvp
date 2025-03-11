import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { STRINGS } from "@/app/utils/strings";
import SectionImage from "@/app/images/section.jpg";

const Section: React.FC = () => {
  const { section1, section2, section3 } = STRINGS;

  const sectionStyle = {
    backgroundImage: `url(${SectionImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const overlayStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
    zIndex: 1,
  };

  return (
    <div style={sectionStyle} className="relative h-[30vh] md:h-[60vh]">
      <div style={overlayStyle}></div>
      <div className="text-3xl sm:text-5xl allura-font text-center relative opacity-100 z-10">
        <FaRegHeart className="mx-auto mb-3" />
        <h1 className="mb-2">{section1}</h1>
        <h2 className="mb-2">{section2}</h2>
        <h1>{section3}</h1>
      </div>
    </div>
  );
};

export default Section;
