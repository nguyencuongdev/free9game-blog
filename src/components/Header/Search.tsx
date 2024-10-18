'use client';

import { forwardRef } from 'react';
import { Box, Button, SxProps, TextField } from '@mui/material';
import { SearchIcon } from '../Icons';
import { cn } from '@/utils';

type SearchProps = {
  className?: string;
  sx?: SxProps;
};

function Search(props: SearchProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, sx } = props;

  return (
    <Box className={className} sx={{ ...sx }} ref={ref}>
      <form method='POST' className={cn('border max-w-[330px] w-[330px] h-[34px] rounded-md overflow-hidden flex')}>
        <TextField
          placeholder='Search games here'
          name='searchValue'
          size='small'
          autoComplete='off'
          sx={{
            width: '100%',
            border: 'none',
            '& .MuiInputBase-root': {
              width: '100%',
              height: '100%',
              color: '#0b111f80',
            },
            '& .MuiInputBase-root:hover > .MuiOutlinedInput-notchedOutline ': {
              borderColor: '#fff',
            },
            '& .MuiInputBase-root:forcus > .MuiOutlinedInput-notchedOutline ': {
              borderColor: '#fff',
            },
            '& .MuiOutlinedInput-notchedOutline ': {
              padding: '0 0 0 16px !important',
              borderColor: '#fff !important',
            },
          }}
        />
        <Button
          type='submit'
          variant='text'
          sx={{
            fontSize: '16px',
            minWidth: '46px',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}>
          <SearchIcon />
        </Button>
      </form>
    </Box>
  );
}

export default forwardRef(Search);
