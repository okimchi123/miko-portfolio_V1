import Image from "next/image";
import NavBar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col items-center">
      <NavBar />
      <Hero />
    </main>
  );
}
