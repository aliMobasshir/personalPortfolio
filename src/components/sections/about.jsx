"use client"
import React from "react";
import { easeInOut, motion, stagger } from "motion/react";
import { usePageRestore } from "@/lib/use-page-restore";

const About = () => {
const restored = usePageRestore();

const containerVariant = {
  hidden : {},
  visible : {
    transition : {
      staggerChildren : 0.1,
      delayChildren : 0.1,
    }
  }
}

const itemVariant = {
  hidden: {
 opacity : 0,
        y : 50,
        filter : "blur(10px)"
  },
  visible : {
     opacity : 1,
        y : 0,
        filter : "blur(0px)",
        transition : { duration : 0.3,
        ease : easeInOut,}
  }
}
const paragraphVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const revealProps = restored
  ? { initial: false, animate: "visible" }
  : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 } };

  return (
    <section id="about"
      className="
        flex
        flex-col
        w-full
        px-5
        sm:px-10
        lg:px-28
        tracking-wide
        gap-10
        sm:gap-16
        lg:gap-24
        mt-16 sm:mt-28 lg:mt-40
      "
    >
      {/* Heading */}
      <motion.div 
     variants={containerVariant}
     {...revealProps}
      className="flex items-center gap-3 sm:gap-6 ">
        <motion.h1
          variants={itemVariant}
          className="
            font-extrabold
            text-3xl
            sm:text-4xl
            lg:text-6xl
            text-orange-500
            whitespace-nowrap
            px-2
          "
        >
          About Me
        </motion.h1>

        <motion.span variants={itemVariant} className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700 sm:h-0.5" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="
          flex
          flex-col
          gap-5
          font-poiret
          text-xl
          sm:text-xl
          lg:text-2xl
          leading-relaxed
          text-neutral-900 dark:text-neutral-200
          font-bold
          dark:font-medium
          px-0
          sm:px-2
          lg:px-20
          max-w-5xl
        "
      >
        <motion.p variants={paragraphVariant}
  {...revealProps}
  >
  <span
    className="
      inline-block
      bg-neutral-200 dark:bg-neutral-800
      text-orange-500
      text-xl
      sm:text-2xl
      lg:text-3xl
      px-2
      py-1
      mr-1
    "
  >
    H
  </span>
  ey! I&apos;m Mobasshir, a full-stack developer from India who enjoys turning ideas
  into products people love using.
</motion.p >

<motion.p variants={paragraphVariant}
  {...revealProps}
  >
  I&apos;m currently pursuing my degree while building web applications with React,
  Next.js, Node.js, and modern backend technologies. I enjoy working across the
  stack, from crafting polished user interfaces to designing scalable backend
  systems.
</motion.p >

<motion.p variants={paragraphVariant}
  {...revealProps}
  >
  I love solving real-world problems through technology and bringing ideas to
  life through code. Whether it&apos;s a social platform, an AI-powered tool, or a
  full-stack application, I&apos;m always excited to build and learn.
</motion.p >

{/* <p>
  Outside of coding, you'll usually find me cooking, exploring new
  technologies, working on side projects, or planning my next project. I'm
  constantly learning and pushing myself to become a better engineer.
</p> */}

<motion.p variants={paragraphVariant}
  {...revealProps}
  >
  I&apos;m graduating in 2026 and actively looking for opportunities to contribute,
  grow, and build meaningful products alongside talented teams.
</motion.p >
      </motion.div>
    </section>
  );
};

export default About;
