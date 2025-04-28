"use client";

export default function LinkDisplay() {
  return (
    <>
      <div>
        <div className="bg-white w-[20rem] h-[15rem] rounded-xl"></div>
        <div className="dark:bg-slate-950 w-[20rem] h-[5rem] rounded-xl mt-2">
          <div className="pl-3 pt-1">
            <h1>Title of project</h1>
            <h1>Link button</h1>
          </div>

          <div className="mx-auto h-[1px] w-[85%] bg-violet-700"></div>
          <h1 className="pl-3 pt-1">Maybe date of last repo addition</h1>
        </div>
      </div>
    </>
  );
}
// dark:bg-gray-900 dark:text-white bg-white text-black
