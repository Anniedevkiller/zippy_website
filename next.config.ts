import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Auto-copy newly uploaded visual guides
const srcDir = "C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\fa3d7e29-b6e0-4de5-a807-09cb34777000";
const destDir = "c:\\Users\\User\\Downloads\\zippywebsite\\zippy_website\\public";

const filesToCopy = [
  { src: "media__1781900552727.jpg", dest: "flyer-5.jpeg" },
  { src: "media__1781900570931.jpg", dest: "flyer-6.jpeg" }
];

filesToCopy.forEach(({ src, dest }) => {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`[ZippyTrail Build] Copied ${src} -> ${dest}`);
    }
  } catch (err) {
    console.error(`[ZippyTrail Build] Failed to copy ${src}:`, err);
  }
});

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
