"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollFadeIn } from "@/components/scroll-page";

// Type untuk gambar
interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

// Type untuk grid span
interface GridSpan {
  row: number;
  col: number;
}

export default function Others({ images = [] }: { images?: GalleryImage[] }) {
  const defaultImages: GalleryImage[] = [
    { src: "/assets/others/placeholder-1.jpg", alt: "placeholder 1" },
    { src: "/assets/others/placeholder-2.jpg", alt: "placeholder 2" },
    { src: "/assets/others/placeholder-3.jpg", alt: "placeholder 3" },
    { src: "/assets/others/placeholder-4.jpeg", alt: "placeholder 4" },
    { src: "/assets/others/placeholder-5.jpg", alt: "placeholder 5" },
    { src: "/assets/others/placeholder-6.jpg", alt: "placeholder 6" },
    { src: "/assets/others/placeholder-7.jpg", alt: "placeholder 7" },
    { src: "/assets/others/placeholder-8.jpg", alt: "placeholder 8" },
    { src: "/assets/others/placeholder-9.jpg", alt: "placeholder 9" },
    { src: "/assets/others/placeholder-10.jpg", alt: "placeholder 10" },
    { src: "/assets/others/placeholder-11.jpg", alt: "placeholder 11" },
    { src: "/assets/others/placeholder-12.jpg", alt: "placeholder 12" },
    { src: "/assets/others/placeholder-14.jpg", alt: "placeholder 14" },
  ];

  const gallery: GalleryImage[] = images.length ? images : defaultImages;

  const [spans, setSpans] = useState<GridSpan[]>([]);

  useEffect(() => {
    const next: GridSpan[] = gallery.map(() => {
      const row = 1; // semua fix 1 row, biar tidak panjang ke bawah
      const col = Math.random() < 0.25 ? 2 : 1; // masih boleh melebar
      return { row, col };
    });
    setSpans(next);
  }, [gallery.length]);

  return (
    <div className="max-w-[920px] mx-auto">
      <ScrollFadeIn>
        <div className="text-[28px]">Another side of my life</div>
        <p className="text-[#969191]">
          A closer look at the moments and experiences that define my journey
        </p>
        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-6" />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {gallery.map((img, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl break-inside-avoid shadow-sm ${
                idx === 0 ? "col-span-full" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt || "image"}
                width={1200}
                height={600}
                className="object-cover w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
              />
              {img.caption && (
                <div className="p-2 text-xs text-white bg-black/50 rounded-md">
                  {img.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        <hr className="border-b-1 border-dashed border-gray-300 mt-6 mb-10" />
      </ScrollFadeIn>
    </div>
  );
}
