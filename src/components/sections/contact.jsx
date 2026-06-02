import React from 'react'
import Link from 'next/link'
import { Mail } from "lucide-react";
import { Particles } from '../ui/particles';


const Contact = () => {
  return (
    <section id='contact'
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        min-h-[100svh]
        w-full
        px-6
        sm:px-10
        lg:px-28
        tracking-wide
        gap-12
        sm:gap-24
        mt-18
        sm:mt-24
        lg:mt-36
        py-16
        flex-nowrap
      "
    >

      <Particles
              className="absolute inset-0 bg-transparent pointer-events-none"
              quantity={75}
              color="#f97316"
            />

      <h1 className='
        relative
            font-extrabold
            text-4xl
            sm:text-5xl
            sm:text-6xl
            lg:text-9xl
            text-neutral-800
            text-center
            whitespace-normal
            break-words
            px-2
          
  '>CONTACT

        <div className='absolute
bottom-0
w-full
h-full
bg-linear-to-t
from-background
via-background/40
to-transparent
'>

        </div>
      </h1>


      <div className='flex flex-col gap-6 items-center justify-center'>

        <h2 className='text-sm md:text-lg lg:text-xl text-neutral-800 dark:text-neutral-300 max-w-2xl text-center break-words tracking-[0.18em] font-poiret font-bold'>
          Shoot me an email if you want to connect! You can also find me on <Link className='text-orange-500' href={"https://www.linkedin.com/in/md-mobasshir-ali/"} target="_blank" rel="noopener noreferrer">LinkedIn </Link> if that&apos;s more your speed.
        </h2>


        <h1 className='hover:text-orange-500 font-poiret text-lg sm:text-2xl font-bold tracking-[0.12em] break-all text-center'>
          <Link className='flex flex-wrap items-center justify-center gap-2' href={"mailto:mobasshir0001@gmail.com"}><Mail size={24} /> mobasshir0001@gmail.com</Link>
        </h1>
      </div>

    </section>
  )
}

export default Contact
