import Image from "next/image";
import { PdfViewer } from "./pdf";
import { useThemeStore } from "@/hooks/store/theme-store";
import { motion } from "framer-motion";
import { ScrollFadeIn } from "../scroll-page";

export const About = () => {
  const { theme } = useThemeStore();
  return (
    <div>
      <ScrollFadeIn>
      <div className="text-[28px]">About me</div>
      <p className="text-[#969191]">
        An insightful glimpse into who I am - because every detail adds depth to
        the canvas of life.
      </p>
   

      <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-10" />
      </ScrollFadeIn>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10">
      <ScrollFadeIn>
        <div >
          <motion.a
            href="pdf/CV.pdf"
            download="CV.pdf"
            className={`flex items-center lg:w-[50%] gap-2 border px-4 py-2 rounded-lg transition ${
              theme === "dark"
                ? "border-[#404040] bg-[#262626]"
                : "border-gray-300"
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download my resume
          </motion.a>
          <PdfViewer />
        </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.3} >
        <div className="mb-10">
          <div>
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
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>

              <div className="text-[24px] ">Education</div>
            </div>

            <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-4" />
            {/* cek */}
        

            <div className="block md:hidden">
            <div
              className={`p-2 flex items-center border rounded-2xl ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              }`}
            >
              <div className="w-[54px] overflow-hidden p-2 ml-[7px] mr-[7px]">
                <img
                  src={"/dumbways.png"}
                  alt="instiki"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[14px]">PT Dumbways Indonesia Teknologi</p>
                <p className="text-[14px] text-[#969191]">
                  Full-stack Dev • 2024-Present 
                </p>
                <p className="text-[14px] text-[#969191]">
                  South Tangerang, Indonesia 🇮🇩
                </p>
              </div>
            </div>
            </div>
            {/* Medium */}
            <div className="hidden md:block">
            <div
              className={`p-2 flex items-center border rounded-2xl   ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              }`}
            >
              <div className="w-[63px] overflow-hidden p-2 ml-[10px] mr-2">
                <img
                  src={"/dumbways.png"}
                  alt="instiki"
                  className="object-cover"
                />
              </div>
              <div>
                <p>PT Dumbways Indonesia Teknologi</p>
                <p className="text-[14px] text-[#969191]">
                  Full-stack Developer
                </p>
                <p className="text-[14px] text-[#969191]">
                  2024-Present • South Tangerang, Indonesia 🇮🇩
                </p>
              </div>
            </div>
              </div>
                      {/* Medium */}

              <div className="block md:hidden">
            <div
              className={`p-2 flex items-center border rounded-2xl mt-2 ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              }`}
            >
              <div className="w-[80px] overflow-hidden p-1 mr-1.5">
                <img
                  src={"/instiki.png"}
                  alt="instiki"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[14px]">Institut Bisnis dan Teknologi Indonesia (INSTIKI)</p>
                <p className="text-[14px] text-[#969191]">
                  Bachelor's degree • Information Technology
                </p>
                <p className="text-[14px] text-[#969191]">
                  2020 - 2024 • Bali, Indonesia 🇮🇩
                </p>
              </div>
            </div>
            </div>

            <div className="hidden md:block">
            <div
              className={`p-2 flex items-center border rounded-2xl mt-2 ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              }`}
            >
              <div className="w-[80px] overflow-hidden p-1">
                <img
                  src={"/instiki.png"}
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
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>

              <div className="text-[24px]">Career</div>
            </div>

            <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-4" />

            <div
              className={`p-2 flex items-center border rounded-2xl mt-2 ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              }`}
            >
              <div className="w-[80px] overflow-hidden p-1">
                <img
                  src={"/plane.png"}
                  alt="instiki"
                  className="object-cover"
                />
              </div>
              <div>
                <p>BaliMyApp</p>
                <p className="text-[14px] text-[#969191]">
                  Freelance • Data Entry
                </p>
                <p className="text-[14px] text-[#969191]">
                  Feb 2024 - Nov 2024 • Full-time • Remote
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
};
