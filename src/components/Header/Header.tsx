'use client';

import { useState } from 'react';
import { Box, Button, Container, Drawer, List, ListItem, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery, useTheme } from '@mui/material';

import logo from '@/assets/imgs/logo.png';
import Search from './Search';
import Navigation, { menuNavigation } from './Navigation';
import { MenuIcon } from '../Icons';

function Header() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Hàm để mở hoặc đóng Drawer
  const toggleDrawer = (_: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box
      className={twMerge('py-2')}
      sx={{
        boxShadow: '0 2px 15px rgba(11, 17, 31, .08)',
        marginBottom: {
          xs: '30px',
          md: '0',
        },
      }}>
      <Container>
        <Stack direction='row' justifyContent='space-between' alignContent='center'>
          <Link href='/'>
            <Image src={logo} alt='Logo page' />
          </Link>
          {!isLg ? (
            <Box>
              {isSm && (
                <Button
                  variant='text'
                  sx={{
                    padding: '6px 0',
                    fontSize: '24px',
                    minWidth: '24px',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#7a7a7a'>
                    <g id='SVGRepo_bgCarrier' />

                    <g id='SVGRepo_tracerCarrier' />

                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <path
                        d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                        stroke='#7a7a7a'
                      />{' '}
                    </g>
                  </svg>
                </Button>
              )}
              <Button
                onClick={toggleDrawer('right', true)}
                sx={{
                  padding: '6px 0',
                  minWidth: '24px',
                  marginLeft: '12px',
                }}>
                <MenuIcon width={24} height={24} />
              </Button>
            </Box>
          ) : (
            <>
              <Search />
              <Navigation />
            </>
          )}
          <Drawer
            anchor={'right'}
            open={isDrawerOpen}
            onClose={toggleDrawer('right', false)}
            sx={{
              '& .MuiPaper-root': {
                width: '40%',
              },
            }}>
            <Box className='py-3'>
              <Stack direction='row' justifyContent='flex-end' className='px-4'>
                <Button
                  className='v-[24px] h-[24px] text-xl'
                  sx={{
                    minWidth: '24px',
                    textTransform: 'lowercase',
                    color: '#ccc',
                  }}
                  onClick={toggleDrawer('right', false)}>
                  x
                </Button>
              </Stack>
              <List>
                {menuNavigation.map((item, index) => {
                  return (
                    <ListItem key={index} className='block w-full p-0'>
                      <Link href={item.to} className='block w-full h-full py-2 px-4'>
                        {item.label}
                      </Link>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Drawer>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
