import { Box, Container, Grid, List, Typography } from '@mui/material';
import { ContentNewItem, ContentNewLastest } from '@/components';
import { INewsGame } from '@/types';

type ContentHotProps = {
  data: INewsGame[];
};

function ContentHot(props: ContentHotProps) {
  const { data } = props;

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
            slug={data[0].slug}
            image={data[0]?.banner}
            type='Hot'
            name={data[0].name}
            createTime={data[0].createTime}
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
        <Grid
          item
          lg={4.5}
          xs={12}
          sx={{
            marginTop: {
              md: '24px',
              xs: '10px',
            },
          }}>
          <Box>
            <Box>
              <Box className='w-[60px] bg-[#00bceb]' height='10px'></Box>
            </Box>
            <Typography variant='h3' className='text-3xl font-bold mt-2'>
              Latest Posts
            </Typography>
          </Box>
          <List className='py-0 px-0'>
            {data.slice(1, data.length).map((item, index) => {
              return (
                <ContentNewLastest
                  key={index}
                  slug={item.slug}
                  title={item.name}
                  index={index + 1}
                  type={item.type}
                  creatTime={item.createTime}
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
