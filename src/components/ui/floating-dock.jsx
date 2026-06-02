"use client";

import { cn } from "@/lib/utils";
import { delay } from "motion";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
}) => {
  return (
    <FloatingDockDesktop
      items={items}
      className={desktopClassName}
    />
  );
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay : 0.6,
      duration: 0.4,
      staggerChildren: 0.15,
      delayChildren : 0.6
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const FloatingDockDesktop = ({
  items,
  className,
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        `
        mx-auto
        flex
        max-w-full
        items-center
        gap-1.5
        sm:gap-3
        md:gap-4
        h-11
        sm:h-14
        md:h-16
        px-1.5
        sm:px-3
        md:px-4
        rounded-2xl

        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        shadow-lg
        shadow-black/20
        `,
        className
      )}
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={itemVariants}
        >
          <IconContainer
            mouseX={mouseX}
            {...item}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  custom,
}) {
  const ref = useRef(null);
  const isAction = href.startsWith("#");

  const distance = useTransform(mouseX, (val) => {
    const bounds =
      ref.current?.getBoundingClientRect() ?? {
        x: 0,
        width: 0,
      };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [36, 72, 36]
  );

  const heightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [36, 72, 36]
  );

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [18, 36, 18]
  );

  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [18, 36, 18]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      ref={ref}
      style={custom ? {} : { width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        custom
          ? "ml-1 sm:ml-2 relative flex items-center justify-center"
          : "relative flex aspect-square items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-2xl"
      }
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              x: "-50%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: "-50%",
            }}
            exit={{
              opacity: 0,
              y: 2,
              x: "-50%",
            }}
            className="
              absolute
              top-full
              left-1/2
              mt-2
              -translate-x-1/2
              whitespace-nowrap
              rounded-md
              border
              border-border
              bg-card
              px-2
              py-0.5
              text-xs
              text-card-foreground
            "
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={
          custom
            ? {}
            : {
                width: widthIcon,
                height: heightIcon,
              }
        }
        className="flex items-center justify-center text-foreground"
      >
        {icon}
      </motion.div>
    </motion.div>
  );

  if (isAction) {
    return content;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </Link>
  );
}
