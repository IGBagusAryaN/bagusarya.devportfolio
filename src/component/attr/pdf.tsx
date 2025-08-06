"use client";

import { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export const PdfViewer = () => {
  const [scale, setScale] = useState(0.72);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScale(window.innerWidth < 400 ? 0.56 : 0.72); // 768px = Tailwind 'md'
      };

      handleResize(); // run once on mount
      window.addEventListener("resize", handleResize); // optional: if you want it to adjust dynamically

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="w-full max-w-[650px] rounded-md overflow-hidden mt-5">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div
          style={{
            height: "auto",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Viewer fileUrl="/pdf/CV.pdf" defaultScale={scale} />
        </div>
      </Worker>
    </div>
  );
};
