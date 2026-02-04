export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'There\'s something deeply satisfying about manually entering each expense. It\'s become a ritual that keeps me mindful of every financial decision I make.',
    author: 'Sarah M.',
    rating: 5,
    featured: true
  },
  {
    id: '2',
    quote: 'I stopped feeling anxious about money the moment I started seeing exactly where it goes. No algorithms. No surprises. Just clarity.',
    author: 'James K.',
    rating: 5,
    featured: true
  },
  {
    id: '3',
    quote: 'For years I avoided tracking my spending because every app felt overwhelming. This one respects my time and my intelligence.',
    author: 'Emily R.',
    rating: 5,
    featured: true
  },
  {
    id: '4',
    quote: 'The recurring transactions feature alone saved my sanity. Set up once, and suddenly my budget reflects reality — not just my memory.',
    author: 'Michael T.',
    rating: 5,
    featured: true
  },
  {
    id: '5',
    quote: 'I finally understand my spending patterns. Not because an AI told me, but because I took the time to observe them myself.',
    author: 'Rachel D.',
    rating: 5,
    featured: true
  },
  {
    id: '6',
    quote: 'Privacy matters to me. Knowing my financial data stays on my devices — not on some server — lets me track everything without hesitation.',
    author: 'David L.',
    rating: 5,
    featured: true
  },
  {
    id: '7',
    quote: 'Simple enough that I actually use it. Powerful enough that I don\'t need anything else. That balance is rare.',
    author: 'Anna W.',
    rating: 5,
    featured: true
  },
  {
    id: '8',
    quote: 'My relationship with money has fundamentally changed. I\'m no longer avoiding the truth — I\'m facing it, one transaction at a time.',
    author: 'Chris P.',
    rating: 5,
    featured: true
  }
];
