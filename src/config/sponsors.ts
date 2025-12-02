export interface Sponsor {
  name: string;
  logo?: string;
  description?: string;
  website?: string;
}

export interface Organizer {
  name: string;
  logo?: string;
  initials: string;
  color: string;
}

// Organizers Configuration
export const organizers: Organizer[] = [
  {
    name: 'Inspire',
    logo: '/assets/inspire-logo.svg',
    initials: 'IN',
    color: 'bg-violet-500',
  },
  {
    name: 'GoRocky',
    logo: '/assets/gorocky-logo.png',
    initials: 'GR',
    color: 'bg-blue-500',
  },
  {
    name: 'SageDesk',
    logo: '/assets/sagedesk.jpeg',
    initials: 'SD',
    color: 'bg-emerald-500',
  },
  {
    name: 'Founders Launchpad',
    logo: '/assets/founders-launchpad-logo.png',
    initials: 'FL',
    color: 'bg-orange-500',
  },
];

// Sponsors Configuration
export const sponsors: Sponsor[] = [
  {
    name: 'Kaya Founders',
    logo: '/assets/kaya-founders-logo.png',
    description: 'Venue Partner',
  },
  {
    name: 'PayRex',
    logo: '/assets/payrex-logo.png',
    description: 'Gold Sponsor',
  },
  {
    name: 'NUMMEALS',
    logo: '/assets/nummeals-logo.png',
    description: 'Food Partner',
  },
];
