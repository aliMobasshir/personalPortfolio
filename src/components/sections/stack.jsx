"use client"
import React from 'react'
import { frontend , backend , tools , skills } from '../data/stackdata'
import InfiniteMarquee from '../ui/infinite-marquee'
import { easeIn, easeInOut, motion } from 'motion/react'
import { usePageRestore } from '@/lib/use-page-restore'

const Stack = () => {const restored = usePageRestore();
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
        transition : { 
          duration : 0.3,
          ease:easeInOut
        
      }
  }
}
const revealProps = restored
  ? { initial: false, animate: "visible" }
  : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 } }
  return (
   <section id='skills'
      className="
        flex
        flex-col
        min-h-auto
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
          Stack and skills
        </motion.h1>

        <motion.span variants={itemVariant} className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700 sm:h-[2px]" />
      </motion.div>

<div className='flex justify-center'>
      <div className='relative flex w-full max-w-5xl flex-col gap-4 sm:gap-6'>
         {/* Left fade */}
    <div
      className="
        pointer-events-none
        absolute
        left-0
        top-0
        z-10
        h-full
        w-10 sm:w-20
        bg-gradient-to-r
        from-background
        via-background/40
        to-transparent
      "
    />

    {/* Right fade */}
    <div 
      className="
        pointer-events-none
        absolute
        right-0
        top-0
        z-10
        h-full
        w-10 sm:w-20
        bg-linear-to-l
        from-background
        via-background/40
        to-transparent
      "
    />

       <InfiniteMarquee items={frontend} direction = "left" ></InfiniteMarquee>
       <InfiniteMarquee items={backend} direction = "right" ></InfiniteMarquee>
       <InfiniteMarquee items={tools} direction = "left" ></InfiniteMarquee>
       <InfiniteMarquee items={skills} direction = "right" ></InfiniteMarquee>
      </div>
</div>


      </section>
      )
}

export default Stack
