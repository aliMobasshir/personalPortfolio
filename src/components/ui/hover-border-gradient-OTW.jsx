"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function HoverBorderGradientOTW({children}) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full shadow-lg shadow-orange-500/10"
      as="div"
      className="flex cursor-default items-center gap-2 select-none bg-white px-3 py-1 text-[10px] font-medium tracking-[0.22em] text-black dark:bg-black dark:text-white sm:px-4 sm:text-xs">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
      <span>{children}</span>
    </HoverBorderGradient>
  );
}
