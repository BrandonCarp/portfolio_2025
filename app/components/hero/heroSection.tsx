import CustomizedList from "./customList";


export default function HeroSection() {
  return (
    <div className="  
       items-center justify-center text-center mx-auto mr-8 smPhone:mr-5  smPhone:flex">

      <div className="w-full mt-5 ">

        <p className="flex flex-col  ">
          <span className=" text-2xl smPhone:text-3xl tablet:text-4xl laptop:text-5xl">Brandon Carpenter</span>
          <span className=" text-blue-500 text-2xl smPhone:text-3xl tablet:text-4xl laptop:text-5xl"> Software Developer</span>
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto smPhone:mr-5">
        <CustomizedList />
      </div>

    </div >
  );
}
