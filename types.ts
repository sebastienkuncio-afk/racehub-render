// Fix: Import React to use React types.
import type * as React from 'react';

export type RaceStatus = 'Upcoming' | 'Live' | 'Finished';

export interface Race {
  id: number;
  name: string;
  date: string;
  location: string;
  imageUrl: string;
  status: RaceStatus;
}

export interface NavLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
