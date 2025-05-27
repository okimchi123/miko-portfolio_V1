import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavMotion from "@/components/motion/navmotion";

export default function NavBar() {
  return (
    <nav className="sticky top-0 flex w-[90%] md:w-[80%] dark bg-background select-none items-center justify-between py-5">
      <NavMotion />
      <h1 className="font-medium text-[18px] tracking-widest cursor-pointer">MIKO BASILIO</h1>
      <ul className="hidden md:flex gap-5 tracking-widest text-[16px]">
        <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">About</li>
        <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">Projects</li>
        <li className="cursor-pointer hover:-translate-y-1 transition-all hover:prismo">Experience</li>
      </ul>

      <Button
        variant="outline"
        className="hidden md:block border-prismo active:border-white"
      >
        Resume
      </Button>

      <AlignJustify color="white" className="md:hidden" />
    </nav>
  );
}
