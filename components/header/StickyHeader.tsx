"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";

const HIDE_AFTER_PX = 90;
const SHOW_ON_UP_DELTA = 10;
const SHOW_ON_TOP_HOVER_Y = 48;

export default function StickyHeader() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      const dy = y - lastY.current;

      if (y < HIDE_AFTER_PX) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (dy > 0) {
        setHidden(true);
      } else if (dy < -SHOW_ON_UP_DELTA) {
        setHidden(false);
      }

      lastY.current = y;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY <= SHOW_ON_TOP_HOVER_Y) setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={[
        "fixed top-0 left-0 w-full z-[100]",
        "transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <NavBar />
    </div>
  );
}

