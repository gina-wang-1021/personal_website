import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setDirection(y > lastY ? "down" : "up");
      lastY = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}
