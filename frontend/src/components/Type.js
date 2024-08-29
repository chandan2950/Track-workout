import { useEffect, useState } from "react";
import { cn } from "../lib/utils"; // Corrected import path

export default function TypingAnimation({ text, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        // Reset the animation
        setDisplayedText("");
        setI(0);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, text, duration]); // Include `text` in the dependency array to handle text change

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
