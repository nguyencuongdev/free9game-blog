'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { ContentNewItem } from '@/components';

import imgNewLarge from '@/assets/imgs/howto1.jpg';
import imgNew2 from '@/assets/imgs/howto2.jpg';
import imgNew3 from '@/assets/imgs/howto3.jpg';
import imgNew4 from '@/assets/imgs/howto4.jpg';
import imgNew5 from '@/assets/imgs/howto5.jpg';
import imgNew6 from '@/assets/imgs/howto6.jpg';

const dataContentNews = [
  {
    id: 1,
    title: 'How to Master The Legend of Zelda: Tears of the Kingdom',
    srcImg: imgNewLarge.src,
    description:
      'The Legend of Zelda: Tears of the Kingdom has captivated gamers with its sprawling open world, intricate puzzles, and engaging storylines. Whether you’re a seasoned player or a newcomer to the series, mastering this game can seem daunting. This comprehensive guide will walk you through essential tips and strategies to help you navigate Hyrule, tackle',
    type: 'How-to',
    createAt: 'September 18, 2024',
  },
  {
    id: 2,
    title: 'How to Become a Pro in League of Legends: A Comprehensive Guide',
    srcImg: imgNew2.src,
    type: 'How-to',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 3,
    title: 'How to Master “The Legend of Zelda: Breath of the Wild”',
    srcImg: imgNew3.src,
    type: 'How-to',
    description: '',

    createAt: 'September 18, 2024',
  },
  {
    id: 4,
    title: 'Ultimate Guide to Mastering “The Legend of Zelda: Tears of the Kingdom',
    srcImg: imgNew4.src,
    type: 'How-to',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 5,
    title: ' The Ultimate Guide to Minecraft: How to Survive, Build, and Thrive',
    srcImg: imgNew5.src,
    type: 'How-to',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 6,
    title: ' The Challenge of AI-Driven Difficulty Scaling in “Black Myth: Wukong” ',
    srcImg: imgNew6.src,
    description: '',
    type: 'How-to',
    createAt: 'September 18, 2024',
  },
];

function ContentHowTo() {
  return (
    <Container>
      <Box marginTop='48px'>
        <Box marginBottom='32px'>
          <Box>
            <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
          </Box>
          <Typography variant='h3' className='text-3xl mt-2 font-bold'>
            How - To
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {/* Nội dung nhỏ bên trai */}
          <Grid
            item
            lg={4.5}
            xs={12}
            sx={{
              display: {
                xs: 'none',
                md: 'block',
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
            {dataContentNews.slice(3, dataContentNews.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index}>
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
        </Grid>
      </Box>
    </Container>
  );
}

export default ContentHowTo;
