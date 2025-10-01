import { MarqueeRow } from "./marquee-row";


export const Tools = ({ rows, isDarkMode }: any) => {
  return (
    <div>
      <div className="text-[28px] mb-5">Tools that I have used</div>
      <div className="space-y-4">
        <MarqueeRow items={rows[0]} isDarkMode={isDarkMode} />
        <MarqueeRow items={rows[1]} reverse isDarkMode={isDarkMode} />
        <MarqueeRow items={rows[2]} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};
