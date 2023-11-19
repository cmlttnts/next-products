
// for desktop view, it will span across top of page

import { Button } from "@/components/ui/button";
import Link from "next/link";

// for mobile view, it will be a hamburger menu
export default function Nav() {

    return (
        <div className="md:w-2/5">
            <div className="flex flex-row justify-center items-center gap-8">
                <Button variant="outline">
                    <Link href="/" >
                    Oturum Aç
                    </Link>
                </Button>
                <Button variant="default">
                    <Link href="/" >
                    Ücretsiz Dene
                    </Link>
                </Button>
            </div>
        </div>
    );

}