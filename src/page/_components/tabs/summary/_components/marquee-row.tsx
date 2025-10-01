import { motion } from "framer-motion";
import Image from "next/image";
import { useThemeStore } from "@/hooks/store/theme-store";

export const MarqueeRow = ({
  items,
  reverse = false,
  isDarkMode,
}: {
  items: { image: string; name: string }[];
  reverse?: boolean;
  isDarkMode: boolean;
}) => {
  const { theme } = useThemeStore();
  const logosWithLight = ["NextJs", "Express", "Shadcn UI"];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["0%", "-20%"] : ["-20%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((tech, i) => {
          const imageSrc =
            isDarkMode && logosWithLight.includes(tech.name)
              ? `/${tech.image.replace(".svg", "-light.svg")}`
              : `/${tech.image}`;

          return (
            <div
              key={tech.name + i}
              className={`border rounded-lg px-3 py-2 flex items-center gap-2 text-[12px] ${
                theme === "dark"
                  ? "border-[#404040] bg-[#262626]"
                  : "border-gray-300"
              }`}
            >
              <Image src={imageSrc} alt={tech.name} width={20} height={20} />
              {tech.name}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
