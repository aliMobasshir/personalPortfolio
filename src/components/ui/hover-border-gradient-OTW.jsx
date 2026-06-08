"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { easeInOut, motion } from "motion/react";

export default function HoverBorderGradientOTW({children}) {
  return (
    <motion.div  
    initial={
      {
        opacity : 0,
        x : 200,
        filter : "blur(10px)"
      }
    }

    animate={{
      opacity : 1,
      x : 0,
      filter : "blur(0px)"
    }}

    transition={{
        delay : 0.6,
        duration: 1,
        ease : easeInOut
    }}
    >

    <HoverBorderGradient
      containerClassName="rounded-full shadow-lg shadow-orange-500/10"
      as="div"
      className="flex cursor-default items-center gap-2 select-none bg-white px-3 py-1 text-[10px] font-medium tracking-[0.22em] text-black dark:bg-black dark:text-white sm:px-4 sm:text-xs">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
      <span>{children}</span>
    </HoverBorderGradient>
    </motion.div>
  );
}
