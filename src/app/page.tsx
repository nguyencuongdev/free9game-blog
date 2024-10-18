import { Box, Button } from '@mui/material';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <ContentHot />
      <ContentNews />
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
