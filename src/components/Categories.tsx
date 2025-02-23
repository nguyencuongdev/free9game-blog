'use client';

import { Container, List, ListItem } from '@mui/material';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategoriesListService } from '@/services';

export type CategoryItemType = {
  id: number;
  requestId: number | null;
  name: string;
  showName: boolean | null;
  slug: string;
  langcode: string;
  parentId: string;
  linkWebsite: string | null;
  numberIndex: number | null;
};

function Categories() {
  const [menu, setMenu] = useState<CategoryItemType | null>(null);

  useEffect(() => {
    const getMenuList = async () => {
      try {
        const response = await getCategoriesListService();
        const { data } = response;
        setMenu(data);
      } catch (e) {
        console.log(e);
      }
    };
    getMenuList();
  }, []);

  return (
    <Container>
      <List
        className={twMerge('flex pt-5 pb-8')}
        sx={{
          '&>.MuiListItem-root:first-of-type': {
            paddingLeft: 0,
          },
          '&>.MuiListItem-root:first-of-type > a': {
            textAlign: 'start',
          },
          '&>.MuiListItem-root:last-child': {
            paddingRight: 0,
          },
          '&>.MuiListItem-root:last-child > a': {
            textAlign: 'end',
            paddingRight: 0,
          },
          '&>.MuiListItem-root:last-child:after': {
            display: 'none',
          },
        }}>
        {menu &&
          Array.isArray(menu) &&
          menu.map((item: CategoryItemType, index: number) => (
            <ListItem
              key={index}
              className='p-0'
              sx={{
                '::after': {
                  display: 'block',
                  content: '""',
                  width: '1px',
                  height: '14px',
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  backgroundColor: '#ccc',
                },
              }}>
              <Link
                className={twMerge(
                  'inline-block text-center w-full text-xl uppercase hover:text-[#0b111f80] md:text-[18px]',
                )}
                href={item.slug}
                key={index}>
                {item.name}
              </Link>
            </ListItem>
          ))}
      </List>
    </Container>
  );
}

export default Categories;
