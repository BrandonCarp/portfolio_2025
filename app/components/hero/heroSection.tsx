import CustomizedList from "./customList";

export default function HeroSection() {
  return (
    <div className="flex  items-center justify-center text-center py-10">
      <div className="w-full mb-5 ">
        <p className=" font-bold text-black ">
          <span className="text-gray-700 text-3xl ">Brandon Carpenter</span>
          <span className="text-blue-500 text-3xl"> Software Developer</span>
        </p>
      </div>

      <CustomizedList />
    </div >
  );
}
