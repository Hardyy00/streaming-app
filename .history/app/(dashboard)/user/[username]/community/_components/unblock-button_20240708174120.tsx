"use client";

import React, { useTransition } from "react";

interface UnblockButtonProps {
  userId: string;
}

const UnblockButton: React.FC<UnblockButtonProps> = ({ userId }) => {
  const [] = useTransition();
  return <div></div>;
};

export default UnblockButton;
