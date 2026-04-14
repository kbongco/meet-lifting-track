// types/schedule.ts
export type TimelineBlockStatus = 'done' | 'live' | 'upcoming'
export type FlightStatus = 'done' | 'live' | 'upcoming'

export interface TimelineFlightTag {
  id: string
  platformName?: string
  flightName: string
  lifterCount?: number
  currentLift?: string    
  status: FlightStatus
}

export interface TimelineBlock {
  id: string
  time: string
  status: TimelineBlockStatus
  title: string
  divisions?: string        
  lifterCount?: number
  platformCount?: number
  room?: string             
  duration?: string         
  actualDuration?: string   
  estimatedEnd?: string    
  progress?: number         
  flights: TimelineFlightTag[]
}