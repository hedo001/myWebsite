"use client";

import { useEffect, useState } from "react";
import stl from "./index.module.scss";

export default function Hello({setShow}) {
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(
    typeof window !== "undefined" && localStorage.getItem("onboarding") === "true"
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    localStorage.setItem("onboarding", "true");
    setIsExiting(true);

    // Wait for animation before reload
    setTimeout(() => {
      setIsOnboarding(true);
      setShow(true);
    //   window.location.reload();
    }, 800); // match CSS animation duration
  };

  return (
    <div className={`${stl.Hello} ${isExiting ? stl.fadeOut : ""}`}>
      <div className={`${stl.background} ${showButton ? stl.blurred : ""}`} />
      <div className={stl.content}>
        {showButton && (
          <button onClick={handleClick} className={stl.button}>
            Click to Start
          </button>
        )}
      </div>
    </div>
  );
}
