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
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
          </svg>

          <div className="text-[24px] ">Education</div>
        </div>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-4" />

        {/* Dumbways */}
        <div
          className={`p-2 flex items-center border rounded-2xl mb-2 ${
            theme === "dark"
              ? "border-[#404040] bg-[#262626]"
              : "border-gray-300"
          }`}
        >
          <div className="w-[63px] overflow-hidden p-2 ml-[10px] mr-2">
            <img
              src={"/assets/png/dumbways.png"}
              alt="dumbways"
              className="object-cover"
            />
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
            theme === "dark"
              ? "border-[#404040] bg-[#262626]"
              : "border-gray-300"
          }`}
        >
          <div className="w-[80px] overflow-hidden p-1 ml-[6.5px] mr-[6.5px]">
            <img
              src={"/assets/png/instiki.png"}
              alt="instiki"
              className="object-cover"
            />
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
