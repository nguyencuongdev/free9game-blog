'use client';
import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { getContentHomePageSerive } from '@/services';
import { INewsGame } from '@/types';

import {
  MenuContent,
  ContentHot,
  ContentNews,
  ContentSlider,
  ContentTopGames,
  ContentTopApps,
  ContentHowTo,
  ContentTipGuide,
} from '@/containers/Home';

export default function Home() {
  const [blogHotList, setBlogHotList] = useState<INewsGame[] | null>(null);
  const [newsGamesList, setNewsGamesList] = useState<INewsGame[] | null>(null);

  useEffect(() => {
    const getContent = async () => {
      const response = await getContentHomePageSerive();
      console.log(response.data);
      const { blogHots, news } = response.data;
      setBlogHotList(blogHots);
      setNewsGamesList(news);
    };
    getContent();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: {
            md: 'block',
            xs: 'none',
          },
        }}>
        <MenuContent />
      </Box>
      {blogHotList && Array.isArray(blogHotList) && <ContentHot data={blogHotList} />}
      {newsGamesList && Array.isArray(blogHotList) && <ContentNews data={newsGamesList} />}
      <ContentSlider />
      <ContentTopGames />
      <ContentTopApps />
      <ContentHowTo />
      <ContentTipGuide />
      <Box className='flex justify-center my-10 h-[46px] rounded-md'>
        <Button variant='contained' className='bg-[#00bceb] capitalize'>
          <Link href='/blogs'>More articles</Link>
        </Button>
      </Box>
    </Box>
  );
}
