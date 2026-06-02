"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const getTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme, persist = true) => {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
  if (persist) {
    window.localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
  }
};

export default function ThemeToggle() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    applyTheme(getTheme(), false);

    const handleChange = (event) => {
      if (window.localStorage.getItem("theme")) {
        return;
      }

      const nextTheme = event.matches ? "dark" : "light";
      applyTheme(nextTheme, false);
      document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/30 bg-background/80 text-foreground backdrop-blur-xl transition-colors hover:bg-orange-500/10"
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="block dark:hidden" />
    </button>
  );
}
