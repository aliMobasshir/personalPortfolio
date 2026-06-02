"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <span className="flex flex-wrap items-center gap-2 leading-relaxed">
      <motion.span
        layoutId="subtext"
        className="text-lg font-bold tracking-tight drop-shadow-lg sm:text-2xl md:text-4xl">
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative max-w-full overflow-hidden rounded-md border border-transparent bg-white px-3 py-1.5 font-sans text-base font-bold tracking-tight text-neutral-400 shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg sm:px-4 sm:py-2 sm:text-lg md:text-xl dark:bg-neutral-900 dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block max-w-full whitespace-normal break-words")}>
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
};
