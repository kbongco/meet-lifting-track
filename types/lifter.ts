// types/lifter.ts
export type LifterStatus = 'registered' | 'checked-in' | 'no-show';
export type Sex = 'M' | 'F'

export interface Lifter {
  id: string
  meetId: string
  flightId: string | null
  name: string
  sex: Sex;
  lotNumber: number
  bodyweight: number | null
  weightClass: string
  division: string
  team?: string
  status: LifterStatus
}