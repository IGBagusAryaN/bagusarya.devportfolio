"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { LiveDemo } from "../../attr/livedemo";
import { useThemeStore } from "@/hooks/store/theme-store";
import { ScrollFadeIn } from "../../scroll-page";

const data = [
  {
    id: 1,
    img: "/circle.png",
    title: "Circle App",
    desc: "Circle App is a modern social platform with a sleek dark UI for interactive connections. It offers smooth interactions and personalized suggestions.",
    url: "https://circle-app-socialmedia.vercel.app"
  },
  {
    id: 2,
    img: "/lakoe.png",
    title: "Lakoe",
    desc: "Lakoe App is a modern e-commerce platform with a minimalist UI for easy and secure shopping. It features personalized recommendations and a smooth checkout.",
    url: "https://www.lakoe.site/"
  },
  {
    id: 3,
    img: "/travel.png",
    title: "TravelHunt",
    desc: "",
    url: ""
  },
];

export const Portofolio = () => {

  return (
    <div>
      <ScrollFadeIn>
      <div className="text-[28px]">Portofolio</div>
      <p className="text-[#969191]">
        Several projects that I have worked on, both private and open source.
      </p>
      <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-10" />
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      </ScrollFadeIn>
    </div>
  );
};

const Card = ({
  item,
}: {
  item: { img: string; title: string; desc: string; url: string };
}) => {
  const [hovered, setHovered] = useState(false);
  const {theme} = useThemeStore()
  return (
    <div
      className={`relative w-full h-60 rounded-2xl overflow-hidden border ${theme === "dark" ? "border-[#404040]" : "border-gray-300"} `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover rounded-2xl"
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
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <LiveDemo url={item.url}/>
            </div>
            <p className="text-sm mt-3">{item.desc}</p>
            <div className="flex items-end h-full">
              {/* <p>Tech Stack : </p> */}
              <div className="flex gap-1">
                <Image src={"/React.svg"} alt="" width={28} height={28} />
                <Image src={"/chakra.png"} alt="" width={28} height={28} />
                <Image
                  src={"/express-light.svg"}
                  alt=""
                  width={28}
                  height={28}
                />
                <Image src={"/prisma.png"} alt="" width={28} height={28} />
                <Image src={"/ts.png"} alt="" width={28} height={28} />
                <Image src={"/postgre.png"} alt="" width={28} height={28} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
