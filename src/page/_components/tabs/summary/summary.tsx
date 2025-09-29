import { useThemeStore } from "@/hooks/store/theme-store";
import { div } from "framer-motion/client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ScrollFadeIn } from "../../../../components/scroll-page";
import { useTabStore } from "@/hooks/store/tabs-store";

const RocketAnimation = dynamic(
  () => import("@/lottie/rocket-lottie"),
  { ssr: false }
);
const RocketDarkAnimation = dynamic(
  () => import("@/lottie/rocket-lottie-dark"),
  { ssr: false }
);

const stack = [
  { image: "reactjs.png", name: "ReactJs" },
  { image: "vite.png", name: "ViteJs" },
  { image: "assets/svg/next.svg", name: "NextJs" },
  { image: "ts.png", name: "TypeScript" },
  { image: "docker.png", name: "Docker" },
  { image: "assets/svg/express.svg", name: "Express" },
  { image: "node.png", name: "NodeJs" },
  { image: "assets/svg/postgre.svg", name: "Postgre" },
  { image: "chakra.png", name: "ChakraUI" },
  { image: "prisma.png", name: "PrismaORM" },
  { image: "Laravel.png", name: "Laravel" },
  { image: "tailwind.png", name: "Tailwind" },
  { image: "javascript.png", name: "Javascript" },
  { image: "PHP.png", name: "PHP" },
  { image: "react-native.png", name: "React Native" },
  { image: "mysql.png", name: "mySQL" },
  { image: "Bootstrap.png", name: "Bootstrap" },
  { image: "shadcn.png", name: "Shadcn UI" },
  { image: "MaterialUI.png", name: "Material UI" },
  { image: "HTML5.png", name: "HTML" },
  { image: "CSS3.png", name: "CSS" },
  { image: "Alpine.png", name: "Alpine js" },
  { image: "framer.png", name: "Framer Motion" },
  { image: "zustand.png", name: "Zustand" },
];

const MarqueeRow = ({
  items,
  reverse = false,
  isDarkMode,
}: {
  items: typeof stack;
  reverse?: boolean;
  isDarkMode: boolean;
}) => {
  const logosWithLight = ["NextJs", "Express", "Shadcn UI"];
  const { theme } = useThemeStore();
  // const isDarkModeOn = theme === "dark";

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["0%", "-20%"] : ["-20%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((tech, i) => {
          // tentukan src berdasarkan mode dark
          const imageSrc =
            isDarkMode && logosWithLight.includes(tech.name)
              ? `/${tech.image.replace(".svg", "-light.svg")}`
              : `/${tech.image}`;

          return (
            <div
              key={tech.name + i}
              className={`border rounded-lg px-3 py-2 flex items-center justify-center gap-2 text-[12px] ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              } `}
            >
              <Image src={imageSrc} alt={tech.name} width={20} height={20} />
              {tech.name}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const Summary = () => {
  const { theme } = useThemeStore();
  const isDarkMode = theme === "dark";
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const rows = [
    stack.slice(0, 8), 
    stack.slice(8, 16), 
    stack.slice(16, 24), 
  ];
  return (
    <div className="w-full max-w-[920px] mx-auto">
      <ScrollFadeIn>
        <div className="text-[28px]">
          Hello, I'm Arya
          <motion.span
            animate={{
              rotate: [0, 20, -10, 20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{ display: "inline-block", originY: 0.7 }}
          >
            🖐️
          </motion.span>
        </div>

        <div className="flex text-xs gap-4 text-[#969191] mt-2 sm:block md:hidden  ">
          <div>• South Tangerang, Indonesia 🇮🇩</div>
          <div>• Front-end Developer</div>
        </div>

        <div className="text-[#969191] mt-3 ">
          <p className="text-justify">
            I'm I Gede Bagus Arya Negara, a Frontend Web Developer passionate
            about building clean, interactive, and user-friendly web
            applications. I specialize in JavaScript and TypeScript, leveraging
            modern frontend technologies to create seamless user experiences.
          </p>
          <p className="mt-3 text-justify">
            Currently, I am honing my skills through an intensive bootcamp at
            DumbWays while actively working on various projects—both
            individually and collaboratively. Through these experiences, I've
            gained hands-on expertise in developing dynamic web applications,
            improving UI/UX, and optimizing performance.
          </p>
          <p className="mt-3 text-justify">
            Beyond frontend development, I am also expanding my knowledge in
            full-stack development to gain a deeper understanding of how web
            applications function as a whole. My goal is to continuously improve
            and stay updated with the latest technologies, ensuring that every
            project I build meets high standards of quality and usability.
          </p>
        </div>
      </ScrollFadeIn>

      <hr className="border-b-1 border-dashed border-gray-300 my-10" />
      <ScrollFadeIn delay={0.3}>
        <div className="text-[28px] mb-5">Tools that I have used</div>
        {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-center z-10">
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
      </div> */}
        <div className="space-y-4">
          <MarqueeRow items={rows[0]} reverse={false} isDarkMode={isDarkMode} />
          <MarqueeRow items={rows[1]} reverse={true} isDarkMode={isDarkMode} />
          <MarqueeRow items={rows[2]} reverse={false} isDarkMode={isDarkMode} />
        </div>
      </ScrollFadeIn>

      <hr className="border-b-1 border-dashed border-gray-300 my-10" />

      <ScrollFadeIn delay={0.6}>
        <div className="text-[28px] mb-5">What I’ve Been Up To</div>
        <div className="grid md:grid-cols-[2fr_1fr]">
          <div className="">
            <p className="text-[#969191]">
              I'm looking for collaboration in Frontend Development! If you need
              a developer who builds clean and interactive UIs, let's connect!
            </p>

            <motion.button
              className={`w-full md:w-[27%] border cursor-pointer ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              } px-5 py-2 mt-3 rounded-2xl`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                console.log("Set ke Contact");
                setActiveTab("Contact");
              }}
            >
              Contact me
            </motion.button>
          </div>
          <div className="flex justify-center relative">
            {theme === "dark" ? <RocketDarkAnimation /> : <RocketAnimation />}
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
};
