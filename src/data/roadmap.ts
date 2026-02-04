export type RoadmapStatus = 'shipped' | 'inProgress' | 'planned' | 'exploring';

export interface RoadmapItem {
  title: string;
  description: string;
  icon: string;
  status: RoadmapStatus;
}

export interface TimelinePhase {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  icon: string;
  status: RoadmapStatus;
  items: RoadmapItem[];
}

export const timelinePhases: TimelinePhase[] = [
  {
    id: "future",
    title: "Future Vision",
    subtitle: "On the Horizon",
    date: "2026+",
    icon: "sparkles",
    status: "exploring",
    items: [
      {
        title: "Split Transactions",
        description: "One purchase, multiple categories — finally possible",
        icon: "divide",
        status: "exploring"
      }
    ]
  },
  {
    id: "upcoming",
    title: "Coming Soon",
    subtitle: "Next Up",
    date: "Q2 2026",
    icon: "rocket",
    status: "planned",
    items: [
      {
        title: "Multiple Profiles",
        description: "Keep personal and business finances separate, all in one app",
        icon: "users",
        status: "planned"
      },
      {
        title: "Savings Goals",
        description: "Set targets and watch your progress grow over time",
        icon: "target",
        status: "planned"
      },
      {
        title: "Home Screen Widgets",
        description: "See your spending at a glance without opening the app",
        icon: "grid",
        status: "planned"
      },
      {
        title: "Loan Tracking",
        description: "Never forget who owes you or what you owe others",
        icon: "arrows",
        status: "planned"
      },
      {
        title: "Face ID / Touch ID Lock",
        description: "Keep your financial data private and secure",
        icon: "lock",
        status: "planned"
      }
    ]
  },
  {
    id: "v1",
    title: "Version 1.0",
    subtitle: "Launch Release",
    date: "February 2026",
    icon: "check",
    status: "shipped",
    items: [
      {
        title: "Transaction Tracking",
        description: "Track expenses, income, and transfers with a beautiful calculator interface",
        icon: "plus",
        status: "shipped"
      },
      {
        title: "Multiple Accounts",
        description: "Manage cash, bank accounts, credit cards, and more",
        icon: "wallet",
        status: "shipped"
      },
      {
        title: "Categories & Subcategories",
        description: "Organize transactions with custom categories and subcategories",
        icon: "categories",
        status: "shipped"
      },
      {
        title: "Budgets",
        description: "Set monthly spending limits with smart alerts and rollover",
        icon: "budgets",
        status: "shipped"
      },
      {
        title: "Recurring Transactions",
        description: "Auto-track subscriptions, bills, and regular income",
        icon: "recurring",
        status: "shipped"
      },
      {
        title: "Analytics & Charts",
        description: "Visual breakdown of spending by category",
        icon: "chart",
        status: "shipped"
      },
      {
        title: "150+ World Currencies",
        description: "Support for currencies worldwide with proper formatting",
        icon: "globe",
        status: "shipped"
      },
      {
        title: "Daily Streak Tracking",
        description: "Build habits with streak celebrations and milestones",
        icon: "flame",
        status: "shipped"
      },
      {
        title: "Siri & Shortcuts",
        description: "Add transactions hands-free with voice commands",
        icon: "mic",
        status: "shipped"
      },
      {
        title: "Default Account",
        description: "Set your most-used account as default",
        icon: "star",
        status: "shipped"
      },
      {
        title: "iCloud Sync",
        description: "Your data automatically syncs across all your Apple devices",
        icon: "cloud",
        status: "shipped"
      },
      {
        title: "Export to CSV",
        description: "Take your data anywhere — perfect for spreadsheets and backups",
        icon: "export",
        status: "shipped"
      }
    ]
  }
];

export const statusConfig: Record<RoadmapStatus, { label: string; color: string }> = {
  shipped: { label: "Shipped", color: "green" },
  inProgress: { label: "In Progress", color: "orange" },
  planned: { label: "Planned", color: "blue" },
  exploring: { label: "Exploring", color: "purple" }
};
