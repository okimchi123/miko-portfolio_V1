import NavBar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutMe from "@/components/layout/AboutMe";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center gap-4">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />   
      
    </main>
  );
}
