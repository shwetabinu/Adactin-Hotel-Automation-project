import { Build } from './env';

export interface DefectFlag {
  id: string;
  description: string;
  presentOnBuild1: boolean;
  presentOnBuild2: boolean;
}

export const KNOWN_DEFECTS: DefectFlag[] = [
  { id: 'DEF-001', description: 'Booking confirmed with invalid dates', presentOnBuild1: true, presentOnBuild2: true },
  { id: 'DEF-002', description: 'Incorrect message on cancelling itinerary', presentOnBuild1: true, presentOnBuild2: true },
  { id: 'DEF-003', description: 'Booking confirmed with invalid credit card expiry date', presentOnBuild1: true, presentOnBuild2: true },
  { id: 'DEF-004', description: 'Confirmation page missing booking details (Last Name, Location, etc.)', presentOnBuild1: true, presentOnBuild2: false },
  { id: 'DEF-005', description: 'Order ID search does not support partial string match', presentOnBuild1: true, presentOnBuild2: true },
];

export function isDefectPresent(id: string, build: Build): boolean {
  const defect = KNOWN_DEFECTS.find(d => d.id === id);
  if (!defect) throw new Error(`Unknown defect id: ${id}`);
  return build === 'build1' ? defect.presentOnBuild1 : defect.presentOnBuild2;
}

export function getBuildConfig(build: Build) {
  return {
    expectedDefects: KNOWN_DEFECTS.filter(d =>
      build === 'build1' ? d.presentOnBuild1 : d.presentOnBuild2
    ).map(d => d.id),
  };
}