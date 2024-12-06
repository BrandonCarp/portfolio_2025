'use client';
import NavBar from "./components/navbar/navbar";
import TypewriterEffect from "./components/typewriter/typewriter";
import HeroSection from "./components/hero/heroSection";
export default function Home() {
  return (
    <div className="mx-10 h-screen">
      <NavBar />
      <div className="flex flex-col space-x-10 justify-center items-center mt-10 h-[50%]">
        <TypewriterEffect />
        <div>
          <HeroSection />
        </div>
      </div>
    </ div>
  );
}
