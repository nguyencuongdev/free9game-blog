'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { ContentNewItem, ContentNewItemByColumn } from '@/components';

import imgNewLarge from '@/assets/imgs/topapps1.jpg';
import imgNew2 from '@/assets/imgs/topapps2.jpg';
import imgNew3 from '@/assets/imgs/topapps3.jpg';
import imgNew4 from '@/assets/imgs/topapps4.jpg';
import imgNew5 from '@/assets/imgs/topapps5.jpg';
import imgNew6 from '@/assets/imgs/topapps6.jpg';

const dataContentTopApps = [
  {
    id: 1,
    title: 'Top 10 Virus Remover Apps to Keep Your Devices Safe',
    srcImg: imgNewLarge.src,
    description:
      'In an era where digital threats are becoming increasingly sophisticated, protecting your devices from viruses and malware is essential. Virus remover apps play a crucial role in ensuring the security and integrity of your systems, whether you’re using a PC, Mac, or mobile device. This article delves into the top 10 virus remover apps that',
    type: 'Top Apps',
    createAt: 'September 18, 2024',
  },
  {
    id: 2,
    title: 'Top 5 Finance Apps ',
    srcImg: imgNew2.src,
    type: 'Top Apps',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 3,
    title: 'Top 10 Beat Maker Apps for Crafting Perfect Tracks',
    srcImg: imgNew3.src,
    type: 'Top Apps',
    description: '',

    createAt: 'September 18, 2024',
  },
  {
    id: 4,
    title: 'Top 5 Translate Apps',
    srcImg: imgNew4.src,
    type: 'Top Apps',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 5,
    title: 'Top 7 Voice Changer Apps: Transform Your Voice in Fun and Creative Ways',
    srcImg: imgNew5.src,
    type: 'Top Apps',
    description: '',
    createAt: 'September 18, 2024',
  },
  {
    id: 6,
    title: 'Comprehensive Tips and Guides for Mastering Genshin Impact ',
    srcImg: imgNew6.src,
    description: '',
    type: 'Top Apps',
    createAt: 'September 18, 2024',
  },
];

function ContentTopApps() {
  return (
    <Container>
      <Box marginTop='48px'>
        <Box marginBottom='32px'>
          <Box>
            <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
          </Box>
          <Typography variant='h3' className='text-3xl mt-2 font-bold'>
            Top Apps
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
              href={`/blog/${dataContentTopApps[0].type}/${dataContentTopApps[0].title}`}
              srcImg={dataContentTopApps[0].srcImg}
              type={dataContentTopApps[0].type}
              title={dataContentTopApps[0].title}
              description={dataContentTopApps[0].description}
              createAt={dataContentTopApps[0].createAt}
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
            {dataContentTopApps.slice(1, 3).map((item, index) => {
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
          {/* Nội dung nhỏ bên dưới theo PC*/}
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
            {dataContentTopApps.slice(3, dataContentTopApps.length).map((item, index) => {
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
                lg: 'none',
                md: 'flex',
              },
            }}>
            {dataContentTopApps.slice(1, 5).map((item, index) => {
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
          {/* Nội dung nhỏ bên dưới theo column theo mobile*/}
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
            {dataContentTopApps.slice(1, 6).map((item, index) => {
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

export default ContentTopApps;
