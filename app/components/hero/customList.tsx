'use client';
import React, { useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

interface MenuItem {
  label: string;
  link?: string;
  download?: string;
}

const data: MenuItem[] = [
  { label: 'Contact', link: "#contact" },
  { label: 'Projects', link: "#projects" },
  { label: 'Resume', download: `/resume.pdf` },
];

export default function CustomizedList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{ fontFamily: "monospace" }}
      className="font-mono flex items-center justify-center mx-auto dark:text-white"
    >
      <List
        className="font-mono flex flex-col lgTablet:flex-row items-center justify-center space-y-4 lgTablet:space-y-0 lgTablet:space-x-4"
        style={{ maxWidth: 650 }}
      >
        {data.map((item, index) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ListItemButton
              disableRipple
              disableTouchRipple
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              component="a"
              href={item.link || item.download || "#"}
              download={!!item.download}
            >
              <ListItemText
                primary={item.label}
                className="font-mono text-sm mdPhone:text-base tablet:text-lg"
              />
            </ListItemButton>
            <div
              className={` font-mono absolute bottom-0 left-0 h-[3px] bg-blue-500 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 w-full' : 'opacity-0 w-0'
                }`}
            ></div>
          </div>
        ))}
      </List>
    </div>
  );
}
