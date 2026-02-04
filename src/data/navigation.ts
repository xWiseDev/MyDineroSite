export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' }
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'Roadmap', href: '/roadmap' }
  ],
  support: [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/contact#faq' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ]
};

export const socialLinks = [
  { label: 'App Store', href: 'https://apps.apple.com/app/mydinero', icon: 'appstore' }
];
