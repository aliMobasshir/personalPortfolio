

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import InvertButton from  "@/components/ui/invert-button";
import ThemeToggle from "@/components/theme/ThemeToggle";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function NotchNav({ initialTheme }) {
  const links = [
  
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/md-mobasshir-ali/",
    },
    {
      title: "GitHub",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/aliMobasshir",
    },
     {
      title: "LeetCode",
      icon: (
        <SiLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/aliMobasshir/",
    },
     {
      title: "Theme",
      custom: true,
      icon: (
        <ThemeToggle initialTheme={initialTheme} />
      ),
      href: "#",
    },
     {
      title: "My Resume",
      custom: true,
      icon: (
        <InvertButton  >MY RESUME</InvertButton>
      ),
      href: "https://drive.google.com/file/d/1spChLuvi4CkjIC2_lyObz_e6TG73vhAF/view?usp=drivesdk",
    },
  ];
  return (
    <div className="fixed inset-x-0 top-4 z-10 flex justify-center px-4 sm:top-6">
      <FloatingDock
        
        items={links} />
    </div>
  );
}
