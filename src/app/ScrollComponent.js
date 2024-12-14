"use client";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const ScrollComponent = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Ensure LocomotiveScroll recalculates the scroll when the page is loaded
    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, []);

  return null;
};

export default ScrollComponent;
