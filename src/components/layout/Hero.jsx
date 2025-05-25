import Reveal from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="w-[80%] h-[400px] flex flex-col text-center justify-center items-center">
      <Reveal delayProp={0.1}>
        <h1 className="text-[70px] font-bold leading-tight">
          Hi, I'm Miko<strong className="prismo">. </strong>
        </h1>
      </Reveal>
      <Reveal delayProp={0.3} className="mb-2">
        <span className="text-[30px] font-light leading-tight">
          I'm a <span className="prismo">Full Stack Developer</span>{" "}
        </span>
      </Reveal>
      <Reveal delayProp={0.5} className="mb-2 md:mb-4">
        <p className="text-[20px] font-light tracking-wider">I build things for the web.</p>
      </Reveal>
      <Reveal delayProp={0.7} >
        <Button className="bg-prismo">
            PROJECTS
        </Button>
      </Reveal>
    </main>
  );
}
