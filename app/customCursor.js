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

  const [socialHovered, setSocialHovered] = useState(false);
  useEffect(() => {
    const handleDivHoverEvents = () => {
      const socialLink = document.getElementById("social-link");
      if (socialLink) {
        socialLink.addEventListener("mouseover", () => setSocialHovered(true));
        socialLink.addEventListener("mouseout", () => setSocialHovered(false));
      }
    };

    handleDivHoverEvents(); // Add event listeners on mount
    return () => {
      // Clean up: Remove event listeners on unmount
      const socialLink = document.getElementById("social-link");
      if (socialLink) {
        socialLink.removeEventListener("mouseover", () => setSocialHovered(true));
        socialLink.removeEventListener("mouseout", () => setSocialHovered(false));
      }
    };
  });

  const [emailHovered, setEmailHovered] = useState(false);
  useEffect(() => {
    const handleDivHoverEvents = () => {
      const emailLink = document.getElementById("email-button");
      if (emailLink) {
        emailLink.addEventListener("mouseover", () => setEmailHovered(true));
        emailLink.addEventListener("mouseout", () => setEmailHovered(false));
      }
    };

    handleDivHoverEvents(); // Add event listeners on mount
    return () => {
      // Clean up: Remove event listeners on unmount
      const emailLink = document.getElementById("email-button");
      if (emailLink) {
        emailLink.removeEventListener("mouseover", () => setEmailHovered(true));
        emailLink.removeEventListener("mouseout", () => setEmailHovered(false));
      }
    };
  });

  const [phoneHovered, setPhoneHovered] = useState(false);
  useEffect(() => {
    const handleDivHoverEvents = () => {
      const phoneLink = document.getElementById("phone-button");
      if (phoneLink) {
        phoneLink.addEventListener("mouseover", () => setPhoneHovered(true));
        phoneLink.addEventListener("mouseout", () => setPhoneHovered(false));
      }
    };

    handleDivHoverEvents(); // Add event listeners on mount
    return () => {
      // Clean up: Remove event listeners on unmount
      const phoneLink = document.getElementById("phone-button");
      if (phoneLink) {
        phoneLink.removeEventListener("mouseover", () => setPhoneHovered(true));
        phoneLink.removeEventListener("mouseout", () => setPhoneHovered(false));
      }
    };
  });

  const [journalHovered, setJouralHovered] = useState(false);
  useEffect(() => {
    const handleDivHoverEvents = () => {
      const journal = document.getElementById("journal-div");
      if (journal) {
        journal.addEventListener("mouseover", () => setJouralHovered(true));
        journal.addEventListener("mouseout", () => setJouralHovered(false));
      }
    };

    handleDivHoverEvents(); // Add event listeners on mount
    return () => {
      // Clean up: Remove event listeners on unmount
      const journal = document.getElementById("journal-div");
      if (journal) {
        journal.removeEventListener("mouseover", () => setJouralHovered(true));
        journal.removeEventListener("mouseout", () => setJouralHovered(false));
      }
    };
  });

  const [bigButtonHovered, setBigButtonHovered] = useState(false);
  useEffect(() => {
    const handleDivHoverEvents = () => {
      const bigButton = document.getElementById("big-button");
      if (bigButton) {
        bigButton.addEventListener("mouseover", () => setBigButtonHovered(true));
        bigButton.addEventListener("mouseout", () => setBigButtonHovered(false));
      }
    };

    handleDivHoverEvents(); // Add event listeners on mount
    return () => {
      // Clean up: Remove event listeners on unmount
      const bigButton = document.getElementById("big-button");
      if (bigButton) {
        bigButton.removeEventListener("mouseover", () => setBigButtonHovered(true));
        bigButton.removeEventListener("mouseout", () => setBigButtonHovered(false));
      }
    };
  });

  const cursorClasses = `cursor ${clicked ? "cursor--clicked" : ""} ${
    hidden ? "cursor--hidden" : ""
  } ${linkHovered ? "cursor--link-hovered" : ""} ${socialHovered ? "cursor--social-hovered" : ""} ${
    emailHovered ? "cursor--email-hovered" : ""
  } ${phoneHovered ? "cursor--phone-hovered" : ""} ${
    journalHovered ? "cursor--journal-hovered" : ""
  } ${bigButtonHovered ? "cursor--big-button-hovered" : ""}`;

  return (
    <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }} />
  );
}
