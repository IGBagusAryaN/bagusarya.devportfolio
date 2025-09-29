"use client";

import { useThemeStore } from "@/hooks/store/theme-store";
import { ScrollFadeIn } from "@/components/scroll-page";

export const Education = () => {
  const { theme } = useThemeStore();

  return (
    <ScrollFadeIn delay={0.3}>
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347..."
            />
          </svg>
          <div className="text-[24px] ">Education</div>
        </div>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-4" />

        {/* Dumbways */}
        <div
          className={`p-2 flex items-center border rounded-2xl mb-2 ${
            theme === "dark" ? "border-[#404040] bg-[#262626]" : "border-gray-300"
          }`}
        >
          <div className="w-[63px] overflow-hidden p-2 ml-[10px] mr-2">
            <img src={"/dumbways.png"} alt="dumbways" className="object-cover" />
          </div>
          <div>
            <p>Dumbways Indonesia Teknologi</p>
            <p className="text-[14px] text-[#969191]">Full-stack Developer</p>
            <p className="text-[14px] text-[#969191]">
              2024-Present • South Tangerang, Indonesia 🇮🇩
            </p>
          </div>
        </div>

        {/* INSTIKI */}
        <div
          className={`p-2 flex items-center border rounded-2xl ${
            theme === "dark" ? "border-[#404040] bg-[#262626]" : "border-gray-300"
          }`}
        >
          <div className="w-[80px] overflow-hidden p-1 mr-2.5">
            <img src={"/instiki.png"} alt="instiki" className="object-cover" />
          </div>
          <div>
            <p>Institut Bisnis dan Teknologi Indonesia (INSTIKI)</p>
            <p className="text-[14px] text-[#969191]">
              Bachelor's degree • Information Technology
            </p>
            <p className="text-[14px] text-[#969191]">
              2020 - 2024 • Bali, Indonesia 🇮🇩
            </p>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
};

