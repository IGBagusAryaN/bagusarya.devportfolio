"use client";

import { useThemeStore } from "@/hooks/store/theme-store";
import { ScrollFadeIn } from "@/components/scroll-page";

export const Career = () => {
  const { theme } = useThemeStore();

  return (
    <ScrollFadeIn delay={0.5}>
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094..."
            />
          </svg>
          <div className="text-[24px]">Career</div>
        </div>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-4" />

        <div
          className={`p-2 flex items-center border rounded-2xl ${
            theme === "dark" ? "border-[#404040] bg-[#262626]" : "border-gray-300"
          }`}
        >
          <div className="w-[80px] overflow-hidden p-1">
            <img src={"/plane.png"} alt="plane" className="object-cover" />
          </div>
          <div>
            <p>BaliMyApp</p>
            <p className="text-[14px] text-[#969191]">Freelance • Data Entry</p>
            <p className="text-[14px] text-[#969191]">
              Feb 2024 - Nov 2024 • Full-time • Remote
            </p>
          </div>
        </div>
      </div>
    </ScrollFadeIn>
  );
};
