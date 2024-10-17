import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

import imgLogo from '@/assets/imgs/logo.png';
import Link from 'next/link';
import FooterMenus from './FooterMenus';

function Footer() {
  return (
    <Box className='bg-[#101829] py-10'>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Box>
              <Box className='mb-5'>
                <Link href='/'>
                  <Image src={imgLogo} alt='logo page' />
                </Link>
              </Box>
              <Typography className='text-[#ffffffd9] text-sm'>
                Welcome to free9game.com, your compass for comprehenscoupled with the latest industry news. Our mission
                is to provide you with insightful analysis and valuable insights, enriching your digital journey.
              </Typography>
              <Typography
                className='mt-10 text-[12px] text-[#ffffff80]'
                sx={{
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                }}>
                © 2024 free9game.com - All Rights Reserved
              </Typography>
            </Box>
          </Grid>
          <FooterMenus />
        </Grid>
        <Typography
          className='mt-3 text-[12px] text-[#ffffff80]'
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}>
          © 2024 free9game.com - All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
