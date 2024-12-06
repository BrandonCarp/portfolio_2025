import CustomizedList from "./customList";

export default function HeroSection() {
  return (
    <div className="flex  items-center justify-center text-center py-10">
      <div className="w-full mb-5">
        <p className="text-4xl font-bold text-black">
          I'm <span className="text-blue-500">Brandon</span>,
          <span className="text-blue-500"> Software Developer</span>
        </p>
      </div>

      <CustomizedList />
    </div >
  );
}
