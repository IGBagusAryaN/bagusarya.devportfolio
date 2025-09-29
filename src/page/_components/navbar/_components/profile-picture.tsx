"use client";
import { motion } from "framer-motion";

interface Props {
  hidden: boolean;
  isSmallScreen: boolean;
}

export const ProfilePicture = ({ hidden, isSmallScreen }: Props) => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ gap: 0 }}
      animate={{ gap: hidden ? 0 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="overflow-hidden rounded-lg z-20"
        initial={{
          width: isSmallScreen ? "50px" : "90px",
          opacity: 1,
        }}
        animate={{
          width: hidden ? "0px" : isSmallScreen ? "50px" : "90px",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.img
          src="/assets/jpg/profilepicture.jpg"
          className="object-cover rounded-xl"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: hidden ? 0 : 1, opacity: hidden ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        initial={{ marginLeft: 0 }}
        animate={{
          marginLeft: hidden ? "0px" : isSmallScreen ? "7px" : "20px",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="text-[20px] md:text-[32px] font-semibold">
          Bagus Arya
        </div>
        <p className="hidden md:block text-[16px] text-[#969191]">
          Front-end Developer
        </p>
      </motion.div>
    </motion.div>
  );
};
