export interface ServiceEntry {
  role: string;
  event: string;
  venue: string;
  dates: string;
}

export const service: ServiceEntry[] = [
  {
    role: 'Organizer',
    event: 'PENGWIN 2026',
    venue: 'MICCAI 2026',
    dates: 'Apr. 2026 – Oct. 2026'
  },
  {
    role: 'Organizer',
    event: 'PENGWIN 2024',
    venue: 'MICCAI 2024',
    dates: 'Apr. 2024 – Oct. 2024'
  },
  {
    role: 'Reviewer',
    event: 'IEEE International Symposium on Mixed and Augmented Reality (ISMAR)',
    venue: 'ISMAR',
    dates: '2026'
  }
];
