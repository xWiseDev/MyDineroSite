export interface Value {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    id: 'private',
    icon: 'lock',
    title: 'Private by Design',
    description: 'No bank connections. No data selling. No analytics on your spending. Your finances stay yours and yours alone.'
  },
  {
    id: 'no-signup',
    icon: 'no-signup',
    title: 'No Sign Up',
    description: 'Uses your Apple Account and syncs encrypted data via iCloud. No email required. No password to remember. Just download and go.'
  },
  {
    id: 'calm',
    icon: 'calm',
    title: 'Calm Tracker',
    description: 'No ads. No annoying prompts. No upselling. No dark patterns. Just a peaceful space to understand your spending.'
  }
];
