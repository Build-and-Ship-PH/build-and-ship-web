export interface Sponsor {
  name: string;
  logo?: string; // Path to logo image, optional
  description?: string; // Optional description
  website?: string; // Optional website link
}

export interface Organizer {
  name: string;
  logo?: string; // Path to logo image, optional
  description?: string; // Optional description
  role?: string; // Optional role/title
}

// Organizers Configuration
export const organizers: Organizer[] = [
  {
    name: 'Inspire',
    // logo: '/assets/sponsors/inspire-logo.png', // Uncomment when you have the logo
    description: 'Event organizer',
  },
  {
    name: 'GoRocky',
    // logo: '/assets/sponsors/gorocky-logo.png',
    description: 'Event organizer',
  },
  {
    name: 'SageDesk',
    // logo: '/assets/sponsors/sagedesk-logo.png',
    description: 'Event organizer',
  },
  {
    name: 'Ticket Nation',
    // logo: '/assets/sponsors/ticketnation-logo.png',
    description: 'Event organizer',
  },
];

// Sponsors Configuration
export const sponsors: Sponsor[] = [
  {
    name: 'Kaya Founders',
    // logo: '/assets/sponsors/kaya-logo.png',
    description: 'Venue sponsor',
  },
  {
    name: 'PayRex',
    // logo: '/assets/sponsors/payrex-logo.png',
    description: 'Gold sponsor',
  },
  {
    name: 'NUMMEALS',
    // logo: '/assets/sponsors/nummeals-logo.png',
    description: 'Food sponsor',
  },
];

/*
 * To add a logo for a sponsor/organizer:
 * 1. Place your logo image in the /public/assets/sponsors/ directory
 * 2. Uncomment the logo line and update the path
 * 3. Recommended logo dimensions: 200x200px (or similar square aspect ratio)
 * 4. Supported formats: PNG, SVG, JPG
 *
 * Example:
 * {
 *   name: 'Kaya Founders',
 *   logo: '/assets/sponsors/kaya-logo.png',
 *   description: 'Venue sponsor',
 * }
 */
