// for desktop view, it will span across top of page

import { Button } from "@/components/ui/button";
import Link from "next/link";

// TODO: flex-wrap for now, ideally it should be something like hamburger menu
export default function Nav() {
  return (
    <nav className="md:w-3/5">
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {/* Make first link pushed to left */}
        <Button variant="link" className="ml-0 mr-auto text-lg">
          <Link href="/">Acme</Link>
        </Button>
        <Button variant="link">
          <Link href="/products">Ürünler</Link>
        </Button>
        <Button variant="link">
          <Link href="/">Stratejiler</Link>
        </Button>
        <Button variant="link">
          <Link href="/">Plan</Link>
        </Button>
        <Button variant="link">
          <Link href="/">Blog</Link>
        </Button>
        <Button variant="link">
          <Link href="/">Destek</Link>
        </Button>
      </div>
    </nav>
  );
}
