"use client";

import React, { useState, useEffect } from "react";

interface Props {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
  cursor?: string | React.ReactNode;
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
}

export const TypeWritter = React.memo(
  ({
    text,
    delay = 0,
    speed = 50,
    cursor,
    onComplete,
    component: Component = "div",
    className,
  }: Props) => {
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayText] = useState("");

    useEffect(() => {
      setIsTyping(false);
      setIsComplete(false);
      setCurrentIndex(0);
      setDisplayText("");
    }, [text]);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (delay > 0 && !isTyping) {
        timer = setTimeout(() => {
          setIsTyping(true);
        }, delay);
      } else if (currentIndex < text.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
      } else if (currentIndex === text.length && !isComplete) {
        setIsComplete(true);
        if (onComplete) onComplete();
      }

      return () => clearTimeout(timer);
    }, [isTyping, isComplete, currentIndex, delay, speed, text, isComplete]);

    const renderCursor = () => {
      if (isComplete) return null;

      if (typeof cursor === "string") {
        return <span>{cursor}</span>;
      } else if (React.isValidElement(cursor)) {
        return React.cloneElement(cursor as React.ReactElement, {
          className: `${(cursor as React.ReactElement).props.className || ""}`,
        });
      }
      return <span> | </span>;
    };

    return (
      <Component className={`${className}`}>
        {displayedText}
        {!isComplete ? renderCursor() : null}
      </Component>
    );
  },
);
