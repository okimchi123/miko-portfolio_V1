import Reveal from "../motion/reveal";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  const skills = [
    "NextJS",
    "ReactJS",
    "Javascript",
    "Tailwind",
    "Figma",
    "UI/UX",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Firebase",
    "REST API",
  ];
  return (
    <section className="h-fit border md:h-[500px] py-20 md:py-8 w-[90%] md:w-[80%] gap-20 md:gap-20 flex flex-col md:flex-row items-center">
      <Reveal delayProp={0.2} className="w-full">
        <article>
          <h1 className="header mt-1">
            About <strong className="prismo"> me </strong>
          </h1>
          <p className="text-justify font-light mb-4">
            I'm a Web Developer with a strong passion for crafting simple but
            engaging web experience, particularly on the{" "}
            <strong className="prismo font-medium">Frontend</strong>. I enjoy
            turning ideas into working websites, and I'm always set on finishing
            projects well using{" "}
            <strong className="prismo font-medium">modern tools</strong> for
            great results.
          </p>
          <figure className="flex gap-3">
            <Link href="https://github.com/okimchi123" target="_blank">
              <Image
                src="/github.svg"
                width="35"
                height="35"
                alt="github"
                className=""
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/miko-basilio-251348361/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                width="40"
                height="40"
                alt="linkedin"
                className=""
              />
            </Link>
          </figure>
        </article>
      </Reveal>

      <Reveal delayProp={0.2} className="w-full">
        <div className="flex flex-col justify-start gap-2">
          <h1 className="header">Skills</h1>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((item) => (
              <figure
                key={item}
                className="text-[15px] bg-pink-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 flex px-3 py-2 items-center justify-center "
              >
                {item}
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
