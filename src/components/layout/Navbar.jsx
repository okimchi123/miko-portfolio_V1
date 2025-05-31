import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavMotion from "@/components/motion/navmotion";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="z-1000 sticky -top-0.5 flex w-[91%] md:w-[81%] dark bg-background select-none items-center justify-between py-5">
      <NavMotion />
      <Link href="#start">
      <h1 className="font-medium text-[18px] tracking-widest cursor-pointer">
        MIKO BASILIO
      </h1>
      </Link>
      
      <ul className="hidden md:flex justify-center items-center gap-5 tracking-widest text-[16px]">
        <Link href="#about">
          <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">
            About
          </li>
        </Link>
        <Link href="#projects">
          <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">
            Projects
          </li>
        </Link>
        <Button
        variant="outline"
        className="hidden md:block border-prismo active:border-white"
      >
        Resume
      </Button>
      </ul>

      

      <AlignJustify color="white" className="md:hidden" />
    </nav>
  );
}
