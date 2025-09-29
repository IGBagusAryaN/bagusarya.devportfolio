"use client";
import { motion, AnimatePresence } from "framer-motion";

import { useThemeStore } from "@/hooks/store/theme-store";
import { useTabStore } from "@/hooks/store/tabs-store";
import { tabs } from "./navbar-tabs";
import ThemeToggleMobile from "@/page/_components/navbar/_components/toggle-theme-mobile";


interface Props {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const NavbarMobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const { theme } = useThemeStore();
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, height: "auto", scale: 1, y: 0 }}
          exit={{ opacity: 0, height: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`mt-4 border-t ${
            theme === "dark" ? "border-t-[#404040]" : "border-t-gray-300"
          } md:hidden overflow-hidden`}
        >
          <ul className="flex flex-col py-2 h-[90vh]">
            {tabs.map((tab, index) => (
              <motion.li
                key={tab.name}
                className={`flex items-center rounded-[6px] gap-2 cursor-pointer px-4 py-2 ${
                  theme === "dark"
                    ? "hover:bg-[#303030]"
                    : "hover:bg-gray-100"
                } ${
                  activeTab === tab.name &&
                  (theme === "dark" ? "bg-[#303030]" : "bg-gray-100")
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
  );
};
