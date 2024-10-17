import { Box, List, SxProps, Typography } from '@mui/material';
import { typeMenuItem } from './config';
import MenuItem from './MenuItem';

type MenuProps = {
  className?: string;
  sx?: SxProps;
  data: typeMenuItem[];
  title?: string;
};
function Menus(props: MenuProps) {
  const { className, sx, data, title } = props;
  return (
    <Box className={`menu-cotainer ${className}`} sx={{ ...sx }}>
      {title && (
        <Typography variant='h5' component='div' sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      )}
      <List>
        {data.map((item, index) => (
          <MenuItem key={index} label={item.label} href={item.href} />
        ))}
      </List>
    </Box>
  );
}

export default Menus;
