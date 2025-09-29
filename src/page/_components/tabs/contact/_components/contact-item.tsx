"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  icon: ReactNode;
  bg: string;
};

export const ContactItem = ({ href, label, icon, bg }: Props) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`flex justify-center items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${bg}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
      {label}
    </motion.a>
  );
};
