"use client";
import { motion } from "framer-motion";

import { useThemeStore } from "@/hooks/store/theme-store";
import { useTabStore } from "@/hooks/store/tabs-store";
import { tabs } from "./navbar-tabs";

export const NavbarDesktopMenu = () => {
  const { theme } = useThemeStore();
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <nav
      className={`border ${
        theme === "dark" ? "border-[#404040]" : "border-gray-300"
      } hidden md:block rounded-md mt-4`}
    >
      <ul className="flex justify-between py-3 md:px-16 lg:px-24">
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
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
