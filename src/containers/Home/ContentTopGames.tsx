'use client';
import { Box, Container, Grid, Typography } from '@mui/material';

import { ContentNewItem, ContentNewItemByColumn, ContentItemReviewGame } from '@/components';
import { IGame } from '@/types';

type ContentTopGamesProps = {
  gameTop: IGame;
  top5GamesReviewed: IGame[];
};

function ContentTopGames(props: ContentTopGamesProps) {
  const { gameTop, top5GamesReviewed } = props;

  return (
    <Container>
      <Box marginTop='48px'>
        <Box marginBottom='32px'>
          <Box>
            <Box className='w-[60px] bg-[#acebfb]' height='10px'></Box>
          </Box>
          <Typography variant='h3' className='text-3xl mt-2 font-bold'>
            Top Games
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid
            item
            lg={7.5}
            xs={12}
            sx={{
              paddingRight: {
                xs: 0,
              },
              paddingTop: {
                xs: '0px',
              },
            }}>
            <ContentNewItem
              heightImg='420px'
              lg
              slug={gameTop.slug}
              image={gameTop.imageGame}
              type={gameTop.type}
              name={gameTop.gameName}
              shortContent={gameTop.gameDescription}
              createTime={'Setemper 17 2024'}
              sx={{
                '& .content-img': {
                  height: {
                    xs: '250px',
                    md: '359px',
                  },
                },
                '& .content-title': {
                  fontSize: {
                    xs: '18px',
                    md: '28px',
                  },
                },
              }}
            />
          </Grid>
          {/* Nội dung nhỏ bên phải */}
          <Grid item lg={4.5} xs={12}>
            <Box>
              <Box>
                <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
              </Box>
              <Typography variant='h3' className='text-3xl font-bold mt-2'>
                Top-5 Game Reviews
              </Typography>
            </Box>
            <Box className='mt-4'>
              {top5GamesReviewed.slice(1, 6).map((item, index) => {
                return (
                  <ContentItemReviewGame
                    key={index}
                    slug={item.slug}
                    imageGame={item.imageGame}
                    gameName={item.gameName}
                    gameDescription={item.gameDescription}
                    gameRating={item.gameRating}
                  />
                );
              })}
            </Box>
          </Grid>
          {/* Nội dung nhỏ bên dưới theo PC */}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                lg: 'flex',
                xs: 'none',
              },
            }}>
            {top5GamesReviewed.slice(5, top5GamesReviewed.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index} md={6} xs={12}>
                  <ContentNewItem
                    heightImg='200px'
                    sm
                    slug={item.slug}
                    image={item.imageGame}
                    type={item.type}
                    name='Top Games'
                    createTime={'Setemper 17 2024'}
                  />
                </Grid>
              );
            })}
          </Grid>
          {/* Nội dung nhỏ bên dưới trên tablet*/}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                lg: 'none',
                md: 'flex',
                xs: 'none',
              },
            }}>
            {top5GamesReviewed.slice(5, top5GamesReviewed.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index} md={6} xs={12}>
                  <ContentNewItem
                    heightImg='200px'
                    sm
                    slug={item.slug}
                    image={item.imageGame}
                    type={item.type}
                    name={item.gameName}
                    createTime={'Setemper 17 2024'}
                  />
                </Grid>
              );
            })}
          </Grid>
          {/* Nội dung nhỏ bên dưới theo column trên mobile*/}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                md: 'none',
                xs: 'flex',
              },
            }}>
            {top5GamesReviewed.slice(5, top5GamesReviewed.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index} xs={12} md={6}>
                  <ContentNewItemByColumn
                    key={index}
                    slug={item.slug}
                    image={item.imageGame}
                    type={item.type}
                    name={item.gameName}
                    createTime={'Setemper 17 2024'}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ContentTopGames;
