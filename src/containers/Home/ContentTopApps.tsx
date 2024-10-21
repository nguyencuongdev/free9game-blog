'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { ContentNewItem, ContentNewItemByColumn } from '@/components';
import { IGame } from '@/types';

type ContentTopAppsProps = {
  data: IGame[];
};

function ContentTopApps(props: ContentTopAppsProps) {
  const { data } = props;

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
              slug={data[0].slug}
              image={data[0].imageGame}
              type={data[0].type}
              name={data[0].gameName}
              shortContent={data[0].gameDescription}
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
            {data.slice(1, 3).map((item, index) => {
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
                    slug={item.slug}
                    image={item.imageGame}
                    type={item.type}
                    name={item.gameName}
                    createTime={'Setemper 17 2024'}
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
            {data.slice(3, data.length).map((item, index) => {
              return (
                <Grid item lg={4} key={index}>
                  <ContentNewItem
                    sm
                    key={index}
                    heightImg='200px'
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
            {data.slice(1, 5).map((item, index) => {
              return (
                <Grid item lg={4} key={index} xs={12} md={6}>
                  <ContentNewItem
                    sm
                    key={index}
                    heightImg='200px'
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
            {data.slice(1, 6).map((item, index) => {
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

export default ContentTopApps;
