'use client';
import { Box, Grid, List, ListItem, SxProps, Typography } from '@mui/material';

import { menuBlog, menuContact, typeMenu, typeMenuItem } from './config';
import Link from 'next/link';

type FooterMenuProps = {
  title?: string;
  className?: string;
  sx?: SxProps;
  data: typeMenuItem[];
};

const menuLatestReview: typeMenu = {
  title: 'Contact us',
  children: [
    {
      label: 'Black Myth: Wukong',
      href: '/',
    },
    {
      label: 'Free Fire',
      href: '/',
    },
    {
      label: 'Stumble Guys',
      href: '/',
    },
    {
      label: 'The Legend of Zelda',
      href: '/',
    },
    {
      label: 'Call of Duty',
      href: '/',
    },
    {
      label: 'Valorant',
      href: '/',
    },
  ],
};

function FooterMenu(props: FooterMenuProps) {
  const { title, className, sx, data } = props;
  return (
    <Box className={`footer-menu ${className}`} sx={{ ...sx }}>
      {title && (
        <Typography variant='h5' className='font-bold text-[#ffffffd9] text-[18px]'>
          {title}
        </Typography>
      )}
      <List className='py-0 mt-7'>
        {data.map((item, index) => {
          return (
            <ListItem key={index} className='p-0 mb-3'>
              <Link href={`/blog`} className='text-[#ffffffd9] hover:text-[#00bceb] inline-block w-full'>
                <Typography variant='body2'>{item.label}</Typography>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

function FooterMenus() {
  return (
    <>
      <Grid item lg={2} xs={6}>
        <FooterMenu data={menuBlog.children} title={menuBlog.title} />
      </Grid>
      <Grid item lg={2} xs={6}>
        <FooterMenu data={menuLatestReview.children} title={menuLatestReview.title} />
      </Grid>
      <Grid item lg={2} xs={6}>
        <FooterMenu data={menuContact.children} title={menuContact.title} />
      </Grid>
    </>
  );
}

export default FooterMenus;
