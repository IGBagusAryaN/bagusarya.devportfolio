"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useThemeStore } from "@/hooks/store/theme-store";
import { ScrollFadeIn } from "../../scroll-page";
import { LiveDemo } from "@/component/attr/livedemo";

const data = [
  {
    id: 4,
    img: "/circle1.png",
    title: "Circle App",
    desc: "Circle App is a modern social platform with a sleek dark UI for interactive connections. It offers smooth interactions and personalized suggestions.",
    url: "https://circle-app-socialmedia.vercel.app",
    techs: [
      "/React.svg",
      "/chakra.png",
      "/express-light.svg",
      "/prisma.png",
      "/ts.png",
      "/postgre.svg",
    ],
  },
  {
    id: 3,
    img: "/Meetio.png",
    title: "Meetio",
    desc: "Book your appointments in seconds. Fast, easy, and reliable.",
    url: "https://meetio-yi7k.vercel.app/",
    techs: [
      "/next-light.svg",
      "/shadcn.png",
      "/prisma.png",
      "/tailwind.png",
      "/javascript.png",
      "/pwa.svg"
    ],
  },
  {
    id: 2,
    img: "/travelhunt1.png",
    title: "TravelHunt",
    desc: "TravelHunt is a web app that helps users easily choose the best travel destination in Indonesia through informative visuals and descriptions.",
    url: "https://travel-hunt-alpha.vercel.app/",
    techs: [
      "/React.svg",
      "/express-light.svg",
      "/prisma.png",
      "/ts.png",
      "/postgre.svg",
    ],
  },
  {
    id: 1,
    img: "/writeon1.png",
    title: "WriteOn",
    desc: "Write On is a simple web app for creating and managing short stories. Built with Laravel and Breeze, it offers a clean UI and essential CRUD features in a lightweight project.",
    url: "https://write-onn.vercel.app/",
    techs: ["/Laravel.png", "/tailwind.png", "/mysql.png"],
  },
  {
    id: 5,
    img: "/lakoe1.png",
    title: "Lakoe",
    desc: "Lakoe App is a modern e-commerce platform with a minimalist UI for easy and secure shopping. It features personalized recommendations and a smooth checkout.",
    url: "https://www.lakoe.site/",
    techs: [
      "/React.svg",
      "/chakra.png",
      "/express-light.svg",
      "/prisma.png",
      "/ts.png",
      "/postgre.svg",
    ],
  },
  {
    id: 6,
    img: "/goodbudget.png",
    title: "GoodBudget",
    desc: "Easily log your daily expenses and income with just a few clicks. Get clear insights into your spending and manage your money better",
    url: "/",
    techs: [
      "/react-native.png",
      "/express-light.svg",
      "/javascript.png",
      "/postgre.svg",
      "/expo-go.svg"
    ],
  },
  // {
  //   id: 5,
  //   img: "/dailypresence.png",
  //   title: "DailyPresence",
  //   desc: "Daily Presence is a web platform designed to simplify digital student attendance. It supports multi-authentication for admins and teachers.",
  //   url: "https://dailypresence.vercel.app/",
  //   techs: [
  //     "/Laravel.png",
  //     "/tailwind.png",
  //     "/mysql.png"
  //     ,"/Livewire.png"
  //   ],
  // },
];

export const Portofolio = () => {
  return (
    <div className="pb-20 w-full max-w-[920px] mx-auto layout-container">
      <ScrollFadeIn>
        <div className="text-[28px]">Portfolio</div>
        <p className="text-[#969191]">
          Several projects that I have worked on.
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
  item: {
    img: string;
    title: string;
    desc: string;
    url: string;
    techs: string[];
  };
}) => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useThemeStore();
  return (
    <div
      className={`relative w-full h-60 rounded-2xl overflow-hidden border bg-white !important ${
        theme === "dark"
          ? "border-[#404040] !important"
          : "border-gray-300 !important"
      } `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={item.img}
        alt={item.title}
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
              <h3 className=" text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <LiveDemo url={item.url} />
            </div>
            <p className="text-sm my-3">{item.desc}</p>
            <div className="flex items-end h-full">
              {/* <p>Tech Stack : </p> */}
              <div className="flex gap-1 mb-0">
                {item.techs.map((src, idx) => (
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
