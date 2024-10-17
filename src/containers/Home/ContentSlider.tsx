'use client';

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import Slider from 'react-slick';

import imgPopularGame1 from '@/assets/imgs/popularGame1.jpg';
import imgPopularGame2 from '@/assets/imgs/popularGame2.jpg';
import imgPopularGame3 from '@/assets/imgs/popularGame3.jpg';
import imgPopularGame4 from '@/assets/imgs/gameReivew1.png';
import imgPopularGame5 from '@/assets/imgs/popularGame6.jpg';
import { ContentNewReviewPopular } from '@/components';

const dataContentGamePopular = [
  {
    id: 1,
    title: 'Genshin Impact',
    srcImg: imgPopularGame4.src,
    description:
      'This in-depth review of Genshin Impact explores its gameplay, graphics, storyline, community engagement, and future developments, offering a thorough understanding of its impact and significance in the gaming world.',
    createAt: 'September 18, 2024',
    rating: 4,
    type: 'popular-games',
  },
  {
    id: 2,
    title: 'Grand Theft Auto V',
    srcImg: imgPopularGame1.src,
    description:
      'This article provides a comprehensive review of GTA V, covering its impact, storyline, gameplay, visuals, online multiplayer, criticisms, modding community, and legacy, highlighting its lasting influence on the gaming industry. ',
    rating: 4,
    type: 'popular-games',
  },
  {
    id: 3,
    title: 'Black Myth: Wukong',
    srcImg: imgPopularGame5.src,
    description:
      'This review has explored the many facets of "Black Myth: Wukong," from its origins in Chinese mythology to its gameplay and technical performance. With its blend of tradition and innovation, this game is a testament to the creativity and ambition of Game Science, setting a new standard for what action RPGs can achieve.',
    rating: 2,
    type: 'popular-games',
  },
  {
    id: 4,
    title: 'Gacha Club',
    srcImg: imgPopularGame3.src,
    description:
      'Gacha Club is the latest hit from the makers of Gacha Life, offering a captivating and vibrant mobile gaming experience. The game features a unique gacha system that allows players to collect over 100 characters, items, and pets, all while enjoying extensive customization options and immersive storylines.',
    rating: 4,
    type: 'popular-games',
  },
  {
    id: 5,
    title: 'PUBG Mobile ',
    srcImg: imgPopularGame2.src,
    description:
      'PUBG Mobile is a new Free-to-Play Battle Royale game/app released by Tencent Games at the end of March 2018. It has been made available for free on Android and iOS, with an Xbox One version coming soon.',
    createAt: 'September 18, 2024',
    rating: 5,
    type: 'popular-games',
  },
];

function ContentSlider() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const Slidersettings = {
    dots: true, // Kích hoạt nút điều hướng
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: isLg ? 3 : isMd ? 2 : 1,
    slidesToScroll: 1,
  };

  return (
    <Box className='bg-[#00bceb] py-10 mt-6'>
      <Container>
        <Box>
          <Typography variant='h3' className='text-center text-white text-[32px] font-bold'>
            Popular Reviewed Games
          </Typography>
          <Typography variant='h5' className='text-white text-sm text-center mt-2'>
            Newest and most popular game reviews
          </Typography>
        </Box>
        <Box
          className='my-5'
          sx={{
            '& .slick-dots .slick-active button:before': {
              color: '#ccc',
            },
            '& .slick-dots li button:before': {
              fontSize: '14px',
            },
            marginLeft: {
              xs: '8px',
              md: 'unset',
            },
            marginRight: {
              xs: '8px',
              md: 'unset',
            },
          }}>
          <Slider {...Slidersettings}>
            {dataContentGamePopular.map((item, index) => {
              return (
                <Box key={index}>
                  <ContentNewReviewPopular
                    srcImg={item.srcImg}
                    title={item.title}
                    rating={item.rating}
                    description={item.description}
                    href={`/blog/${item.type}/${item.title}`}
                  />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}

export default ContentSlider;
