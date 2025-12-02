export interface Sponsor {
  name: string;
  logo: string;
  description?: string;
}

export interface Organizer {
  name: string;
  logo?: string;
  initials?: string;
  type: 'primary' | 'secondary'; // primary = with container, secondary = just image
}

// Organizers Configuration
export const organizers: Organizer[] = [
  {
    name: 'Inspire',
    logo: '/assets/inspire-logo.svg',
    type: 'primary',
  },
  {
    name: 'GoRocky',
    logo: '/assets/gorocky-logo.png',
    type: 'primary',
  },
  {
    name: 'SageDesk',
    logo: '/assets/sagedesk.jpeg',
    type: 'secondary',
  },
  {
    name: 'Ticket Nation',
    logo: '/assets/ticketnation-logo.png',
    type: 'secondary',
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
  {
    name: 'Founders Launchpad',
    logo: '/assets/founders-launchpad-logo.png',
    description: 'Partner',
  },
];
