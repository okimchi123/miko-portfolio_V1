import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <AlignJustify color="white" />
      </SheetTrigger>
      <SheetContent side="top" className="">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <ul className="flex justify-center items-center gap-5 tracking-widest text-[16px]">
          <SheetClose asChild>
            <Link href="#start">
            <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">
              Start
            </li>
          </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="#about">
            <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">
              About
            </li>
          </Link>
          </SheetClose>
          
          <SheetClose asChild>
            <Link href="#projects">
            <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">
              Projects
            </li>
          </Link>
          </SheetClose>
          
          <Button
            variant="outline"
            className="block border-prismo active:border-white"
          >
            Resume
          </Button>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
