import Reveal from "../motion/reveal";
import Image from "next/image";
import { Link, Code } from "lucide-react";
import NextLink from "next/link";

export default function Projects() {
  const postData = [
    {
      Image: "/healthharmony.png",
      Title: "HealthHarmony",
      Role: "Frontend Developer",
      Description:
        "HealthHarmony is an information management system designed for the DHVSU Medical and Dental Services, replacing the previously paper-based system. It enables students, teachers, and staff to securely access their medical information. The system also streamlines clinic operations by allowing staff to efficiently manage patient records and inventory, improving organization and accessibility within the clinic.",
      Github:"https://github.com/IamIsthill/healthharmony",
      Website:"",
    },
    {
      Image: "/inventorysystem.png",
      Title: "Express Inventory System",
      Role: "Full Stack Developer",
      Description: "This system is designed to provide a centralized and efficient platform for managing company assets, with built-in data analytics and asset distribution tracking. It allows users to easily monitor asset availability, detect missing items, and identify responsible handlers through distribution logs.",
      Github:"https://github.com/okimchi123/InventorySystem",
      Website:"https://express-inventory-system.vercel.app",
    },
  ];

  return (
    <section id="projects" className="w-[90%] md:w-[80%] h-[400px] flex flex-col gap-2 scroll-mt-[100px]">
      <Reveal delayProp="0.2">
        <h1 className="header">Projects</h1>
      </Reveal>
      <div className="flex flex-col gap-8">
        {postData.map((data) => (
          <Reveal key={data.Title} delayProp="0.2">
            <figure
          
          className="flex flex-col gap-2 lg:flex-row lg:gap-5 xl:gap-15"
          >

            <Image
              src={data.Image}
              className="hover:scale-105 transition-all"
              width="490"
              height="100"
              alt="inventory-system"
            />
            <article>
              <h1 className="text-xl font-semibold tracking-wide">{data.Title}</h1>
              <h2 className="prismo mb-2"> {data.Role} </h2>
              <p className="mb-2 text-justify">{data.Description}</p>
              <div className="flex gap-3">
                <NextLink className="p-3 border border-pink-300 rounded-full hover:bg-pink-100/10 transition-all" href={data.Github} target="_blank">
                    <Code color="#FFA1B3" />
                </NextLink>
                {data.Website && (
                    <NextLink className="p-3 border border-pink-300 rounded-full hover:bg-pink-100/10 transition-all" href={data.Website} target="_blank">
                    <Link color="#FFA1B3" />
                </NextLink>
                )
                }
              </div>
            </article>
          </figure>
          </Reveal>
          
        ))}
      </div>
    </section>
  );
}
