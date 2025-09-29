"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useThemeStore } from "@/hooks/store/theme-store";
import { LiveDemo } from "@/page/_components/tabs/portfolio/_components/livedemo";

type CardProps = {
  img: string;
  title: string;
  desc: string;
  url: string;
  techs: string[];
};

export const Card = ({ img, title, desc, url, techs }: CardProps) => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useThemeStore();

  return (
    <div
      className={`relative w-full h-60 rounded-2xl overflow-hidden border bg-white ${
        theme === "dark" ? "border-[#404040]" : "border-gray-300"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="md:object-cover object-contain rounded-2xl"
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col bg-black opacity-80 text-white py-5 px-6 h-full"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
              <LiveDemo url={url} />
            </div>
            <p className="text-sm my-3">{desc}</p>
            <div className="flex items-end h-full">
              <div className="flex gap-1 mb-0">
                {techs.map((src, idx) => (
                  <div
                    key={idx}
                    className="w-7 h-7 flex items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
