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
    href: '/tags',
    label: 'tags',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://ctftime.org/user/218696',
    label: 'CTFTime',
  },
  {
    href: 'https://github.com/colding10',
    label: 'GitHub',
  },

  {
    href: 'https://www.linkedin.com/in/colin-ding-4b7147305/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:colder@duck.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  CTFTime: 'lucide:flag',
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
