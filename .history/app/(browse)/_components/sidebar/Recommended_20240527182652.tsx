"use client";

import { User } from "@prisma/client";
import React from "react";

interface RecommendedProps {
  data: User[];
}

export const Recommended: React.FC<RecommendedProps> = ({ data }) => {
  return <div>Hii</div>;
};
