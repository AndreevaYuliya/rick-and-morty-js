import React, { useEffect, useState, useRef } from "react";

import { SCROLL_TO_TOP_DURATION } from "./constants";

export const useScrollToTop = (
  delay = SCROLL_TO_TOP_DURATION,
  selector = null,
) => {
  const [visible, setVisible] = useState(false);

  const timerRef = useRef();

  useEffect(() => {
    const target = selector ? document.querySelector(selector) : window;

    if (!target) {
      return;
    }

    const getScroll = () => {
      if (selector && target instanceof HTMLElement) {
        return target.scrollTop;
      }

      return window.scrollY;
    };

    const onScroll = () => {
      clearTimeout(timerRef.current);

      setVisible(false);

      if (getScroll() > 0) {
        timerRef.current = setTimeout(() => setVisible(true), delay);
      }
    };

    target.addEventListener("scroll", onScroll);

    return () => {
      target.removeEventListener("scroll", onScroll);

      clearTimeout(timerRef.current);
    };
  }, [delay, selector]);

  const scrollToTop = () => {
    const target = selector ? document.querySelector(selector) : window;

    if (!target) {
      return;
    }

    if (selector && target instanceof HTMLElement) {
      target.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setTimeout(() => setVisible(false), 200);
  };

  return {
    visible,
    scrollToTop,
  };
};
