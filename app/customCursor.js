"use client";

import { useState, useEffect, useCallback } from "react";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [divHovered, setDivHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    if (typeof navigator !== "undefined" && !isMobile()) {
      const removeListeners = addEventListeners();
      return removeListeners;
    }
  }, [addEventListeners]);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  useEffect(() => {
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };
    handleLinkHoverEvents();
    return () => {
      document.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("mouseover", () => setLinkHovered(true));
        el.removeEventListener("mouseout", () => setLinkHovered(false));
      });
    };
  }, []);

  useEffect(() => {
    const handleDivHoverEvents = () => {
      const pinkDiv = document.getElementById("pinkDiv");
      console.log(pinkDiv);
      if (pinkDiv) {
        pinkDiv.addEventListener("mouseover", () => setDivHovered(true));
        pinkDiv.addEventListener("mouseout", () => setDivHovered(false));
      }
    };

    handleDivHoverEvents(); // Add event listeners on mount
    console.log(divHovered);
    return () => {
      // Clean up: Remove event listeners on unmount
      const pinkDiv = document.getElementById("PinkDiv");
      if (pinkDiv) {
        pinkDiv.removeEventListener("mouseover", () => setDivHovered(true));
        pinkDiv.removeEventListener("mouseout", () => setDivHovered(false));
      }
    };
  });

  const cursorClasses = `cursor ${clicked ? "cursor--clicked" : ""} ${
    hidden ? "cursor--hidden" : ""
  } ${linkHovered ? "cursor--link-hovered" : ""} ${divHovered ? "cursor--div-hovered" : ""}`;

  return (
    <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
  );
}
