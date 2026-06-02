"use client";

import { useEffect, useState } from "react";

export function usePageRestore() {
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        setRestored(true);
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return restored;
}
