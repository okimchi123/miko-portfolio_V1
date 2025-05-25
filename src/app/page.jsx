import NavBar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutMe from "@/components/layout/About";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <NavBar />
      <Hero />
      <AboutMe />
    </main>
  );
}
