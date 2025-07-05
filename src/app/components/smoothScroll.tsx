"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
      });
    })();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}