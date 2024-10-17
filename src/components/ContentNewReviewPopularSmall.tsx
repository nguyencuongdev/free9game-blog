import { Box, Rating, Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

type ContentNewReviewPopularSmallProps = {
  className?: string;
  sx?: SxProps;
  srcImg: string;
  title: string;
  href: string;
  description?: string;
  rating: number;
};

function ContentNewReviewPopularSmall(props: ContentNewReviewPopularSmallProps) {
  const { className, sx, srcImg, title, href, description, rating } = props;

  return (
    <Box className={`${className} shadow-sm border p-2 rounded-md mb-4`} sx={{ ...sx }}>
      <Link href={href}>
        <Stack direction='row' spacing={2}>
          <Box
            width='70px'
            height='70px'
            sx={{
              '& > img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '6px',
              },
            }}>
            <Image src={srcImg} alt='game review 1' width={70} height={70} />
          </Box>
          <Box flex={1}>
            <Typography className='font-bold text-[16px]'>{title}</Typography>
            <Typography
              className='text-sm text-[#0b111f80]'
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {description}
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              readOnly
              sx={{
                '&>label>span>svg': {
                  width: '16px',
                  height: '16px',
                },
              }}
            />
          </Box>
        </Stack>
      </Link>
    </Box>
  );
}

export default ContentNewReviewPopularSmall;
