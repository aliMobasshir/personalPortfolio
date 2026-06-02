"use client"
import React from 'react'
import ThreeDCardImplemented from '../ui/3d-card-implementation'
import { easeInOut, motion } from 'motion/react'
import { usePageRestore } from '@/lib/use-page-restore'

const Projects = () => {
  const restored = usePageRestore();

  const containerVariant = {
    hidden : {},
    visible : {
      transition : {
        staggerChildren : 0.1,
        delayChildren : 0.1
      }
    }
  }

  const itemVariant = {
    hidden : {opacity : 0,
        y : 50,
        filter : "blur(10px)"},
    visible : {
     opacity : 1,
        y : 0,
        filter : "blur(0px)",
        transition : { 
          duration : 0.3,
          ease: easeInOut
      }
  }
  }

  const revealProps = restored
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 } }

  return (
     <section id='projects'
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
      <motion.div variants={containerVariant} {...revealProps} className="flex items-center gap-3 sm:gap-6 ">
        <motion.h1 variants={itemVariant}
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
          Projects
        </motion.h1>

        <motion.span variants={itemVariant} className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700 sm:h-[2px]" />
      </motion.div>
      <ThreeDCardImplemented/>
      </section>
  )
}

export default Projects
