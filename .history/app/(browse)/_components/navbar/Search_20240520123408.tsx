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
      <Input
        placeholder="Search"
        className="rounded-md rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <Button
        className="rounded-l-none"
        type="submit"
        size="sm"
        variant="secondary"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
