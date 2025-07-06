"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../../attr/toggle-theme";
import { useThemeStore } from "@/hooks/store/theme-store";
import { Summary } from "../tabs/summary";
import { Portofolio } from "../tabs/portfolio";
import { About } from "../tabs/about";
import { Contact } from "../tabs/contact";
import ThemeToggleMobile from "../../attr/toggle-theme-mobile";
import { Tab, useTabStore } from "@/hooks/store/tabs-store";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  // const [activeTab, setActiveTab] = useState("Home");
  const { activeTab, setActiveTab } = useTabStore();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useThemeStore();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs: { name: Tab; icon: ReactNode }[] = [
    {
      name: "Home",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          whileHover={{
            rotate: [0, -20, 20, -20, 20, 0],
            transition: { duration: 0.5, repeat: Infinity, repeatType: "loop" },
          }}
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </motion.svg>
      ),
    },
    {
      name: "Portfolio",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "About",
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
</svg>

      ),
    },
    {
      name: "Contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      window.scrollTo({ top: 0, behavior: "auto" });
      setIsFirstLoad(false);
    } else {
      window.scrollTo({ top: 11, behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <div>
      <div className="relative">
        <div className="flex justify-between"></div>
        <motion.div
          className={`fixed top-0 w-full z-10 max-w-[920px] left-1/2 transform -translate-x-1/2 pt-7 px-5 md:px-4 lg:px-0
        ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-[#FFFF] text-black"
        }
      `}
        >
          <div className="flex justify-between mt-3 items-center">
            <motion.div
              className="flex items-center"
              initial={{ gap: 12 }}
              animate={{ gap: hidden ? 0 : 12 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="overflow-hidden rounded-xl z-20"
                initial={{
                  width: isSmallScreen ? "50px" : "100px",
                  opacity: 1,
                }}
                animate={{
                  width: hidden ? "0px" : isSmallScreen ? "50px" : "100px",
                  opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.img
                  src="/profilepicture.jpeg"
                  className="object-cover rounded-xl"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: hidden ? 0 : 1, opacity: hidden ? 0 : 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                initial={{ marginLeft: 0 }}
                animate={{
                  marginLeft: hidden ? "0px" : isSmallScreen ? "7px" : "20px",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="text-[20px] md:text-[32px] font-semibold ">
                  Bagus Arya
                </div>
                <p className="hidden  md:block text-[16px] text-[#969191]">
                  Full-Stack Developer
                </p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col items-end justify-end mt-2">
              <div className="flex gap-3 items-center">
                <ThemeToggle />
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" rounded-md focus:outline-none text-[20px] cursor-pointer"
                  >
                    <motion.div
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                        scale: isOpen ? 0.8 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        scale: isOpen ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </button>
                </div>
              </div>
              <div className="hidden md:block text-[#969191]">
                -Based in Bali, Indonesia 🇮🇩
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Navigation with Animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, height: "auto", scale: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`mt-4 border-t ${
                  theme === "dark" ? "border-t-[#404040]" : "border-t-gray-300"
                }  md:hidden overflow-hidden`}
              >
                <ul className="flex flex-col py-2 px-4b h-[90vh]">
                  {tabs.map((tab, index) => (
                    <motion.li
                      key={tab.name}
                      className={`flex items-center rounded-[6px] gap-2 cursor-pointer px-4 py-2  ${
                        theme === "dark"
                          ? "hover:bg-[#303030]"
                          : "hover:bg-gray-200"
                      } ${
                        activeTab === tab.name &&
                        (theme === "dark" ? "bg-#303030" : "bg-gray-200")
                      }`}
                      onClick={() => {
                        setActiveTab(tab.name);
                        setIsOpen(false);
                      }}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      {tab.icon} {tab.name}
                    </motion.li>
                  ))}
                  <ThemeToggleMobile />
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation */}
          <nav
            className={`border ${
              theme === "dark" ? "border-[#404040]" : "border-gray-300"
            } hidden md:block rounded-md mt-4`}
          >
            <ul className="flex justify-between py-2  md:px-16 lg:px-24">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className="relative flex items-center gap-2 cursor-pointer px-4 py-2 transition"
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.icon} {tab.name}
                  {activeTab === tab.name && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        theme === "dark" ? "bg-white" : "bg-[#404040]"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <div
          className=" mt-[120px] md:mt-[190px] px-1 z-0"
          style={{ scrollBehavior: "smooth" }}
        >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeTab === "Home" && <Summary />}
            {activeTab === "Portfolio" && <Portofolio />}
            {activeTab === "About" && <About />}
            {activeTab === "Contact" && <Contact />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
