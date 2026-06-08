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
        min-h-[85svh]
        sm:min-h-[100svh]
        w-full
        px-5
        sm:px-10
        lg:px-28
        tracking-wide
        gap-12
        sm:gap-24
        mt-12
        sm:mt-24
        lg:mt-36
        py-14
        sm:py-16
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
            text-5xl
            leading-none
            sm:text-6xl
            lg:text-9xl
            text-neutral-800
            text-center
            whitespace-normal
            break-words
            px-2
            sm:px-0
          
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


      <div className='flex flex-col gap-4 sm:gap-6 items-center justify-center max-w-3xl'>

        <h2 className='px-2 text-base leading-relaxed md:text-lg lg:text-xl text-neutral-800 dark:text-neutral-300 max-w-2xl text-center break-words tracking-[0.08em] sm:tracking-[0.18em] font-poiret font-bold'>
          Shoot me an email if you want to connect! You can also find me on <Link className='text-orange-500' href={"https://www.linkedin.com/in/md-mobasshir-ali/"} target="_blank" rel="noopener noreferrer">LinkedIn </Link> if that&apos;s more your speed.
        </h2>


        <h1 className='hover:text-orange-500 font-poiret text-base sm:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.12em] break-words text-center leading-relaxed'>
          <Link className='flex flex-wrap items-center justify-center gap-2' href={"mailto:mobasshir0001@gmail.com"}><Mail size={20} className='sm:size-6' /> mobasshir0001@gmail.com</Link>
        </h1>
      </div>

    </section>
  )
}

export default Contact
