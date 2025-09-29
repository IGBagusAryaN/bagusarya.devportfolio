"use client";

import { ScrollFadeIn } from "@/components/scroll-page";
import { Resume } from "./components/resume";
import { Education } from "./components/education";
import { Career } from "./components/career";


export const About = () => {
  return (
    <div className="max-w-[920px] mx-auto">
      <ScrollFadeIn>
        <div className="text-[28px]">About me</div>
        <p className="text-[#969191]">
          An insightful glimpse into who I am - because every detail adds depth
          to the canvas of life.
        </p>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-10" />
      </ScrollFadeIn>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10">
        <Resume />
        <div>
          <Education />
          <Career />
        </div>
      </div>
    </div>
  );
};
