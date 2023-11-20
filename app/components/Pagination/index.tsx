"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  page,
  limit,
  total,
}: {
  page: string;
  limit: number;
  total: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const pageNumber = Number(page);

  const handlePrev = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(pageNumber - 1));
    replace(`${pathname}?${params}`);
  };
  const handleNext = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(Number(page) + 1));
    replace(`${pathname}?${params}`);
  };
  const isPrevDisabled = pageNumber === 1;
  const isNextDisabled = pageNumber * limit >= total;

  const startingItem = total > 0 ? (pageNumber - 1) * limit + 1 : 0;
  const endingItem = total > 0 ? Math.min(pageNumber * limit, total) : 0;

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
