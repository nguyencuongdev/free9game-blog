export type typeMenuItem = {
  label: string;
  href: string;
  children?: typeMenuItem[] | null;
};

export type typeMenu = {
  title?: string;
  children: typeMenuItem[];
};

export const menuContact: typeMenu = {
  title: 'Contact',
  children: [
    {
      label: 'About Us',
      href: '/about-us',
    },
    {
      label: 'Privacy policy',
      href: '/privacy-policy',
    },
    {
      label: 'Disclaimer',
      href: '/disclaimer',
    },
    {
      label: 'Sitemap',
      href: '/sitemap',
    },
  ],
};
