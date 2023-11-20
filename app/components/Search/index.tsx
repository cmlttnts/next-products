"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useId, useState } from "react";
import type { FormEvent } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const id = useId();
  const [str, setStr] = useState(searchParams.get("q") || "");
  function handleSearch(str: string) {
    setStr(str);
  }

  function handleSearchButton(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (str === "") {
      params.delete("q");
    } else {
      params.set("q", str);
    }
    replace(`${pathname}?${params}`);
  }

  return (
    <form
      className="flex sm:flex-row flex-col  gap-2 justify-center items-center"
      onSubmit={handleSearchButton}
    >
      <label htmlFor={`search-${id}`}></label>
      <input
        type="text"
        id={`search-${id}`}
        className="border-2 border-gray-300 rounded-md p-2"
        placeholder="Ara..."
        value={str}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button className="bg-violet-700 w-max pl-5 pr-5" type="submit">
        Ara
      </Button>
    </form>
  );
}
