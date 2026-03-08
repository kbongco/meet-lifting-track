// types/lifter.ts
export type LifterStatus = 'registered' | 'checked-in' | 'no-show'

export interface Lifter {
  id: string
  meetId: string
  flightId: string | null
  name: string
  lotNumber: number
  bodyweight: number | null
  weightClass: string
  division: string
  team?: string
  status: LifterStatus
}