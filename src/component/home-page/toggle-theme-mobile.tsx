"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "@/hooks/store/theme-store";

export default function ThemeToggleMobile() {
  const { theme, toggleTheme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const options = [
    {
      label: "Light",
      value: "light",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: "Dark",
      value: "dark",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full mt-5">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-md border cursor-pointer ${
                  theme === "dark" ? "border-[#404040]" : "border-gray-300"
                } `}
      >
        <span className="flex items-center gap-2">
          {theme === "dark" ? options[1].icon : options[0].icon}
          {theme === "dark" ? "Dark" : "Light"}
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-2 w-full border ${
                  theme === "dark" ? "border-[#404040]" : "border-gray-300"
                }  rounded-md shadow-lg z-50 overflow-hidden`}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  if (theme !== opt.value) toggleTheme();
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left cursor-pointer ${theme === "dark" ? "bg-[#121212] hover:bg-[#303030]" : "hover:bg-gray-200 bg-white" } `}
              >
                {opt.icon} {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
