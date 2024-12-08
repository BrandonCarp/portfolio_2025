'use client';
import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Mail, Work, FileDownload } from '@mui/icons-material';

const data = [
  { icon: <Mail />, label: 'Contact', link: "#contact" },
  { icon: <Work />, label: 'Projects', link: "#projects" },
  { icon: <FileDownload />, label: 'Resume', download: `/resume.pdf` },
];

export default function CustomizedList() {
  return (
    <div className="flex items-center justify-center mx-auto">
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {data.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{
              '&:hover': {
                backgroundColor: 'lightgrey', // Light grey hover
              },
            }}
            component={item.download ? 'a' : 'div'}
            href={item.link || item.download}
            download={item.download ? true : undefined}
          >
            <ListItemIcon className="text-gray-800 dark:text-gray-200">
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              className="text-sm smPhone:text-base mdPhone:text-lg tablet:text-xl laptop:text-2xl"
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}
