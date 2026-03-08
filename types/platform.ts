import { LiftType, RoundNumber } from "./attempts"

export type PlatformStatus = 'offline' | 'active' | 'paused'
export type RefereePosition = 'left' | 'head' | 'right'
export type RefereeDecision = 'white' | 'red' | null
export type DecisionResult = 'good-lift' | 'no-lift' | 'pending'

export interface Referee {
  id: string
  platformId: string
  position: RefereePosition
  decision: RefereeDecision
  connected: boolean
}

export interface Platform {
  id: string
  meetId: string
  sessionId: string | null
  flightId: string | null
  name: string
  status: PlatformStatus
  referees: Referee[]
  currentLifterId: string | null
  currentRound: RoundNumber | null
  currentLiftType: LiftType | null
}