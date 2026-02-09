export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export const defaultSEO = {
  siteName: 'MyDinero',
  title: 'MyDinero — Simple Expense Tracking. No Bank Sync.',
  description: 'Take control of your spending with MyDinero. Manual expense tracking with recurring transactions, subcategories, and budgets. Private by design. No bank connections required.',
  image: '/og-image.png',
  url: 'https://mydinero.app',
  twitterHandle: '@mydinero',
  locale: 'en_US'
};

export function getPageTitle(title?: string): string {
  if (!title) return defaultSEO.title;
  return `${title} | ${defaultSEO.siteName}`;
}

export function getCanonicalURL(path: string = ''): string {
  const baseURL = defaultSEO.url;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseURL}${cleanPath}`;
}

export const appStoreInfo = {
  appId: '6758524652',
  appName: 'MyDinero',
  appUrl: 'https://apps.apple.com/app/mydinero/id6758524652'
};

export const structuredData = {
  softwareApplication: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MyDinero',
    description: defaultSEO.description,
    operatingSystem: 'iOS 18+',
    applicationCategory: 'FinanceApplication',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '3.99',
      highPrice: '24.99',
      priceCurrency: 'USD',
      offerCount: 2,
      offers: [
        {
          '@type': 'Offer',
          name: 'Monthly',
          price: '3.99',
          priceCurrency: 'USD',
          priceValidUntil: '2026-12-31'
        },
        {
          '@type': 'Offer',
          name: 'Yearly',
          price: '24.99',
          priceCurrency: 'USD',
          priceValidUntil: '2026-12-31'
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1'
    },
    featureList: [
      'Manual expense tracking',
      'Recurring transactions',
      'Categories and subcategories',
      'Budget tracking with alerts',
      'Multiple account support',
      'iCloud sync',
      'No bank connections required',
      'Privacy-first design'
    ]
  }
};
