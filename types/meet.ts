export type SessionStatus = 'live' | 'completed' | 'standby' | 'upcoming';
export type WeightUnit = 'kg' | 'lbs';
export type Formula = 'DOTS' | 'Wilks' | 'GLP';

export interface MeetInformation {
  id: string;
  name: string;
  federation: string;
  location: string;
  city: string;
  state?: string;
  country?: string;
  startDate: string;
  endDate: string;
  weightUnit: WeightUnit;
  formula: Formula;
  notes?: string;
}

export interface Session {
  id: string
  meetId?: string
  name: string
  startTime: string
  status: SessionStatus
  platformIds: string[]
  lifterCount?: number    
  estimatedEnd?: string     
  completedLifts?: number   
  totalLifts?: number       
}

export interface Flights {
  id: string;
  sessionId: string;
  name: string;
}