export type typeMenuItem = {
  label: string;
  href: string;
  children?: typeMenuItem[] | null;
};

export type typeMenu = {
  title?: string;
  children: typeMenuItem[];
};

export const menuBlog: typeMenu = {
  title: 'Blog',
  children: [
    {
      label: 'News',
      href: '/blog/news',
    },
    {
      label: 'Top Apps',
      href: '/blog/top-apps',
    },
    {
      label: 'Top Games',
      href: '/blog/top-games',
    },
    {
      label: 'How-to',
      href: '/blog/how-to',
    },
    {
      label: 'Tip&Giudes',
      href: '/blog/tips-guides',
    },
  ],
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
