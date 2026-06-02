"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { projectsdata } from "../data/projectsdata";
import { easeInOut, motion, AnimatePresence } from "motion/react";
import { usePageRestore } from "@/lib/use-page-restore";

const TECH_ICONS = {
  React:             { icon: "https://cdn.simpleicons.org/react/61DAFB",         bg: "#20232a" },
  "Node.js":         { icon: "https://cdn.simpleicons.org/nodedotjs/339933",     bg: "#1a2a1a" },
  Express:           { icon: "https://cdn.simpleicons.org/express/ffffff",       bg: "#1a1a1a" },
  MongoDB:           { icon: "https://cdn.simpleicons.org/mongodb/47A248",       bg: "#1a2a1a" },
  JWT:               { icon: "https://cdn.simpleicons.org/jsonwebtokens/FB015B", bg: "#1a0a10" },
  bcrypt:            { icon: "https://cdn.simpleicons.org/letsencrypt/003A70",   bg: "#0a1020" },
  Next:              { icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",     bg: "#111111" },
  "Next.js":         { icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",     bg: "#111111" },
  TypeScript:        { icon: "https://cdn.simpleicons.org/typescript/3178C6",    bg: "#0a1a2a" },
  Tailwind:          { icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",   bg: "#0a1a20" },
  "Gemini SDK":      { icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",  bg: "#1a1525" },
  Appwrite:          { icon: "https://cdn.simpleicons.org/appwrite/FD366E",      bg: "#1a0510" },
  "Spoonacular API": { icon: "https://cdn.simpleicons.org/leaflet/199900",       bg: "#0f1a0a" },
};

function HackathonBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Trophy icon */}
      <motion.div
        animate={{
          scale: hovered ? 1.2 : 1,
          rotate: hovered ? [0, -12, 12, -8, 8, 0] : 0,
        }}
        transition={{
          scale: { duration: 0.2 },
          rotate: { duration: 0.5, ease: easeInOut },
        }}
        className="cursor-default text-base select-none"
      >
        🏆
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -6, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -6, scale: 0.9 }}
            transition={{ duration: 0.2, ease: easeInOut }}
            className="absolute left-7 top-1/2 z-50 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-neutral-900 px-3 py-1 shadow-lg shadow-yellow-500/10">
              <span className="text-[10px] font-semibold tracking-wide text-yellow-400">
                Won Hackathon
              </span>
            </div>
            {/* Arrow pointing left */}
            <div className="absolute left-0 top-1/2 -translate-x-1.5 -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TechBadge({ tech, index, hoveredIndex, setHoveredIndex }) {
  const meta = TECH_ICONS[tech] ?? { icon: null, bg: "#1f1f1f" };
  const abbr = tech.replace(/[^A-Z0-9]/gi, "").slice(0, 2).toUpperCase();
  const isExpanded = hoveredIndex === index;

  return (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      animate={{
        zIndex: isExpanded ? 20 : 10 - index,
        x: isExpanded ? 4 : 0,
        scale: isExpanded ? 1.08 : 1,
      }}
      transition={{ duration: 0.25, ease: easeInOut }}
      style={{
        marginLeft: index === 0 ? 0 : -12,
        position: "relative",
        zIndex: isExpanded ? 20 : 10 - index,
      }}
      className="flex-shrink-0"
    >
      <motion.div
        animate={{ width: isExpanded ? "auto" : 28 }}
        transition={{ duration: 0.3, ease: easeInOut }}
        className="flex h-7 items-center gap-1.5 overflow-hidden rounded-full border border-white/10 px-1"
        style={{ backgroundColor: meta.bg, minWidth: 28 }}
      >
        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
          {meta.icon ? (
            <img src={meta.icon} alt={tech} className="h-3.5 w-3.5 object-contain" />
          ) : (
            <span className="text-[8px] font-bold text-white">{abbr}</span>
          )}
        </div>
        <motion.span
          animate={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.2, ease: easeInOut }}
          className="overflow-hidden whitespace-nowrap pr-1.5 text-[10px] font-medium text-white/80"
        >
          {tech}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

function TechStackRow({ techStack }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex items-center">
      {techStack.map((tech, i) => (
        <TechBadge
          key={tech}
          tech={tech}
          index={i}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}

export default function ThreeDCardImplemented() {
  const restored = usePageRestore();
  const revealProps = restored
    ? { initial: false, animate: "visible" }
    : {
        initial: { opacity: 0, y: 100, filter: "blur(10px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, amount: 0.3 }
      };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {projectsdata.map((item) => (
        <motion.div
          key={item.title}
          {...revealProps}
          transition={{ duration: 0.6, ease: easeInOut }}
        >
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-full max-w-[22rem] border border-black/[0.1] bg-gray-50 p-4 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] sm:max-w-[30rem] sm:p-6">

              {/* Title row with optional trophy */}
              <CardItem translateZ="50" className="flex items-center gap-2">
                <span className="text-lg font-bold text-orange-500 sm:text-xl">
                  {item.title}
                </span>
                {item.hackathonWin && <HackathonBadge />}
              </CardItem>

              <CardItem as="p" translateZ="60" className="mt-2 max-w-sm text-xs text-neutral-500 dark:text-neutral-300 sm:text-sm">
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="mt-4 w-full">
                <Image
                  src={item.preview}
                  height={1000}
                  width={1000}
                  className="h-44 w-full rounded-xl object-cover group-hover/card:shadow-xl sm:h-60"
                  alt={`${item.title} preview`}
                />
              </CardItem>

              <div className="mt-8 flex items-center justify-between sm:mt-10">
                <CardItem translateZ={20}>
                  <TechStackRow techStack={item.techStack} />
                </CardItem>

                <div className="flex items-center gap-1 sm:gap-2">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={item.github}
                    target="__blank"
                    className="rounded-xl px-3 py-2 text-[11px] font-normal sm:px-4 sm:text-xs"
                  >
                    Github
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={item.live}
                    target="__blank"
                    className="rounded-xl bg-black px-3 py-2 text-[11px] font-bold text-orange-500 dark:border-2 dark:border-orange-500 sm:px-4 sm:text-xs"
                  >
                    Live
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  );
}