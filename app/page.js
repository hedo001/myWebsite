
'use client';
import About from "@/src/About";
import Hello from "@/src/Onboarding";
import { useState } from "react";

export default function Home() {
  const [show , setShow] = useState(false);
  const isOnboarding = localStorage.getItem("onboarding");
  if (isOnboarding === "flase" || isOnboarding === null ) {
    return <Hello setShow={setShow} />;
  }
  
  return <About />;
}
