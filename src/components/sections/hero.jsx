"use client"
import React from 'react'
import InvertButton from '../ui/invert-button'
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { easeInOut, motion } from 'motion/react';
import { Particles } from '../ui/particles';
import HoverBorderGradientOTW from '../ui/hover-border-gradient-OTW';
import { usePageRestore } from '@/lib/use-page-restore';
import Link from 'next/link';

const variants = {
  hidden : {
    opacity : 0,
    y : 50,
  },
  visible : {
    opacity : 1,
    y : 0,
     transition : {
    duration : 0.5,
    ease: easeInOut
  }
  }
}

const Hero = () => {
  const restored = usePageRestore();

  return (
    
    <section id="hero"
      className="
        relative
        flex
        flex-col
        justify-center
        min-h-[100svh]
        w-full
        px-5
        pt-28
        pb-16
        sm:px-10
        sm:pt-32
        lg:px-28
        tracking-wide
        overflow-hidden
      "
    >
      <Particles
        className="absolute inset-0 bg-transparent pointer-events-none"
        quantity={150}
        color="#f97316"
      />

      <div className='absolute right-4 bottom-6 sm:right-8 sm:bottom-8 lg:right-12 lg:bottom-10'>
        <HoverBorderGradientOTW>
          OPEN TO WORK
        </HoverBorderGradientOTW>
       
        </div>

      <motion.div
      variants={variants}
      initial={restored ? false : "hidden"}
      animate={restored ? "visible" : undefined}
      whileInView="visible"
      className="relative z-10"
      >
      <h2
        className="
          text-3xl
          sm:text-4xl
          lg:text-6xl
          text-neutral-700 
        "
      >
        Hey, I am
      </h2>

      <h1

      
     
        className="
          font-extrabold
          text-5xl
          sm:text-6xl
          lg:text-8xl
          text-orange-500
          py-3 sm:py-4
          leading-tight
        "
      >
        Md Mobasshir Ali
      </h1>

      <div
        className="
          text-neutral-700 
          max-w-3xl
          text-lg
          sm:text-xl
          lg:text-2xl
        "
      >
        <LayoutTextFlip
          text="I am a "
          words={["Software Developer", "Frontend Developer", "Backend Developer", "Full-Stack Developer"]}
        />
      </div>

     <Link href="#contact">
     <InvertButton className="mt-8 w-fit text-xs sm:text-sm">
        Contact Me
      </InvertButton></Link> 

      
      </motion.div>

    </section>
  )
}

export default Hero
