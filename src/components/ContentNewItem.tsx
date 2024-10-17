import { Box, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type ContentNewItemProps = {
  className?: string;
  sx?: SxProps;
  srcImg: string;
  title: string;
  type: string;
  href: string;
  description?: string;
  createAt?: string;
  heightImg?: string;
  sm?: boolean;
  lg?: boolean;
};

function ContentNewItem(props: ContentNewItemProps) {
  const { className, sx, srcImg, title, type, href, description, createAt, heightImg, sm, lg } = props;

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
        <Box
          height={heightImg ? heightImg : lg ? '359px' : sm ? '200px' : ''}
          width='100%'
          className='relative content-img'
          sx={{
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
          <Typography className='uppercase text-white absolute top-3 left-3 bg-[#00bceb] py-[6px] px-[10px] font-bold rounded-md'>
            {type}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='h4'
            className={clsx('content-title', {
              'text-[28px] font-bold mb-3 whitespace-nowrap overflow-hidden text-ellipsis': lg,
              'text-[18px] font-bold mb-3 whitespace-nowrap overflow-hidden text-ellipsis': sm,
            })}>
            {title}
          </Typography>
          {description && (
            <Typography
              variant='h5'
              className='text-[16px] mb-3 text-justify text-[#0b111f80]'
              sx={{
                display: {
                  md: '-webkit-box',
                  xs: lg ? 'none' : 'block',
                },
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {description}
            </Typography>
          )}
          {createAt && (
            <Typography variant='h6' className='text-sm text-[#0b111f80]'>
              {createAt}
            </Typography>
          )}
        </Box>
      </Link>
    </Box>
  );
}

export default ContentNewItem;
