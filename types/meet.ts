export type SessionStatus = 'live' | 'ended' | 'standby';
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
  id: string;
  meetId: string;
  name: string;
  startTime: string;
  status: string;
  platFormId: string[];
  primeTime?: boolean;
}