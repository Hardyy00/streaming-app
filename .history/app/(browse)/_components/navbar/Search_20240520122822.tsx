"use client";

import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search: React.FC = () => {
  return (
    <form
      className="relative w-full lg:w-[400px] flex items-center"
      onSubmit={() => {}}
    >
      <Input placeholder="Search" className="rounded-md" />
    </form>
  );
};

export default Search;
