"use client";

import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "motion/react";
import { delay } from "motion";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("about");

  const links = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const containerVariant = {
    hidden : {},
    visible : {
      transition : {
           delay : 0.6,
           staggerChildren : 0.1,
           delayChildren : 0.6,
      }
    }
  }

  const itemVariant = {
    hidden : {
      opacity:0,
      x: -20
    },
    visible : {
      opacity : 1,
      x : 0,
      transition : {
        
        duration : 0.3,
        easeInOut
      }
    }
  }


  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay : 0.6,
        duration: 0.3,
        ease: easeInOut,
      }}
      className="
        sticky
        top-0
        hidden
        h-screen
        w-10
        shrink-0
        border-r
        border-border
        bg-neutral-100
        text-neutral-600
        dark:bg-neutral-900
        dark:text-neutral-400
        md:block
        lg:w-12
      "
    >
      <motion.ul
      variants={containerVariant}
     initial = "hidden"
     animate = "visible"
        className="
          mt-8
          flex
          h-full
          flex-col
          items-center
          justify-evenly
          py-8
        "
      >
        {links.map((link) => (
          <motion.li
          variants={itemVariant}

            key={link.id}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative
              overflow-hidden
              rounded-md
            "
          >
            {activeSection === link.id && (
              <motion.div
                layoutId="active-section"
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  bg-orange-500
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              />
            )}

            <a
              href={link.href}
              className={`
                relative
                z-10
                block
                px-4
                py-2
                text-xs
                tracking-[0.3em]
                [writing-mode:vertical-rl]
                transition-colors
                sm:text-sm
                ${
                  activeSection === link.id
                    ? "text-orange-500"
                    : "hover:text-black dark:hover:text-white"
                }
              `}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
};

export default SideNav;