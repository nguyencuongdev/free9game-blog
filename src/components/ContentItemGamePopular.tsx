import { Box, Rating, Stack, SxProps, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

type ContentItemGamePopularProps = {
  className?: string;
  sx?: SxProps;
  gameDescription: string;
  gameName: string;
  gameRating: number;
  imageGame: string;
  slug: string;
  type?: string;
};

function ContentItemGamePopular(props: ContentItemGamePopularProps) {
  const { className, sx, imageGame, gameName, type, slug, gameDescription, gameRating } = props;

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
        <Link href={`/blog/${type}/${slug}`}>
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
              <Image src={imageGame} alt='game review 1' width={100} height={100} />
            </Box>
            <Typography className='content-title font-bold text-[18px]' variant='h5'>
              {gameName}
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
            {gameDescription}
          </Typography>
        </Link>
        <Stack direction='row' justifyContent='space-between' alignItems='center' paddingBottom='20px' className='px-6'>
          <Rating name='simple-controlled' value={gameRating} readOnly />
          <Link href={`/blog/${type}/${slug}`} className='text-sm text-[#00bceb] font-semibold hover:underline'>
            Read full review
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}

export default ContentItemGamePopular;
