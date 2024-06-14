"use client";

import { Maximize, Minimize } from "lucide-react";

import { Hint } from "@/components/hint";

interface FullscreenControlProps {
  isFullscreen: boolean;
  onToggle: () => void;
}

export const FullscreenControl: React.FC<FullscreenControlProps> = ({
  isFullscreen,
  onToggle,
}) => {
  const Icon = isFullscreen ? Minimize : Maximize;

  const label = isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint></Hint>
    </div>
  );
};
