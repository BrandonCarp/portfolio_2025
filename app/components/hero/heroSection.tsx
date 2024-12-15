import CustomizedList from "./customList";
import TypewriterEffect from "../typewriter/typewriter";

export default function HeroSection() {
  return (
    <div
      className="
        flex flex-col items-center justify-center text-center mx-auto 
         lgTablet:justify-between lgTablet:space-x-4"
    >
      <div className="w-full mt-5">
        <p className="flex flex-col pb-5">
          <span className="text-2xl smPhone:text-3xl tablet:text-4xl lgTablet:text-5xl laptop:text-6xl">
            Brandon Carpenter
          </span>
          <span className="text-blue-500 text-2xl smPhone:text-3xl tablet:text-5xl laptop:text-6xl">
            Software Developer
          </span>
        </p>
        <TypewriterEffect />
      </div>
      <div className="flex items-center justify-center mx-auto">
        <CustomizedList />
      </div>
    </div>
  );
}
