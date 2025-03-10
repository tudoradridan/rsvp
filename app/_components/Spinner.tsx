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
        <div className="rounded-full h-32 w-32 border-t-2 border-b-2 border-white">
          <Image
            src={WeddingCoupleImage}
            alt="Wedding Couple"
            width={120}
            height={120}
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Spinner;
