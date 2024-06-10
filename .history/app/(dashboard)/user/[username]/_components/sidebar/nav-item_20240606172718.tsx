import React from "react";

interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return <div>{label}</div>;
};
