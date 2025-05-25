import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <nav className="sticky top-0 flex w-[80%] dark bg-background items-center justify-between py-5">
      <h1 className="font-medium text-[20px]">MIKO BASILIO</h1>
      <ul className="hidden md:flex gap-5 tracking-widest text-[18px]">
        <li>About</li>
        <li>Projects</li>
        <li>Experience</li>
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
