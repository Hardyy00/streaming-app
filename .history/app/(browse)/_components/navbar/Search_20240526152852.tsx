"use client";

import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };
  return (
    <form
      className="relative w-full lg:w-[400px] flex items-center"
      onSubmit={submit}
    >
      <Input
        placeholder="Search"
        className="rounded-[5px] rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      {value && <X onClick={onClear} />}
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
