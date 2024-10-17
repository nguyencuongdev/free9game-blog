'use client';

import { Button, TextField } from '@mui/material';
import { twMerge } from 'tailwind-merge';

function Search() {
  return (
    <form method='POST' className={twMerge('border max-w-[330px] w-[330px] h-[34px] rounded-md overflow-hidden flex')}>
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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16px'
          height='16px'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#7a7a7a'>
          <g id='SVGRepo_bgCarrier' />

          <g id='SVGRepo_tracerCarrier' />

          <g id='SVGRepo_iconCarrier'>
            {' '}
            <path
              d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
              stroke='#7a7a7a'
            />{' '}
          </g>
        </svg>
      </Button>
    </form>
  );
}

export default Search;
