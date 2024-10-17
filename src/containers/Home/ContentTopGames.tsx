'use client';

import { Box, Container, Grid, Typography } from '@mui/material';

import imgTopGameLarge from '@/assets/imgs/topgamelarge.jpg';
import imgTopGame6 from '@/assets/imgs/topgame5.jpg';
import imgTopGame7 from '@/assets/imgs/topgame6.jpg';
import imgTopGame8 from '@/assets/imgs/topgame7.jpg';
import imgTopGame1 from '@/assets/imgs/topgamel1.jpg';
import imgTopGame3 from '@/assets/imgs/topgamel3.jpg';
import imgTopGame4 from '@/assets/imgs/gameReivew1.png';

import { ContentNewItem, ContentNewReviewPopularSmall } from '@/components';

const dataContentTopGames = [
  {
    id: 1,
    title: 'The Evolution of Matchmaking in “League of Legends”: A Deep Dive into the Ranking Systemt',
    srcImg: imgTopGameLarge.src,
    description:
      'Introduction “League of Legends” (LoL) has been a dominant force in the gaming industry since its launch in 2009. Developed by Riot Games, it has attracted millions of players globally, thanks to its engaging gameplay, dynamic updates, and competitive scene. However, the journey of LoL has not been without its challenges, particularly concerning its matchmaking',
    createAt: 'September 18, 2024',
    rating: 4,
    type: 'Top Games',
  },
  {
    id: 2,
    title: 'Geometry Dash',
    srcImg: imgTopGame1.src,
    description:
      'How to get Free Fire This page contains links to the official sources of the app Free Fire. So that you do not have problems with getting the app, we have prepared a detailed instruction. How to get Free Fire from the official store. To quickly and painlessly get the Free Fire app on the Official Store, you should use the following instructions. Go to the Get for PC button. If you use a browser on a PC or mobile device, you’ll go to the Free Fire app page on the official store website. To get the app through the browser, you need to log in to your account in the store and add it to the library.',
    rating: 4,
    type: 'Top Games',
  },
  {
    id: 3,
    title: 'Valorant',
    srcImg: imgTopGame3.src,
    description:
      'Valorant has established itself as a premier tactical FPS, combining precise gunplay, strategic depth, and a vibrant competitive scene. While the game faces challenges such',
    rating: 4,
    type: 'Top Games',
    createAt: 'September 18, 2024',
  },
  {
    id: 4,
    title: 'Genshin Impact',
    srcImg: imgTopGame4.src,
    description:
      ' This in-depth review of Genshin Impact explores its gameplay, graphics, storyline, community engagement, and future developments, offering a thorough understanding of its impact and significance in the gaming world.',
    rating: 2,
    type: 'Top Games',
    createAt: 'September 18, 2024',
  },
  {
    id: 5,
    title: 'PUBG Mobile',
    srcImg: imgTopGame1.src,
    description:
      'PUBG Mobile is a new Free-to-Play Battle Royale game/app released by Tencent Games at the end of March 2018. It has been made available for free on Android and iOS, with an Xbox One version coming soon.',
    createAt: 'September 18, 2024',
    rating: 5,
    type: 'Top Games',
  },
  {
    id: 6,
    title: 'The Evolution of Matchmaking in “League of Legends”: A Deep Dive into the Ranking System',
    srcImg: imgTopGame6.src,
    description: '',
    rating: 4,
    type: 'Top Games',
    createAt: 'September 18, 2024',
  },
  {
    id: 7,
    title: 'The Evolution of Matchmaking in “League of Legends”: A Deep Dive into the Ranking System',
    srcImg: imgTopGame7.src,
    description: '',
    rating: 4,
    type: 'Top Games',
    createAt: 'September 18, 2024',
  },
  {
    id: 8,
    title: 'The Evolution of Matchmaking in “League of Legends”: A Deep Dive into the Ranking System',
    srcImg: imgTopGame8.src,
    description: '',
    rating: 4,
    type: 'Top Games',
    createAt: 'September 18, 2024',
  },
];

function ContentTopGames() {
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
              href={`/blog/${dataContentTopGames[0].type}/${dataContentTopGames[0].title}`}
              srcImg={dataContentTopGames[0].srcImg}
              type={dataContentTopGames[0].type}
              title={dataContentTopGames[0].title}
              description={dataContentTopGames[0].description}
              createAt={dataContentTopGames[0].createAt}
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
              {dataContentTopGames.slice(1, 5).map((item, index) => {
                return (
                  <ContentNewReviewPopularSmall
                    key={index}
                    href={`/blog/${item.type}/${item.title}`}
                    srcImg={item.srcImg}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                  />
                );
              })}
            </Box>
          </Grid>
          {/* Nội dung nhỏ bên dưới */}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}>
            {dataContentTopGames.slice(5, dataContentTopGames.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index}>
                  <ContentNewItem
                    heightImg='200px'
                    sm
                    href={`/blog/${item.type}/${item.title}`}
                    srcImg={item.srcImg}
                    type={item.type}
                    title={item.title}
                    createAt={item.createAt}
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
