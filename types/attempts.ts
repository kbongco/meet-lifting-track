import { Lifter } from "./lifter"

// types/attempt.ts
export type LiftType = 'squat' | 'bench' | 'deadlift'
export type AttemptStatus = 'pending' | 'good' | 'no-lift'
export type RoundNumber = 1 | 2 | 3
export type RecordType = 'State' | 'National' | 'World'

export interface Attempt {
  id: string
  lifterId: string
  liftType: LiftType
  roundNumber: RoundNumber
  weight: number
  status: AttemptStatus
}

export interface AttemptResult {
  lifterId: string
  liftType: LiftType
  best: number | null
  total: number | null
  attempts: Attempt[]
}

export interface RankedLifter {
  lifter: Lifter
  squat: number | null
  bench: number | null
  deadlift: number | null
  total: number | null
  wilks: number | null
  place: number | null
  attempts: Attempt[]
}