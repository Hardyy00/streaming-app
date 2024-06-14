"use client";

import { Maximize, Minimize } from "lucide-react";

import { Hint } from "@/components/hint";

interface FullscreenControlProps {
  isFullscreen: boolean;
  onToggle: () => void;
}
