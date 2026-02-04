export interface Feature {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
}

export const features: Feature[] = [
  {
    id: 'recurring',
    icon: 'recurring',
    title: 'Recurring Transactions',
    tagline: 'Set once, forget forever',
    description: 'Netflix, rent, gym — enter them once and they auto-populate every month. Skip or modify individual instances without affecting the recurring rule.',
    image: '/images/feature-recurring.png'
  },
  {
    id: 'categories',
    icon: 'categories',
    title: 'Categories + Subcategories',
    tagline: 'Organize your way',
    description: 'Food → Groceries, Restaurants, Coffee. See totals at every level with roll-up reporting. Finally organize expenses the way your brain actually works.',
    image: '/images/feature-categories.png'
  },
  {
    id: 'budgets',
    icon: 'budgets',
    title: 'Budget Tracking',
    tagline: 'Never overspend again',
    description: 'Set limits per category. Get notified at 80% and 100%. Visual progress bars show exactly where you stand — no surprises at month end.',
    image: '/images/feature-budgets.png'
  },
  {
    id: 'daily-totals',
    icon: 'calendar',
    title: 'Daily Spending Totals',
    tagline: 'See each day at a glance',
    description: 'No mental math required. Total spent shown next to each date. Spot spending patterns instantly.',
    image: '/images/hero-mockup.png'
  }
];
