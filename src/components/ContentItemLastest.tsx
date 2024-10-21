import { Box, ListItem, SxProps, Typography } from '@mui/material';
import Link from 'next/link';

type ContentItemLastestProps = {
  className?: string;
  sx?: SxProps;
  index: number;
  title: string;
  slug: string;
  type: string | null | undefined;
  creatTime?: string;
};

function ContentItemLastest(props: ContentItemLastestProps) {
  const { className, slug, type, title, creatTime, sx, index } = props;
  return (
    <ListItem
      className={`px-0 py-[10px] ${className}`}
      sx={{
        '&:hover .content-title': {
          color: '#00bceb',
        },
        ...sx,
      }}>
      <Link href={`/blog/${type}/${slug}`} className='flex items-start'>
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
          <Typography className='text-sm text-[#0b111f80]'>{creatTime}</Typography>
        </Box>
      </Link>
    </ListItem>
  );
}

export default ContentItemLastest;
