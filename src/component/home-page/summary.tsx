import { useThemeStore } from "@/hooks/store/theme-store";
import { div } from "framer-motion/client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const RocketAnimation = dynamic(() => import("@/component/animation/rocket-lottie"), { ssr: false });
const RocketDarkAnimation = dynamic(() => import("@/component/animation/rocket-lottie-dark"), { ssr: false });

const stack = [
  { image: "reactjs.png", name: "ReactJs" },
  { image: "vite.png", name: "ViteJs" },
  { image: "next.svg", name: "NextJs" },
  { image: "ts.png", name: "TypeScript" },
  { image: "zustand.png", name: "Zustand" },
  { image: "express.svg", name: "Express" },
  { image: "node.png", name: "NodeJs" },
  { image: "postgre.png", name: "Postgre" },
  { image: "chakra.png", name: "ChakraUI" },
  { image: "prisma.png", name: "PrismaORM" },
  { image: "firebase.png", name: "Firebase" },
  { image: "tailwind.png", name: "Tailwind" },
];

export const Summary = () => {
  const { theme } = useThemeStore();
  const isDarkMode = theme === "dark";
  return (
    <div className="w-full">
      <div className="text-[28px]">Hello, i'm Arya🖐️</div>
      <div className="flex gap-4 text-[#969191] mt-2">
        <div>• Bali, Indonesia</div>
        <div>• Full-Stack Developer</div>
      </div>
      <div className="text-[#969191] mt-3 ">
        <p className="text-justify">
          I'm I Gede Bagus Arya Negara, a Frontend Web Developer passionate
          about building clean, interactive, and user-friendly web applications.
          I specialize in JavaScript and TypeScript, leveraging modern frontend
          technologies to create seamless user experiences.
        </p>
        <p className="mt-3 text-justify">
          Currently, I am honing my skills through an intensive bootcamp at
          DumbWays while actively working on various projects—both individually
          and collaboratively. Through these experiences, I've gained hands-on
          expertise in developing dynamic web applications, improving UI/UX, and
          optimizing performance.
        </p>
        <p className="mt-3 text-justify">
          Beyond frontend development, I am also expanding my knowledge in
          full-stack development to gain a deeper understanding of how web
          applications function as a whole. My goal is to continuously improve
          and stay updated with the latest technologies, ensuring that every
          project I build meets high standards of quality and usability.
        </p>
      </div>

      <hr className="border-b-1 border-dashed border-gray-300 my-10" />

      <div className="text-[28px] mb-5">Tools that I have used</div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center z-10">
        {stack.map((tech) => {
          const isBlackLogo = tech.name === "NextJs" || tech.name === "Express";
          const imageSrc =
            isDarkMode && isBlackLogo
              ? `/${tech.image.replace(".svg", "-light.svg")}`
              : `/${tech.image}`;

          return (
            <div
              key={tech.name}
              className={`border rounded-lg py-2 flex items-center justify-center gap-2 text-[12px] 
              ${
                isDarkMode ? "border-[#404040] bg-[#262626]" : "border-gray-300"
              }`}
            >
              <Image
                src={imageSrc}
                alt={`${tech.name} Logo`}
                width={20}
                height={20}
                
              />
              {tech.name}
            </div>
          );
        })}
      </div>

      <hr className="border-b-1 border-dashed border-gray-300 my-10" />

      <div className="text-[28px] mb-5">What I’ve Been Up To</div>
      <div className="grid md:grid-cols-[2fr_1fr]">
        <div className="">
          <p className="text-[#969191]">
            I'm looking for collaboration in Frontend Development! If you need a
            developer who builds clean and interactive UIs, let's connect!
          </p>

          <motion.button className={`w-full border cursor-pointer ${theme === "dark" ? "border-[#404040] bg-[#262626]" : "border-gray-300"} px-5 py-2 mt-3 rounded-2xl`}
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 300 }}
          >
            Contact me
          </motion.button>
        </div>
        <div className="flex justify-center relative">
          {theme === "dark" ? <RocketDarkAnimation /> : <RocketAnimation />}
        </div>
      </div>
    </div>
  );
};
