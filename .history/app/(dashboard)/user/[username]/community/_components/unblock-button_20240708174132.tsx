"use client";

import React, { useTransition } from "react";

interface UnblockButtonProps {
  userId: string;
}

const UnblockButton: React.FC<UnblockButtonProps> = ({ userId }) => {
  const [isPending, startTransition] = useTransition();
  return <div></div>;
};

export default UnblockButton;
