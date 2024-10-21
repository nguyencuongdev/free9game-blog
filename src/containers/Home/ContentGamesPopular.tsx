import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import Slider from 'react-slick';

import { ContentItemGamePopular } from '@/components';
import { IGame } from '@/types';

type ContentGamesPopularProps = {
  data: IGame[];
};

function ContentGamesPopular(props: ContentGamesPopularProps) {
  const { data } = props;
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const Slidersettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
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
            {data.map((item, index) => {
              return (
                <Box key={index}>
                  <ContentItemGamePopular
                    imageGame={item.imageGame}
                    gameName={item.gameName}
                    gameRating={item.gameRating}
                    gameDescription={item.gameDescription}
                    slug={item.slug}
                    type={item.type}
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

export default ContentGamesPopular;
