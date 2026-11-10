// Official contact destinations supplied in development brief section 12.
// Recheck social destinations before launch, especially the Discord invite.
export const clubEmail = 'spacez@my.yorku.ca';

type SocialLink = {
  name: string;
  href: string;
  label: string;
  description: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/spacez.yorku/',
    label: '@spacez.yorku',
    description: 'See what SpaceZ shares with the community.',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/spacez-aerospace/',
    label: 'SpaceZ Aerospace',
    description: 'Connect with the club’s professional presence.',
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/KWyhz8Pgh',
    label: 'Open the club invite',
    description: 'Find the SpaceZ community on Discord.',
  },
];
