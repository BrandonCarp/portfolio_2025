import Image from "next/image";
import Kohaku from './utility/menkohaku.png';

export default function AboutMe() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center w-[100%] tablet:w-[75%] lgTablet:w-[65%] laptop:w-[50%] desktop:w-[40%]">
      <Image
        src={Kohaku}
        alt="Me and Kohaku at the beach"
        className="rounded-full w-48 h-48 tablet:w-[15rem] tablet:h-[15rem] laptop:w-[20rem] laptop:h-[20rem] mb-5"
        width={160}
        height={160}
      />
      <h1 className="text-2xl smPhone:text-2xl font-bold text-blue-500">About Me</h1>
      <p className="text-[16px]">I'm Brandon Carpenter, a self-taught developer passionate about Full Stack Development. I bring diverse experience in project management and client relations, and I enjoy learning spoken languages and spending time with my dog, Kohaku.</p>
    </div>
  );
}
