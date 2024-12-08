import React, { useState, useEffect } from "react";


const TypewriterEffect = () => {
  const mistakenText = "npm i dev-job@latest-2025";
  const correctText = "Thank's for visiting, Let's get started";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingSecondText, setIsTypingSecondText] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  //  blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Adjust blink speed here
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing & deleting 
  useEffect(() => {
    if (!isTypingSecondText) {
      const handleTyping = () => {
        if (!isDeleting && charIndex < mistakenText.length) {
          setDisplayedText((prev) => prev + mistakenText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (!isDeleting && charIndex === mistakenText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else if (isDeleting && charIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIsTypingSecondText(true);
        }
      };

      const typingSpeed = isDeleting ? 50 : 100;
      const typingInterval = setInterval(handleTyping, typingSpeed);
      return () => clearInterval(typingInterval);
    }
  }, [charIndex, isDeleting, isTypingSecondText]);

  // typing correct text
  useEffect(() => {
    if (isTypingSecondText) {
      const handleCorrectTyping = () => {
        if (charIndex < correctText.length) {
          setDisplayedText((prev) => prev + correctText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }
      };

      const typingInterval = setInterval(handleCorrectTyping, 100);
      return () => clearInterval(typingInterval);
    }
  }, [charIndex, isTypingSecondText, correctText]);

  return (
    <div className="font-bold ml-5 text-10 smPhone:text-[20px] mb-10" style={{ fontFamily: "monospace", display: "flex" }}>
      <span style={{ color: "purple", marginRight: "5px" }}>{">"}</span>
      <span>{displayedText}</span>
      {showCursor && <span className="cursor" style={{ marginLeft: "2px" }}>|</span>}
    </div>
  );
};

export default TypewriterEffect;
