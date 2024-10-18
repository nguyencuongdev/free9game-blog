import { Box, Button, List, ListItem, Stack, SxProps } from '@mui/material';
import Link from 'next/link';
import { MenuNavigationItemType } from './Navigation';

type SiderbarTabletMobileProps = {
  className?: string;
  sx?: SxProps;
  closeSliderbar: () => void;
  menu: MenuNavigationItemType[];
};

function SiderbarTabletMobile(props: SiderbarTabletMobileProps) {
  const { className, sx, closeSliderbar, menu } = props;

  return (
    <Box className={`py-3 ${className}`} sx={{ ...sx }}>
      <Stack direction='row' justifyContent='flex-end' className='px-4'>
        <Button
          className='v-[24px] h-[24px] text-xl'
          sx={{
            minWidth: '24px',
            textTransform: 'lowercase',
            color: '#ccc',
          }}
          onClick={() => closeSliderbar()}>
          x
        </Button>
      </Stack>
      <List>
        {menu.map((item, index) => {
          return (
            <ListItem key={index} className='block w-full p-0'>
              <Link href={item.href} className='block w-full h-full py-2 px-4'>
                {item.label}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default SiderbarTabletMobile;
