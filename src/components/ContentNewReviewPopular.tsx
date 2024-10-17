import { Box, Rating, Stack, SxProps, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

type ContentNewReviewProps = {
  className?: string;
  sx?: SxProps;
  srcImg: string;
  title: string;
  href: string;
  description?: string;
  rating: number;
};

function ContentNewReview(props: ContentNewReviewProps) {
  const { className, sx, srcImg, title, href, description, rating } = props;

  return (
    <Box
      className={`mx-3 pt-[20px] ${className}`}
      sx={{
        '&:hover .content-title': {
          color: '#00bceb',
        },
        ...sx,
      }}>
      <Box className='bg-white rounded-md'>
        <Link href={href}>
          <Stack
            direction='row'
            spacing={3}
            alignItems='center'
            className='pb-[20px] border-b relative top-[-20px] px-6'>
            <Box
              sx={{
                '& > img': {
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                },
              }}>
              <Image src={srcImg} alt='game review 1' width={100} height={100} />
            </Box>
            <Typography className='content-title font-bold text-[18px]' variant='h5'>
              {title}
            </Typography>
          </Stack>
          <Typography
            className='mb-[20px] px-6 text-justify'
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            {description}
          </Typography>
        </Link>
        <Stack direction='row' justifyContent='space-between' alignItems='center' paddingBottom='20px' className='px-6'>
          <Rating name='simple-controlled' value={rating} readOnly />
          <Link href='/review-game/1' className='text-sm text-[#00bceb] font-semibold hover:underline'>
            Read full review
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}

export default ContentNewReview;
