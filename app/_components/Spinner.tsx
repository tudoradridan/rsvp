import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import WeddingCoupleImage from "@/app/images/wedding-couple.png";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="flex items-center justify-center min-h-screen"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <Image
          src={WeddingCoupleImage}
          alt="Wedding Couple"
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default Spinner;
