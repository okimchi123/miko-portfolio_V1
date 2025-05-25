import NavBar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutMe from "@/components/layout/AboutMe";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <NavBar />
      <Hero />
      <AboutMe />
      <h1 className="mb-4">To be continue. 05/26/2025</h1>
    </main>
  );
}
