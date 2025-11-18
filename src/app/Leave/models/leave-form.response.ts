import { ApiResponse } from "../../shared/models/api.response";

export interface LeaveFormResponse {
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

export type LeaveApiResponse = ApiResponse<LeaveFormResponse>;

export type LeaveListApiResponse = ApiResponse<LeaveFormResponse[]>;
