import React from "react";

interface NavItemProps {
  label: string;
  href: string;
  isActive :boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ label, href, isActive }) => {
  return <div>{label}</div>;
};
