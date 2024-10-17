import { Box, ListItem, SxProps, Typography } from '@mui/material';
import Link from 'next/link';

type ContentNewReviewProps = {
  className?: string;
  sx?: SxProps;
  index: number;
  title: string;
  href: string;
  createAt?: string;
};

function ContentNewReview(props: ContentNewReviewProps) {
  const { className, href, title, createAt, sx, index } = props;
  return (
    <ListItem
      className={`px-0 py-[10px] ${className}`}
      sx={{
        '&:hover .content-title': {
          color: '#00bceb',
        },
        ...sx,
      }}>
      <Link href={href} className='flex items-start'>
        <span className='mr-3 text-[24px] text-[#00bceb]'>#{index}</span>
        <Box>
          <Typography
            className='content-title font-bold text-[18px] mb-3'
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            {title}
          </Typography>
          <Typography className='text-sm text-[#0b111f80]'>{createAt}</Typography>
        </Box>
      </Link>
    </ListItem>
  );
}

export default ContentNewReview;
