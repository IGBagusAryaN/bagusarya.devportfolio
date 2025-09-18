"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [scale, setScale] = useState(0.87);
  const [numPages, setNumPages] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 768 ? 0.66 : 0.87);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-[650px] rounded-md overflow-hidden mt-5 border border-gray-200 mb-10 h-[550px] lg:h-[780px] overflow-y-auto">
      <Document
        file="/pdf/CV.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <div className="flex flex-col items-center py-6">
          {Array.from(new Array(numPages), (_, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <Page
                pageNumber={i + 1}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
              {i < numPages - 1 && (
                <div className="w-full flex justify-center">
                  <div className="h-[2px] bg-gray-300 w-full max-w-[650px] my-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Document>
    </div>
  );
};

export default PdfViewer;
