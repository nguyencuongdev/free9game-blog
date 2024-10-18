'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Button, Container, Drawer, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/imgs/logo.png';
import Search from './Search';
import Navigation, { menuNavigation } from './Navigation';
import { MenuIcon, SearchIcon } from '../Icons';
import SiderbarTabletMobile from './SiderbarTabletMobile';

function Header() {
  const [isOpenSearchMobile, setIsOpenSearchMobile] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const btnSearchRef = useRef<HTMLButtonElement>(null);

  // Hàm để mở hoặc đóng Drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Kiểm tra xem click có xảy ra ngoài phần tử Search không
      if (
        searchRef.current &&
        btnSearchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        !btnSearchRef.current.contains(event.target as Node)
      ) {
        setIsOpenSearchMobile(false);
      }
    };

    if (isOpenSearchMobile) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenSearchMobile]);

  return (
    <Box
      className='py-2'
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
          <Search
            ref={searchRef}
            sx={{
              backgroundColor: 'white',
              display: {
                xs: isOpenSearchMobile ? 'flex' : 'none',
                md: 'block',
              },
              zIndex: 100,
              position: {
                xs: 'absolute',
                md: 'unset',
              },
              left: isOpenSearchMobile ? 0 : 'unset',
              right: isOpenSearchMobile ? 0 : 'unset',
              justifyContent: isOpenSearchMobile ? 'center' : 'unset',
            }}
          />
          {isOpenSearchMobile && (
            <Box
              className='search-overlary'
              sx={{
                position: 'fixed',
                top: '36px',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
                backgroundColor: 'transparent',
              }}
            />
          )}
          <Navigation
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
            }}
          />
          {/* Tablet and mobile */}
          {/* icon search và menu icon */}
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              ref={btnSearchRef}
              variant='text'
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
                padding: '6px 0',
                fontSize: '24px',
                minWidth: '24px',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              onClick={() => {
                console.log('Open');
                setIsOpenSearchMobile(true);
              }}>
              <SearchIcon />
            </Button>
            <Button
              onClick={toggleDrawer(true)}
              sx={{
                display: {
                  lg: 'none',
                  xs: 'block',
                },
                padding: '6px 0',
                minWidth: '24px',
                marginLeft: '12px',
              }}>
              <MenuIcon width={24} height={24} />
            </Button>
          </Stack>
          <Drawer
            anchor={'right'}
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiPaper-root': {
                width: '60%',
              },
            }}>
            <SiderbarTabletMobile menu={menuNavigation} closeSliderbar={() => setIsDrawerOpen(false)} />
          </Drawer>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
