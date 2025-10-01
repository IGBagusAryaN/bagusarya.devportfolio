import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useThemeStore } from "@/hooks/store/theme-store";
import { useTabStore } from "@/hooks/store/tabs-store";

const RocketAnimation = dynamic(() => import("@/lottie/rocket-lottie"), { ssr: false });
const RocketDarkAnimation = dynamic(() => import("@/lottie/rocket-lottie-dark"), { ssr: false });

export const WhatUp = () => {
  const { theme } = useThemeStore();
  const setActiveTab = useTabStore((state) => state.setActiveTab);

  return (
    <div>
      <div className="text-[28px] mb-5">What I’ve Been Up To</div>
      <div className="grid md:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-[#969191]">
            I'm looking for collaboration in Frontend Development! Let’s connect!
          </p>
          <motion.button
            className={`w-full md:w-[27%] border cursor-pointer ${
              theme === "dark"
                ? "border-[#404040] bg-[#262626]"
                : "border-gray-300"
            } px-5 py-2 mt-3 rounded-2xl`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setActiveTab("Contact")}
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
