import NavBar from "@/components/layout/navbar";
import Hero from "@/components/layout/hero";
import AboutMe from "@/components/layout/about";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <NavBar />
      <Hero />
      <AboutMe />
    </main>
  );
}
