import { Box, Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type ContentNewItemByColumnProps = {
  className?: string;
  sx?: SxProps;
  srcImg: string;
  title: string;
  type: string;
  href: string;
  createAt?: string;
};

function ContentNewItemByColumn(props: ContentNewItemByColumnProps) {
  const { className, sx, srcImg, title, type, href, createAt } = props;

  return (
    <Box
      className={`content-item ${className}`}
      sx={{
        '&:hover .content-title': {
          color: '#00bceb',
        },
        ...sx,
      }}>
      <Link href={href}>
        <Stack direction='row' spacing={2}>
          <Box
            className='relative content-img'
            sx={{
              width: '50%',
              height: '200px',
              marginBottom: {
                xs: '10px',
                md: '20px',
              },
              '& > img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '6px',
              },
            }}>
            <Image src={srcImg} alt='ảnh news blog' fill={true} />
            <Typography className='uppercase text-white absolute top-3 left-3 bg-[#00bceb] px-2 py-1 font-bold rounded-md'>
              {type}
            </Typography>
          </Box>
          <Box flex={1}>
            <Typography variant='h4' className={clsx('content-title text-[16px] font-semibold')}>
              {title}
            </Typography>
            {createAt && (
              <Typography variant='h6' className='text-[16px] text-[#0b111f80]'>
                {createAt}
              </Typography>
            )}
          </Box>
        </Stack>
      </Link>
    </Box>
  );
}

export default ContentNewItemByColumn;
