"use client";

import { Volume1, Volume2, VolumeX } from "lucide-react";

import { Hint } from "@/components/hint";
import { Slider } from "../ui/slider";

interface VolumeControlProps {
  onToggle: () => void;
  onChange: (value: number) => void;
  value: number;
}

export const VolumeControl: React.FC<VolumeControlProps> = ({
  onChange,
  onToggle,
  value,
}) => {
  return <div>Volume control</div>;
};
