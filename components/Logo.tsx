"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showBackground?: boolean;
}

export default function Logo({ className, size = 32, showBackground = true }: LogoProps) {
  // Center alignment offset
  const dy = 7.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0 transition-transform duration-300", className)}
    >
      {/* Primary Orange Background Square */}
      {showBackground && (
        <rect width="500" height="500" fill="#CC5500" />
      )}

      {/* Symmetrical white stair ribbons */}
      <g>
        {/* ROW 1 */}
        {/* Left ribbon */}
        <path
          d="M 60,187.5 L 110,187.5 L 190,127.5 L 244,127.5 L 244,172.5 L 190,172.5 L 110,232.5 L 60,232.5 Z"
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
        {/* Right ribbon */}
        <path
          d="M 256,127.5 L 310,127.5 L 390,67.5 L 440,67.5 L 440,112.5 L 390,112.5 L 310,172.5 L 256,172.5 Z"
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />

        {/* ROW 2 */}
        {/* Left ribbon */}
        <path
          d="M 60,287.5 L 110,287.5 L 190,227.5 L 244,227.5 L 244,272.5 L 190,272.5 L 110,332.5 L 60,332.5 Z"
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
        {/* Right ribbon */}
        <path
          d="M 256,227.5 L 310,227.5 L 390,167.5 L 440,167.5 L 440,212.5 L 390,212.5 L 310,272.5 L 256,272.5 Z"
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />

        {/* ROW 3 */}
        {/* Left ribbon */}
        <path
          d="M 60,387.5 L 110,387.5 L 190,327.5 L 244,327.5 L 244,372.5 L 190,372.5 L 110,432.5 L 60,432.5 Z"
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
        {/* Right ribbon */}
        <path
          d="M 256,327.5 L 310,327.5 L 390,267.5 L 440,267.5 L 440,312.5 L 390,312.5 L 310,372.5 L 256,372.5 Z"
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
      </g>
    </svg>
  );
}
