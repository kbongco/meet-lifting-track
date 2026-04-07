// import { Lifter, Attempt, LiftType, AttemptStatus } from '@/types'

import { Lifter, Attempt } from '@/types'
import { Session, Flights } from '@/types'

export const mockLifters: Lifter[] = [
  {
    id: '1',
    meetId: 'meet-1',
    flightId: 'flight-1',
    name: 'John Smith',
    sex: 'M',
    lotNumber: 14,
    bodyweight: 92.4,
    weightClass: '93',
    division: 'Open Raw',
    status: 'checked-in',
  },
  {
    id: '2',
    meetId: 'meet-1',
    flightId: 'flight-1',
    name: 'Tom Jones',
    sex: 'M',
    lotNumber: 7,
    bodyweight: 91.1,
    weightClass: '93',
    division: 'Open Raw',
    status: 'checked-in',
  },
  {
    id: '3',
    meetId: 'meet-1',
    flightId: 'flight-1',
    name: 'Marcus Webb',
    sex: 'M',
    lotNumber: 22,
    bodyweight: 92.8,
    weightClass: '93',
    division: 'Open Raw',
    status: 'checked-in',
  },
  {
    id: '4',
    meetId: 'meet-1',
    flightId: 'flight-2',
    name: 'Sarah Chen',
    sex: 'F',
    lotNumber: 3,
    bodyweight: 62.8,
    weightClass: '63',
    division: 'Open Raw',
    status: 'checked-in',
  },
  {
    id: '5',
    meetId: 'meet-1',
    flightId: 'flight-2',
    name: 'Lisa Park',
    sex: 'F',
    lotNumber: 9,
    bodyweight: 61.4,
    weightClass: '63',
    division: 'Open Raw',
    status: 'checked-in',
  },
]

export const mockAttempts: Attempt[] = [
  // John Smith — squat
  { id: 'a1',  lifterId: '1', liftType: 'squat',     roundNumber: 1, weight: 280,   status: 'good' },
  { id: 'a2',  lifterId: '1', liftType: 'squat',     roundNumber: 2, weight: 292.5, status: 'good' },
  { id: 'a3',  lifterId: '1', liftType: 'squat',     roundNumber: 3, weight: 300,   status: 'no-lift' },
  // John Smith — bench
  { id: 'a4',  lifterId: '1', liftType: 'bench',     roundNumber: 1, weight: 175,   status: 'good' },
  { id: 'a5',  lifterId: '1', liftType: 'bench',     roundNumber: 2, weight: 182.5, status: 'good' },
  { id: 'a6',  lifterId: '1', liftType: 'bench',     roundNumber: 3, weight: 190,   status: 'good' },
  // John Smith — deadlift
  { id: 'a7',  lifterId: '1', liftType: 'deadlift',  roundNumber: 1, weight: 320,   status: 'good' },
  { id: 'a8',  lifterId: '1', liftType: 'deadlift',  roundNumber: 2, weight: 335,   status: 'good' },
  { id: 'a9',  lifterId: '1', liftType: 'deadlift',  roundNumber: 3, weight: 347.5, status: 'pending' },

  // Tom Jones — squat
  { id: 'a10', lifterId: '2', liftType: 'squat',     roundNumber: 1, weight: 260,   status: 'good' },
  { id: 'a11', lifterId: '2', liftType: 'squat',     roundNumber: 2, weight: 272.5, status: 'good' },
  { id: 'a12', lifterId: '2', liftType: 'squat',     roundNumber: 3, weight: 280,   status: 'good' },
  // Tom Jones — bench
  { id: 'a13', lifterId: '2', liftType: 'bench',     roundNumber: 1, weight: 170,   status: 'good' },
  { id: 'a14', lifterId: '2', liftType: 'bench',     roundNumber: 2, weight: 177.5, status: 'no-lift' },
  { id: 'a15', lifterId: '2', liftType: 'bench',     roundNumber: 3, weight: 177.5, status: 'good' },
  // Tom Jones — deadlift
  { id: 'a16', lifterId: '2', liftType: 'deadlift',  roundNumber: 1, weight: 310,   status: 'good' },
  { id: 'a17', lifterId: '2', liftType: 'deadlift',  roundNumber: 2, weight: 322.5, status: 'good' },
  { id: 'a18', lifterId: '2', liftType: 'deadlift',  roundNumber: 3, weight: 330,   status: 'no-lift' },

  // Marcus Webb — squat
  { id: 'a19', lifterId: '3', liftType: 'squat',     roundNumber: 1, weight: 250,   status: 'good' },
  { id: 'a20', lifterId: '3', liftType: 'squat',     roundNumber: 2, weight: 262.5, status: 'good' },
  { id: 'a21', lifterId: '3', liftType: 'squat',     roundNumber: 3, weight: 270,   status: 'no-lift' },
  // Marcus Webb — bench
  { id: 'a22', lifterId: '3', liftType: 'bench',     roundNumber: 1, weight: 160,   status: 'good' },
  { id: 'a23', lifterId: '3', liftType: 'bench',     roundNumber: 2, weight: 167.5, status: 'good' },
  { id: 'a24', lifterId: '3', liftType: 'bench',     roundNumber: 3, weight: 172.5, status: 'good' },
  // Marcus Webb — deadlift
  { id: 'a25', lifterId: '3', liftType: 'deadlift',  roundNumber: 1, weight: 295,   status: 'good' },
  { id: 'a26', lifterId: '3', liftType: 'deadlift',  roundNumber: 2, weight: 307.5, status: 'good' },
  { id: 'a27', lifterId: '3', liftType: 'deadlift',  roundNumber: 3, weight: 315,   status: 'pending' },

  // Sarah Chen — squat
  { id: 'a28', lifterId: '4', liftType: 'squat',     roundNumber: 1, weight: 147.5, status: 'good' },
  { id: 'a29', lifterId: '4', liftType: 'squat',     roundNumber: 2, weight: 155,   status: 'good' },
  { id: 'a30', lifterId: '4', liftType: 'squat',     roundNumber: 3, weight: 162.5, status: 'no-lift' },
  // Sarah Chen — bench
  { id: 'a31', lifterId: '4', liftType: 'bench',     roundNumber: 1, weight: 95,    status: 'good' },
  { id: 'a32', lifterId: '4', liftType: 'bench',     roundNumber: 2, weight: 100,   status: 'good' },
  { id: 'a33', lifterId: '4', liftType: 'bench',     roundNumber: 3, weight: 105,   status: 'good' },
  // Sarah Chen — deadlift
  { id: 'a34', lifterId: '4', liftType: 'deadlift',  roundNumber: 1, weight: 182.5, status: 'good' },
  { id: 'a35', lifterId: '4', liftType: 'deadlift',  roundNumber: 2, weight: 192.5, status: 'good' },
  { id: 'a36', lifterId: '4', liftType: 'deadlift',  roundNumber: 3, weight: 200,   status: 'pending' },

  // Lisa Park — squat
  { id: 'a37', lifterId: '5', liftType: 'squat',     roundNumber: 1, weight: 135,   status: 'good' },
  { id: 'a38', lifterId: '5', liftType: 'squat',     roundNumber: 2, weight: 142.5, status: 'no-lift' },
  { id: 'a39', lifterId: '5', liftType: 'squat',     roundNumber: 3, weight: 142.5, status: 'good' },
  // Lisa Park — bench
  { id: 'a40', lifterId: '5', liftType: 'bench',     roundNumber: 1, weight: 82.5,  status: 'good' },
  { id: 'a41', lifterId: '5', liftType: 'bench',     roundNumber: 2, weight: 87.5,  status: 'good' },
  { id: 'a42', lifterId: '5', liftType: 'bench',     roundNumber: 3, weight: 92.5,  status: 'no-lift' },
  // Lisa Park — deadlift
  { id: 'a43', lifterId: '5', liftType: 'deadlift',  roundNumber: 1, weight: 167.5, status: 'good' },
  { id: 'a44', lifterId: '5', liftType: 'deadlift',  roundNumber: 2, weight: 177.5, status: 'good' },
  { id: 'a45', lifterId: '5', liftType: 'deadlift',  roundNumber: 3, weight: 185,   status: 'pending' },
]



export const mockSessions: Session[] = [
{
  id: 'session-1',
  name: 'Session 1 — M74 M83 F63 Open Raw',
  startTime: '2026-02-23T09:00:00',
  status: 'completed',
  platformIds: ['platform-1'],
  lifterCount: 18,
  estimatedEnd: '2026-02-23T12:00:00',
  completedLifts: 54,
  totalLifts: 54,
},
{
  id: 'session-2',
  name: 'Session 2 — M93 M105 F76 Open Raw',
  startTime: '2026-02-23T13:00:00',
  status: 'live',
  platformIds: ['platform-1', 'platform-2'],
  lifterCount: 22,
  estimatedEnd: '2026-02-23T17:45:00',
  completedLifts: 34,
  totalLifts: 66,
},
{
  id: 'session-3',
  name: 'Session 3 — M120 M120+ F84 F84+ Open Raw',
  startTime: '2026-02-23T17:00:00',
  status: 'upcoming',
  platformIds: ['platform-1', 'platform-2'],
  lifterCount: 20,
  estimatedEnd: '2026-02-23T21:00:00',
  completedLifts: 0,
  totalLifts: 60,
},
{
  id: 'session-4',
  name: 'Session 4 — All Classes Submaster Raw',
  startTime: '2026-02-24T09:00:00',
  status: 'upcoming',
  platformIds: ['platform-1'],
  lifterCount: 16,
  estimatedEnd: '2026-02-24T12:30:00',
  completedLifts: 0,
  totalLifts: 48,
},
{
  id: 'session-5',
  name: 'Session 5 — All Classes Masters Raw',
  startTime: '2026-02-24T13:00:00',
  status: 'upcoming',
  platformIds: ['platform-1'],
  lifterCount: 14,
  estimatedEnd: '2026-02-24T16:30:00',
  completedLifts: 0,
  totalLifts: 42,
}
]

export const mockFlights: Flights[] = [
  { id: 'flight-1', sessionId: 'session-1', name: 'Flight A' },
  { id: 'flight-2', sessionId: 'session-1', name: 'Flight B' },
  { id: 'flight-3', sessionId: 'session-2', name: 'Flight A' },
  { id: 'flight-4', sessionId: 'session-2', name: 'Flight B' },
  { id: 'flight-5', sessionId: 'session-2', name: 'Flight C' },
  { id: 'flight-6', sessionId: 'session-3', name: 'Flight A' },
  { id: 'flight-7', sessionId: 'session-3', name: 'Flight B' },
  { id: 'flight-8', sessionId: 'session-4', name: 'Flight A' },
  { id: 'flight-9', sessionId: 'session-5', name: 'Flight A' },
]