'use client';

import { Box, Container, Grid, List, Typography } from '@mui/material';
import imgNewHot from '@/assets/imgs/newhot.jpg';

import { ContentNewItem, ContentNewLastest } from '@/components';

const dataContentHot = {
  id: 1,
  title: 'How to Master The Legend of Zelda: Tears of the Kingdom',
  srcImg: imgNewHot.src,
  type: 'How-to',
  createAt: 'September 18, 2024',
};

const dataContentLastest = [
  {
    id: 1,
    title: 'Comprehensive Tips & Guides for “Hogwarts Legacy”',
    type: 'tips-guides',
    createAt: 'September 18, 2024',
  },
  {
    id: 2,
    title: 'The Evolution of Matchmaking in “League of Legends”: A Deep Dive into the Ranking System',
    type: 'tips-guides',
    createAt: 'September 17, 2024',
  },
  {
    id: 3,
    title: 'How to Become a Pro in League of Legends: A Comprehensive Guide',
    type: 'tips-guides',
    createAt: 'September 18, 2024',
  },
  {
    id: 4,
    title: 'Mastering “Minecraft”: Tips and Guides for Success',
    type: 'típs-guides',
    createAt: 'September 18, 2024',
  },
];

function ContentHot() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          lg={7.5}
          xs={12}
          sx={{
            paddingRight: {
              xs: 0,
              lg: '40px',
            },
            marginBottom: {
              xs: '30px',
              md: '0',
            },
          }}>
          <ContentNewItem
            lg
            href={`/blog/${dataContentHot.type}/${dataContentHot.title}`}
            srcImg={dataContentHot.srcImg}
            type={dataContentHot.type}
            title={dataContentHot.title}
            createAt={dataContentHot.createAt}
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
        <Grid item lg={4.5} xs={12}>
          <Box>
            <Box>
              <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
            </Box>
            <Typography variant='h3' className='text-3xl font-bold mt-2'>
              Latest Posts
            </Typography>
          </Box>
          <List className='py-0 px-0'>
            {dataContentLastest.map((item, index) => {
              return (
                <ContentNewLastest
                  key={index}
                  href={`/blog/${item.type}/${item.title}`}
                  title={item.title}
                  index={index + 1}
                  createAt={item.createAt}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContentHot;
