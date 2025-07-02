"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../../attr/toggle-theme";
import { useThemeStore } from "@/hooks/store/theme-store";
import { Summary } from "../tabs/summary";
import { Portofolio } from "../tabs/portofolio";
import { About } from "../tabs/about";
import { Contact } from "../tabs/contact";
import ThemeToggleMobile from "../../attr/toggle-theme-mobile";
import { Tab, useTabStore } from "@/hooks/store/tabs-store";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  // const [activeTab, setActiveTab] = useState("Home");
  const{activeTab, setActiveTab} = useTabStore()
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

  const tabs : { name: Tab; icon: ReactNode }[] = [
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
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      ),
    },
    {
      name: "About",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
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
            d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
            clipRule="evenodd"
          />
          <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
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
                  className="object-cover "
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
                      } ${activeTab === tab.name && (theme === "dark" ? "bg-#303030" : "bg-gray-200")}`}
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
                  <ThemeToggleMobile/>
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
            {activeTab === "Portofolio" && <Portofolio />}
            {activeTab === "About" && <About />}
            {activeTab === "Contact" && <Contact />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
