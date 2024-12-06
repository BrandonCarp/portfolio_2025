'use client';
import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Info, Mail, Work, FileDownload } from '@mui/icons-material';


const data = [
  // { icon: <Info />, label: 'About Me', link: "#about" },
  { icon: <Mail />, label: 'Contact', link: "#contact" },
  { icon: <Work />, label: 'Projects', link: "#projects" },
  { icon: <FileDownload />, label: 'Resume', download: `/resume.pdf` },
];

export default function CustomizedList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {data.map((item) => (
        <ListItemButton
          key={item.label}
          sx={{
            color: 'black', // Text color
            '&:hover': {
              backgroundColor: 'lightgrey', // Light grey hover
            },
          }}
          component={item.download ? 'a' : 'div'}
          href={item.link || item.download}
          download={item.download ? true : undefined}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.label} sx={{ color: 'inherit' }} />
        </ListItemButton>
      ))}
    </List>
  );
}
