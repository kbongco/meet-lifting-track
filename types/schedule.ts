export type TimelineStatus = 'done' | 'live' | 'upcoming';

export interface TimelineFlight {
  id: string
  name: string
  lifterCount: number
  status: TimelineStatus
}

export interface TimeLineInformation {
  id: string;
  sessionId: string;
  time: string;
  status: TimelineStatus;
  title: string;
  division: string;
  platform: string;
  lifterCount: number;
  flightCount: number
  estimatedEnd: string;
  flights: TimelineFlight[];
  completedLifts: number;
  totalLifts: number;
}