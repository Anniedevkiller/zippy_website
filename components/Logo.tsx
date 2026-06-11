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
        <rect width="500" height="500" rx="90" fill="#CC5500" />
      )}

      {/* Symmetrical white stair ribbons */}
      <g>
        {/* ROW 1 */}
        {/* Left ribbon */}
        <path
          d={`M 60,${180 + dy} L 110,${180 + dy} L 190,${120 + dy} L 244,${120 + dy} L 244,${165 + dy} L 190,${165 + dy} L 110,${225 + dy} L 60,${225 + dy} Z`}
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
        {/* Right ribbon */}
        <path
          d={`M 256,${120 + dy} L 310,${120 + dy} L 390,${60 + dy} L 440,${60 + dy} L 440,${105 + dy} L 390,${105 + dy} L 310,${165 + dy} L 256,${165 + dy} Z`}
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />

        {/* ROW 2 */}
        {/* Left ribbon */}
        <path
          d={`M 60,${280 + dy} L 110,${280 + dy} L 190,${220 + dy} L 244,${220 + dy} L 244,${265 + dy} L 190,${265 + dy} L 110,${325 + dy} L 60,${325 + dy} Z`}
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
        {/* Right ribbon */}
        <path
          d={`M 256,${220 + dy} L 310,${220 + dy} L 390,${160 + dy} L 440,${160 + dy} L 440,${205 + dy} L 390,${205 + dy} L 310,${265 + dy} L 256,${265 + dy} Z`}
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />

        {/* ROW 3 */}
        {/* Left ribbon */}
        <path
          d={`M 60,${380 + dy} L 110,${380 + dy} L 190,${320 + dy} L 244,${320 + dy} L 244,${365 + dy} L 190,${365 + dy} L 110,${425 + dy} L 60,${425 + dy} Z`}
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
        {/* Right ribbon */}
        <path
          d={`M 256,${320 + dy} L 310,${320 + dy} L 390,${260 + dy} L 440,${260 + dy} L 440,${305 + dy} L 390,${305 + dy} L 310,${365 + dy} L 256,${365 + dy} Z`}
          fill={showBackground ? "#FFFFFF" : "#CC5500"}
        />
      </g>
    </svg>
  );
}
