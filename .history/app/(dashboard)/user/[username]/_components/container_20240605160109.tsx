"use client";

import { useMediaQuery } from "usehooks-ts";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const isSmall = useMediaQuery("(max-width:1024px)");
  return <div>Container</div>;
};
