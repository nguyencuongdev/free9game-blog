import { Stack, SxProps } from '@mui/material';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type MenuNavigationItemType = {
  label: string;
  href: string;
};

type NavigationProps = {
  className?: string;
  sx?: SxProps;
};

// data fake
export const menuNavigation: MenuNavigationItemType[] = [
  {
    label: 'Reviews Games',
    href: '/reviews-games',
  },
  {
    label: 'HTML5 Games',
    href: '/h5-game',
  },
  {
    label: 'Blog',
    href: '/blogs',
  },
  {
    label: ' About us',
    href: '/about-us',
  },
];

function Navigation(props: NavigationProps) {
  const { className, sx } = props;

  return (
    <Stack direction='row' className={className} sx={{ ...sx }}>
      {menuNavigation.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={twMerge('flex px-4 text-sm last-of-type:pr-0 text-[#0b111f80] items-center hover:text-[#00bceb]')}>
          {item.label}
        </Link>
      ))}
    </Stack>
  );
}

export default Navigation;
