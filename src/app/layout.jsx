import React from 'react'
import { cookies } from 'next/headers'
import NotchNav from '@/components/layout/NotchNav'
import SideNav from '@/components/layout/SideNav'
import SmoothScroll from "@/components/SmoothScroll"
import "./globals.css";
import { Geist, Orbitron, Space_Grotesk , Poiret_One } from "next/font/google";


import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const poiret = Poiret_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poiret"
});

export const metadata = {
    title: "Md Mobasshir Ali Portfolio",
    description: "Portfolio of Md Mobasshir Ali, a Full Stack Developer specializing in React, Next.js, JavaScript, Node.js, and modern web applications. Explore projects, skills, and experience.",
};

const RootLayout = async ({ children }) => {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";
    const isDark = theme === "dark";
    return (

        <html
            lang="en"
            suppressHydrationWarning
            className={cn("font-sans", geist.variable, spaceGrotesk.variable , orbitron.variable, poiret.variable, isDark && "dark")}
            style={{ colorScheme: isDark ? "dark" : "light" }}
        >
            <body className="min-h-screen bg-background text-foreground transition-colors duration-300 ">
            <SmoothScroll>
                <div className='flex min-h-screen'>
                    <SideNav></SideNav>
                    <div className='flex min-w-0 flex-1 flex-col'>
                        <NotchNav initialTheme={theme}></NotchNav>
                        {children}
                    </div>
                </div>
            </SmoothScroll>
            </body>
        </html>

    )
}

export default RootLayout
