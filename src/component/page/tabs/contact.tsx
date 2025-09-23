import { motion } from "framer-motion";
import { ScrollFadeIn } from "../../scroll-page";
import Image from "next/image";

export const Contact = () => {
  return (
    <div className="w-full max-w-[920px] mx-auto">
      <ScrollFadeIn>
        <div className="text-[28px]">Contact</div>
        <p className="text-[#969191]">
          Feel free to get in touch and let's have a discussion about how we can
          work together.
        </p>

        <hr className="border-b-1 border-dashed border-gray-300 mt-3 mb-10" />
        <div className="grid grid-cols-1 md:flex gap-4">
          {/* Email */}
          <motion.a
            href="mailto:aryabagus453@gmail.com"
            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
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
                d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 7.5-9.75-7.5"
              />
            </svg>
            Email
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/bagus-arya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5c1.29 0 2.34 1.05 2.34 2.34s-1.05 2.34-2.34 2.34A2.34 2.34 0 0 1 2.64 5.84C2.64 4.55 3.69 3.5 4.98 3.5ZM3 8.75h3.99v12.74H3V8.75ZM8.64 8.75h3.83v1.73h.06c.54-1.01 1.87-2.08 3.84-2.08 4.11 0 4.86 2.71 4.86 6.24v7.05h-4v-6.25c0-1.49-.03-3.42-2.09-3.42-2.1 0-2.42 1.63-2.42 3.31v6.36h-4V8.75Z" />
            </svg>
            LinkedIn
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/bagusaryaa_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-red-700 text-white font-medium hover:bg-red-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/IGBagusAryaN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .296C5.373.296 0 5.67 0 12.296c0 5.292 3.438 9.785 8.207 11.385.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.608-4.042-1.608-.546-1.386-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.204.086 1.838 1.238 1.838 1.238 1.07 1.832 2.807 1.303 3.492.997.108-.776.418-1.303.76-1.603-2.665-.303-5.467-1.335-5.467-5.934 0-1.313.47-2.386 1.237-3.228-.124-.303-.535-1.525.116-3.176 0 0 1.007-.322 3.3 1.233a11.414 11.414 0 0 1 3-.404c1.017.005 2.045.137 3 .404 2.29-1.555 3.297-1.233 3.297-1.233.653 1.651.242 2.873.12 3.176.77.842 1.235 1.915 1.235 3.228 0 4.609-2.807 5.628-5.48 5.921.43.372.823 1.104.823 2.228 0 1.604-.015 2.896-.015 3.291 0 .32.193.694.8.576 4.767-1.6 8.2-6.093 8.2-11.385C24 5.67 18.627.296 12 .296Z" />
            </svg>
            GitHub
          </motion.a>
          {/* GitHub */}
          <motion.a
            href="https://open.spotify.com/user/31vvdulfhchm3tdcuxfbjt6regsm?si=1a49853986834b9b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-200 border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/spotify.png"
              alt="Spotify"
              width={26}
              height={16}
            />
            Spotify
          </motion.a>
        </div>
      </ScrollFadeIn>
    </div>
  );
};
