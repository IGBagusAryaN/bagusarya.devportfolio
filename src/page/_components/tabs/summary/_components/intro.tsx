import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <div>
      <div className="text-[28px]">
        Hello, I'm Arya
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          style={{ display: "inline-block", originY: 0.7 }}
        >
          🖐️
        </motion.span>
      </div>
      <div className="flex text-xs gap-4 text-[#969191] mt-2 sm:block md:hidden">
        <div>• South Tangerang, Indonesia 🇮🇩</div>
        <div>• Front-end Developer</div>
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
    </div>
  );
};
