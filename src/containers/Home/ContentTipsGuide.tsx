'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { ContentNewItem, ContentNewItemByColumn } from '@/components';

import imgNewLarge from '@/assets/imgs/tipgiude1.jpg';
import imgNew2 from '@/assets/imgs/tipgiude2.jpg';
import imgNew3 from '@/assets/imgs/tipgiude3.jpg';
import imgNew4 from '@/assets/imgs/tipgiude4.jpg';
import imgNew5 from '@/assets/imgs/tipgiude5.jpg';
import imgNew6 from '@/assets/imgs/tipgiude6.jpg';

const dataContentNews = [
  {
    id: 1,
    title: 'Comprehensive Tips & Guides for “Hogwarts Legacy”',
    srcImg: imgNewLarge.src,
    description:
      '  Introduction “Hogwarts Legacy,” set in the magical world of Harry Potter, has captivated players with its enchanting setting and deep gameplay mechanics. As you step into the shoes of a young witch or wizard at Hogwarts School of Witchcraft and Wizardry, the game offers a plethora of quests, spells, and magical creatures to discover.',
    type: 'Tips & Guides',
    createAt: 'September 18, 2024',
  },
  {
    id: 2,
    title: 'Mastering “Minecraft”: Tips and Guides for Success',
    srcImg: imgNew2.src,
    type: 'Tips & Guides',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 3,
    title: 'Essential Tips & Guides for The Legend of Zelda: Tears of the Kingdom',
    srcImg: imgNew3.src,
    type: 'Tips & Guides',
    description: '',

    createAt: 'September 18, 2024',
  },
  {
    id: 4,
    title: 'Ultimate Tips & Guides for “Elden Ring”',
    srcImg: imgNew4.src,
    type: 'Tips & Guides',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 5,
    title: 'NBA 2K24: Tips & Guides to Elevate Your Gameplay',
    srcImg: imgNew5.src,
    type: 'Tips & Guides',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 6,
    title: 'Comprehensive Tips and Guides for Mastering Genshin Impact',
    srcImg: imgNew6.src,
    description: '',
    type: 'Tips & Guides',
    createAt: 'September 18, 2024',
  },
];

function ContentTipGuide() {
  return (
    <Container>
      <Box marginTop='48px'>
        <Box marginBottom='32px'>
          <Box>
            <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
          </Box>
          <Typography variant='h3' className='text-3xl mt-2 font-bold'>
            Tip & Guides
          </Typography>
        </Box>
        <Grid container spacing={3}>
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
          {/* Nội dung nhỏ bên dưới */}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
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
          {/* Nội dung nhỏ bên dưới theo tablet*/}
          <Grid
            item
            container
            xs={12}
            spacing={3}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                lg: 'none',
              },
            }}>
            {dataContentNews.slice(1, 5).map((item, index) => {
              return (
                <Grid item lg={4} key={index} md={6} xs={12}>
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
          {/* Nội dung nhỏ bên dưới theo column*/}
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
            {dataContentNews.slice(1, 6).map((item, index) => {
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

export default ContentTipGuide;
