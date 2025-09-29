"use client";

import { motion } from "framer-motion";
import { useThemeStore } from "@/hooks/store/theme-store";
import dynamic from "next/dynamic";
import { ScrollFadeIn } from "@/components/scroll-page";

const Pdfviewer = dynamic(() => import("@/page/_components/tabs/about/components/pdf"), { ssr: false });

export const Resume = () => {
  const { theme } = useThemeStore();

  return (
    <ScrollFadeIn>
      <div>
        <motion.a
          href="pdf/CV.pdf"
          download="CV.pdf"
          className={`flex items-center lg:w-[50%] gap-2 border px-4 py-2 rounded-lg transition ${
            theme === "dark"
              ? "border-[#404040] bg-[#262626]"
              : "border-gray-300"
          }`}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download my resume
        </motion.a>
        <Pdfviewer />
      </div>
    </ScrollFadeIn>
  );
};
