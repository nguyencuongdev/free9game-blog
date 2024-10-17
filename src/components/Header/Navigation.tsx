import { Stack } from '@mui/material';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type MenuNavigationItemType = {
  label: string;
  to: string;
};

// data fake
export const menuNavigation: MenuNavigationItemType[] = [
  {
    label: 'Reviews Games',
    to: '/appreviews',
  },
  {
    label: 'HTML5 Games',
    to: '/appreviews',
  },
  {
    label: 'Blog',
    to: '/appreviews',
  },
  {
    label: ' About us',
    to: '/appreviews',
  },
];

function Navigation() {
  return (
    <Stack direction='row'>
      {menuNavigation.map((item, index) => (
        <Link
          key={index}
          href={item.to}
          className={twMerge('flex px-4 text-sm last-of-type:pr-0 text-[#0b111f80] items-center hover:text-[#00bceb]')}>
          {item.label}
        </Link>
      ))}
    </Stack>
  );
}

export default Navigation;
