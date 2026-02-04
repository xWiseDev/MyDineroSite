export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  trial: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  note?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$3.99',
    period: '/month',
    trial: '3-day free trial',
    features: [
      'Unlimited transactions',
      'Recurring transactions',
      'Categories & subcategories',
      'Budget tracking',
      'Multiple accounts',
      'iCloud sync',
      'No ads ever'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$24.99',
    period: '/year',
    trial: '7-day free trial',
    features: [
      'Everything in Monthly',
      'Priority support',
      'Early access to new features'
    ],
    featured: true,
    badge: 'SAVE 48%',
    note: 'That\'s just $2.08/month'
  }
];
