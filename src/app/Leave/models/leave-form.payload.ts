export interface LeaveFormPayload {
  leaveTypeName: string;
  leaveCode: string;
  accrualMethodId: number;
  daysAccrued: number;
  carryForwardLimit: number;
  maxConsecutiveDays: number;
  backdated: number;
  encashment: number;
  informBefore: number;

  isPaidLeave: boolean;
  isHalfDaysAllowed: boolean;
  isProofRequired: boolean;

  description: string;
}
