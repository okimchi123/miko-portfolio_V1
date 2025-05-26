import Reveal from "../motion/reveal";

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
    <section className="h-[400] md:h-fit py-8 border w-[80%] gap-5 flex flex-col md:flex-row items-start">
      <Reveal delayProp={0.2} className="w-full">
        <article>
          <h1 className="header mt-1">
            About <strong className="prismo"> me </strong>
          </h1>
          <p className="text-justify font-light">
            I'm a Web Developer with a strong passion for crafting simple but
            engaging web experience, particularly on the <strong className="prismo font-medium">Frontend</strong>. I enjoy
            turning ideas into working websites, and I'm always set on finishing
            projects well using modern tools for great results.
          </p>
        </article>
      </Reveal>

      <Reveal delayProp={0.2} className="w-full">
        <div className="flex flex-col justify-start gap-2">
          <h1 className="header">Skills</h1>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((item) => (
              <figure key={item} className="text-[15px] bg-pink-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 flex px-3 py-2 items-center justify-center ">
                {item}
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
