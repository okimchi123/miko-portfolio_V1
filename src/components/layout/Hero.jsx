import Reveal from "@/components/motion/reveal";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="w-[80%] flex flex-col text-center items-center py-5">
      <Reveal>
        <h1 className="text-[70px] font-bold leading-tight">
          Hi, I'm Miko<strong className="prismo">. </strong>
        </h1>
      </Reveal>
      <Reveal className="mb-2">
        <span className="text-[30px] font-light leading-tight">
          I'm a <span className="prismo">Full Stack Developer</span>{" "}
        </span>
      </Reveal>
      <Reveal className="mb-2 md:mb-4">
        <p className="text-[20px] font-light tracking-wider">I build things for the web.</p>
      </Reveal>
      <Reveal>
        <Button className="bg-prismo">
            PROJECTS
        </Button>
      </Reveal>
    </main>
  );
}
