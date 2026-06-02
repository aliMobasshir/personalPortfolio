"use client"
import React from 'react'
import { motion } from 'motion/react'


const InfiniteMarquee = ({items,direction = "left",speed = 20}) => {

    const tripled = [...items , ...items , ...items];

  return (
   <div className='overflow-hidden w-full'>
    <motion.div className='flex gap-4 w-max' 
    initial = {{
        x : direction === "left" ? "0%" : "-33.33%"
    }}
    animate={{
        x : direction === "left" ? "-33.33%" : "0%"
    }}

    transition = {{
        duration : speed,
        ease : "linear",
        repeat : Infinity
    }}
    >
       {tripled.map((item , i) => {
        return (
            <div key={i} className='skill-pill shrink-0 whitespace-nowrap border border-white/10 bg-white/10 px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm backdrop-blur-xl shadow-lg shadow-black/20'>{item}</div>
        )
       })} 
        
    </motion.div>
   </div>
  )
}

export default InfiniteMarquee
