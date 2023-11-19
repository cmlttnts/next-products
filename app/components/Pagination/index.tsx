"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  page,
  limit,
  current,
}: {
  page: string;
  limit: number;
  current: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePrev = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(Number(page) - 1));
    replace(`${pathname}?${params}`);
  };
  const handleNext = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(Number(page) + 1));
    replace(`${pathname}?${params}`);
  };
  const isPrevDisabled = Number(page) === 1;
  const isNextDisabled = current < limit;

  const startingItem = (Number(page) - 1) * limit + 1;
  const endingItem = current !== 0 ? startingItem + current - 1 : startingItem;

  return (
    <div className="flex justify-center items-center">
      <Button
        className="bg-violet-700 w-max pl-5 pr-5"
        disabled={isPrevDisabled}
        onClick={handlePrev}
      >
        Önceki
      </Button>
      <span className="text-lg ml-2 mr-2 font-bold">
        {startingItem} - {endingItem}
      </span>
      <Button
        className="bg-violet-700 w-max pl-5 pr-5"
        disabled={isNextDisabled}
        onClick={handleNext}
      >
        Sonraki
      </Button>
    </div>
  );
}
