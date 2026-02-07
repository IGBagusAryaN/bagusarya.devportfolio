import React from "react";
import { motion } from "framer-motion";

interface LiveDemoUrl {
  url: string;
  active: boolean;
}


export const LiveDemo: React.FC<LiveDemoUrl> = ({ url, active }) => {
  const Wrapper = active ? motion.a : "div";

  return (
    <Wrapper
      {...(active
        ? { href: url, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`inline-block ${
        active ? "cursor-pointer" : "cursor-not-allowed opacity-60"
      }`}
      {...(active && {
        whileHover: { scale: 1.1 },
        transition: { type: "spring", stiffness: 300 },
      })}
    >
      <motion.div
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white ${
          !active && "line-through"
        }`}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          {...(active && {
            whileHover: { rotate: 15 },
            transition: { duration: 0.3 },
          })}
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
        </motion.svg>

        {active ? "Live demo" : "Live demo"}
      </motion.div>
    </Wrapper>
  );
};
