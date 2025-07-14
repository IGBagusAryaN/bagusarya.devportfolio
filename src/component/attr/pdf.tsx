export const PdfViewer = () => {
  return (
    <iframe
      src="pdf/CV.pdf#toolbar=0"
      className="w-[100%] md:w-[96%]  h-[432px] md:h-[596px]"
      style={{ border: "none", outline: "none", marginTop: "20px" }}
    />
  );
};
