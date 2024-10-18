'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { ContentNewItem, ContentNewItemByColumn } from '@/components';

import imgNewLarge from '@/assets/imgs/newsnewLarge.jpg';
import imgNew2 from '@/assets/imgs/newsgame2.jpg';
import imgNew3 from '@/assets/imgs/newsgame3.jpg';
import imgNew4 from '@/assets/imgs/newsgame4.jpg';
import imgNew5 from '@/assets/imgs/newsgame5.jpg';
import imgNew6 from '@/assets/imgs/newsgame6.jpg';

const dataContentNews = [
  {
    id: 1,
    title: 'The Evolution of Matchmaking in “League of Legends”: A Deep Dive into the Ranking System',
    srcImg: imgNewLarge.src,
    description:
      'Introduction “League of Legends” (LoL) has been a dominant force in the gaming industry since its launch in 2009. Developed by Riot Games, it has attracted millions of players globally, thanks to its engaging gameplay, dynamic updates, and competitive scene. However, the journey of LoL has not been without its challenges, particularly concerning its matchmaking',
    type: 'News',
    createAt: 'September 18, 2024',
  },
  {
    id: 2,
    title: 'The Fallout of “Starfield”’s Starship Customization System: A Deep Dive into Its Limitations',
    srcImg: imgNew2.src,
    type: 'News',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 3,
    title: 'The Battle Pass System in Fortnite: An In-Depth Analysis of Its Impact and Challenges',
    srcImg: imgNew3.src,
    type: 'News',
    description: '',

    createAt: 'September 18, 2024',
  },
  {
    id: 4,
    title: 'The Microtransaction Controversy in “FIFA”: How Ultimate Team Transformed the Gaming Landscape ',
    srcImg: imgNew4.src,
    type: 'News',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 5,
    title: 'The Economic Ecosystem of Fortnite: A Deep Dive into Microtransactions and Player Retention ',
    srcImg: imgNew5.src,
    type: 'News',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 6,
    title: ' The Challenge of AI-Driven Difficulty Scaling in “Black Myth: Wukong” ',
    srcImg: imgNew6.src,
    description: '',
    type: 'News',
    createAt: 'September 18, 2024',
  },
];

function ContentNews() {
  return (
    <Container>
      <Box marginTop='48px'>
        <Box marginBottom='32px'>
          <Box>
            <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
          </Box>
          <Typography variant='h3' className='text-3xl mt-2 font-bold'>
            News
          </Typography>
          <Typography className='text-[#0b111f80]'>Fresh game news from our editors</Typography>
        </Box>
        <Grid container spacing={3}>
          {/* Nội dung lớn */}
          <Grid
            item
            lg={7.5}
            xs={12}
            sx={{
              '&:hover h4': {
                color: '#00bceb',
              },
              paddingRight: {
                xs: 0,
              },
            }}>
            <ContentNewItem
              heightImg='420px'
              lg
              href={`/blog/${dataContentNews[0].type}/${dataContentNews[0].title}`}
              srcImg={dataContentNews[0].srcImg}
              type={dataContentNews[0].type}
              title={dataContentNews[0].title}
              description={dataContentNews[0].description}
              createAt={dataContentNews[0].createAt}
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
          <Grid
            item
            lg={4.5}
            xs={12}
            sx={{
              display: {
                lg: 'block',
                xs: 'none',
              },
            }}>
            {dataContentNews.slice(1, 3).map((item, index) => {
              return (
                <Box
                  sx={{
                    marginBottom: index < 2 ? '16px' : '0',
                  }}
                  key={index}>
                  <ContentNewItem
                    sm
                    key={index}
                    heightImg='200px'
                    href={`/blog/${item.type}/${item.title}`}
                    srcImg={item.srcImg}
                    type={item.type}
                    title={item.title}
                    createAt={item.createAt}
                  />
                </Box>
              );
            })}
          </Grid>
          {/* Nội dung nhỏ bên dưới trên PC*/}
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
            {dataContentNews.slice(3, dataContentNews.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index} xs={12} md={12}>
                  <ContentNewItem
                    sm
                    key={index}
                    heightImg='200px'
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
          {/* Nội dung nhỏ bên dưới theo tablet */}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                md: 'flex',
                xs: 'none',
                lg: 'none',
              },
            }}>
            {dataContentNews.slice(1, 5).map((item, index) => {
              return (
                <Grid item lg={4} key={index} xs={12} md={6}>
                  <ContentNewItem
                    sm
                    key={index}
                    heightImg='200px'
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
            {dataContentNews.slice(1, 5).map((item, index) => {
              return (
                <Grid item lg={4} key={index} xs={12} md={6}>
                  <ContentNewItemByColumn
                    key={index}
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

export default ContentNews;
