export interface Testimonial {
  id: string;
  quote: string;
  rating: number;
  source: string;
  thumbsUp?: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'First budgeting app I\'ve been able to use for more than a few hours without hating it.',
    rating: 5,
    source: 'App Store Review',
    thumbsUp: 292,
    featured: true
  },
  {
    id: '2',
    quote: 'Love that everything is manual instead of linking to card accounts. I feel more accountable for my spending.',
    rating: 5,
    source: 'App Store Review',
    thumbsUp: 195,
    featured: true
  },
  {
    id: '3',
    quote: 'Simple. The keyword. Which is just perfect. Finally an app that doesn\'t try to do everything.',
    rating: 5,
    source: 'App Store Review',
    thumbsUp: 41,
    featured: true
  },
  {
    id: '4',
    quote: 'No way will I use an app that forces me to enter the same 8 transactions every month. MyDinero\'s recurring feature is a game changer.',
    rating: 5,
    source: 'App Store Review',
    featured: true
  },
  {
    id: '5',
    quote: 'Finally, someone understands that I don\'t want to connect my bank. This is exactly what I was looking for.',
    rating: 5,
    source: 'App Store Review'
  },
  {
    id: '6',
    quote: 'The subcategories feature alone makes this worth it. No other app lets me organize my expenses this way.',
    rating: 5,
    source: 'App Store Review'
  }
];
