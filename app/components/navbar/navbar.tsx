import * as React from 'react';
import MusicButton from "./vibeBtn";
import DarkModeButton from '../DarkModeButton';

export default function NavBar() {
  return (
    <div className="sticky flex p-3 justify-between items-center mb-5 mdPhone:mx-10">
      <div className="font-semi-bold mdPhone:text-md tablet:text-lg  laptop:text-2xl">
        <h1>BRAN</h1>
        <h1>DON.</h1>
      </div>
      <div className="flex items-center space-x-4">
        <MusicButton />
        <DarkModeButton />
      </div>
    </div>
  );
}
