import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'cold',
  description: 'some very cold ctf writeups and other stuff',
  href: 'https://cold.is-a.dev',
  author: 'cold',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/history',
    label: 'history',
  },
  {
    href: '/opps',
    label: 'opps',
  },
  {
    href: '/tags',
    label: 'tags',
  },
  // {
  //   href: '/resume',
  //   label: 'resume',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/colding10',
    label: 'GitHub',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
