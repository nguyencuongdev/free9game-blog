'use client';

import { Container, List, ListItem } from '@mui/material';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type MenuContentItemType = {
  label: string;
  href: string;
};

const menuContent: MenuContentItemType[] = [
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'Top Apps',
    href: '/top-apps',
  },
  {
    label: 'Top Games',
    href: '/top-games',
  },
  {
    label: 'How To',
    href: '/how-to',
  },
  {
    label: 'Tips&Guides',
    href: '/tip-guides',
  },
];

function MenuContent() {
  return (
    <Container>
      <List
        className={twMerge('flex pt-5 pb-8')}
        sx={{
          '&>.MuiListItem-root:first-of-type': {
            paddingLeft: 0,
          },
          '&>.MuiListItem-root:first-of-type > a': {
            textAlign: 'start',
          },
          '&>.MuiListItem-root:last-child': {
            paddingRight: 0,
          },
          '&>.MuiListItem-root:last-child > a': {
            textAlign: 'end',
            paddingRight: 0,
          },
          '&>.MuiListItem-root:last-child:after': {
            display: 'none',
          },
        }}>
        {menuContent.map((item, index) => (
          <ListItem
            key={index}
            className='p-0'
            sx={{
              '::after': {
                display: 'block',
                content: '""',
                width: '1px',
                height: '14px',
                position: 'absolute',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                backgroundColor: '#ccc',
              },
            }}>
            <Link
              className={twMerge('inline-block text-center w-full text-xl uppercase hover:text-[#0b111f80]')}
              href={item.href}
              key={index}>
              {item.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default MenuContent;
