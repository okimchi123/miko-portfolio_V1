"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { X } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function ResumeModal({ open, close }) {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    open && (
      <div className="fixed left-0 top-0 z-[1100] px-2 flex justify-center items-center h-full w-full bg-gray-900/90 overflow-auto">
        <X 
        onClick={close}
        className="absolute top-5 right-5 cursor-pointer" />
        <div className="bg-white p-4 mt-10 md:mt-0 rounded-lg h-[90%] overflow-y-auto">
          <Document file="/Miko-Resume.pdf" onLoadSuccess={onLoadSuccess}>
            {Array.from(new Array(numPages), (_, i) => (
              <Page key={i} pageNumber={i + 1} className="my-4 shadow" />
            ))}
          </Document>
        </div>
      </div>
    )
  );
}
