"use client";

import { ScrollFadeIn } from "@/components/scroll-page";
import { portfolioData } from "./_components/data-portfolio";
import { Card } from "./_components/card";


export const Portfolio = () => {
  return (
    <div className="pb-20 w-full max-w-[920px] mx-auto layout-container">
      <ScrollFadeIn>
        <div className="text-[28px]">Portfolio</div>
        <p className="text-[#969191]">
          Several projects that I have worked on.
        </p>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </ScrollFadeIn>
    </div>
  );
};
