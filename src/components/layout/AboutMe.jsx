import Reveal from "../motion/reveal";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  const skills = [
    "NextJS",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Figma",
    "UI/UX",
    "NodeJS",
    "PHP",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "Firebase",
    "REST API",
    "Git",
  ];
  return (
    <section
      id="about"
      className="h-fit md:h-[500px] py-20 md:py-8 w-[90%] md:w-[80%] gap-20 md:gap-20 flex flex-col md:flex-row items-center"
    >
      <Reveal delayProp={0.2} className="w-full">
        <article className="md:mt-[70px] lg:mt-[80px] xl:mt-12">
          <h1 className="header">
            About <strong className="prismo"> me </strong>
          </h1>
          <p className="text-justify font-light mb-3">
            Honestly, I just love making websites. I'm a <strong className="prismo font-medium">Full Stack Developer</strong>
            with a goal of building simple but engaging web applications. I love
            having control over the entire process, using modern tools to ensure
            that what we build is clean for people to use.
          </p>
          <figure className="flex flex-col gap-1">
            <h1 className="header">Links</h1>
            <div className="flex gap-4 md:gap-3">
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
            </div>
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
                className="text-[15px] bg-pink-300 rounded-md bg-opacity-50 flex px-3 py-2 items-center justify-center "
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
