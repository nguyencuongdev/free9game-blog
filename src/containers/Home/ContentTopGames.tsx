'use client';
import { Box, Container, Grid, Typography } from '@mui/material';

import { ContentNewItem, ContentNewItemByColumn, ContentItemReviewGame } from '@/components';
import { IGame } from '@/types';
import { formatDateTime } from '@/utils';

type ContentTopGamesProps = {
  topGames: IGame[];
  top5GamesReviewed: IGame[];
};

function ContentTopGames(props: ContentTopGamesProps) {
  const { topGames, top5GamesReviewed } = props;

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
              slug={topGames[0].slug}
              image={topGames[0].imageGame}
              type={topGames[0].type}
              name={topGames[0].gameName}
              shortContent={topGames[0].gameDescription}
              createTime={formatDateTime(new Date().toString())}
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
              {top5GamesReviewed.slice(0, 5).map((item, index) => {
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
          {/* Nội dung nhỏ bên dưới theo PC, tablet */}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                md: 'flex',
                xs: 'none',
              },
            }}>
            {topGames.slice(1, topGames.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index} md={6} xs={12}>
                  <ContentNewItem
                    heightImg='200px'
                    sm
                    slug={item.slug}
                    image={item.imageGame}
                    type={item.type}
                    name={item.gameName}
                    createTime={formatDateTime(new Date().toString())}
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
            {topGames.slice(1, topGames.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index} xs={12} md={6}>
                  <ContentNewItemByColumn
                    key={index}
                    slug={item.slug}
                    image={item.imageGame}
                    type={item.type}
                    name={item.gameName}
                    createTime={formatDateTime(new Date().toString())}
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
