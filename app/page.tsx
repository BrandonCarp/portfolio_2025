'use client';
import NavBar from "./components/navbar/navbar";
import TypewriterEffect from "./components/typewriter/typewriter";
import HeroSection from "./components/hero/heroSection";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="mx-10 h-screen">
      <NavBar />
      <div className="flex flex-col space-x-10 justify-center items-center  mt-[2.5rem] tablet:mt-[3rem] lgTablet:mt-[3.5rem] laptop:mt-[4rem]">
        <div className="flex items-center justify-center text-center mx-auto">
          <HeroSection />
        </div>
        <AboutMe />
      </div>

    </ div>
  );
}
