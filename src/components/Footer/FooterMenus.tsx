'use client';
import { Box, Grid, List, ListItem, SxProps, Typography } from '@mui/material';

import { menuContact, typeMenuItem } from './config';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategoriesListService, getReviewsGameListService } from '@/services';

type FooterMenuProps = {
  title?: string;
  className?: string;
  sx?: SxProps;
  data: typeMenuItem[];
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
              <Link href={item.href} className='text-[#ffffffd9] hover:text-[#00bceb] inline-block w-full'>
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
  const [menuBlog, setMenuBlog] = useState<typeMenuItem[] | null>(null);
  const [menuLatestReviews, setMenuLatestReviewsGame] = useState<typeMenuItem[] | null>(null);

  useEffect(() => {
    const getMenuList = async () => {
      try {
        const [menuBlogList, menuLatestReviewGameList] = await Promise.all([
          getCategoriesListService(),
          getReviewsGameListService(1, 5),
        ]);

        console.log(menuBlogList.data);
        console.log(menuLatestReviewGameList.data);
        setMenuBlog(() =>
          menuBlogList.data.map((item: { name: string; slug: string }) => {
            return {
              label: item.name,
              href: `/category/${item.slug}`,
            };
          }),
        );
        setMenuLatestReviewsGame(() =>
          menuLatestReviewGameList.data.data.map((item: { name: string; slug: string }) => {
            return {
              label: item.name,
              href: `/blog/${item.slug}`,
            };
          }),
        );
      } catch (e) {
        console.log(e);
      }
    };
    getMenuList();
  }, []);

  console.log(menuLatestReviews);

  return (
    <>
      {menuBlog && (
        <Grid item lg={2} xs={6} md={4}>
          <FooterMenu data={menuBlog} title='Blog' />
        </Grid>
      )}
      {menuLatestReviews && (
        <Grid item lg={2} xs={6} md={4}>
          <FooterMenu data={menuLatestReviews} title='Latest Reviews' />
        </Grid>
      )}
      <Grid item lg={2} xs={6} md={4}>
        <FooterMenu data={menuContact.children} title={menuContact.title} />
      </Grid>
    </>
  );
}

export default FooterMenus;
