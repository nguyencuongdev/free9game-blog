import { ListItem, SxProps } from '@mui/material';
import Link from 'next/link';
import { typeMenuItem } from './config';
type MenuItemProps = {
  className?: string;
  sx?: SxProps;
} & typeMenuItem;

function MenuItem(props: MenuItemProps) {
  const { label, href, className } = props;
  return (
    <ListItem className={`menu-item ${className}`}>
      <Link href={href}>{label}</Link>
    </ListItem>
  );
}

export default MenuItem;
