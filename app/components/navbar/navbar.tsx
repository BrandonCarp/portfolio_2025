import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MusicButton from "./vibeBtn"

export default function NavBar() {
  return (

    <div className="sticky flex p-3 justify-between items-center mx-10">
      <div className='font-bold'>
        <h1 >BRAN</h1>
        <h1>DON</h1>
      </div>
      <MusicButton />
    </div>

  )
}

