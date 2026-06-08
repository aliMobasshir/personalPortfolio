"use client"
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({children}){
    useEffect(() => {
     const lenis = new Lenis({
        duration : 1.2,
        smoothWheel : true,
     })

     function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}


    const rafId = requestAnimationFrame(raf);

      return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
    }, [])
    

    return children;
}