// leave.service.ts
import { Injectable } from '@angular/core';
import { LeaveFormPayload } from '../models/leave-form.payload';
import { LeaveApiResponse, LeaveFormResponse, LeaveListApiResponse } from '../models/leave-form.response';
import { Observable, of } from 'rxjs'; 

@Injectable({ providedIn: 'root' })
export class LeaveService {

  private jsonDb: LeaveFormResponse[] = [];

  createLeave(payload: LeaveFormPayload): Observable<LeaveApiResponse> {

    const item: LeaveFormResponse = {
      leaveTypeName: payload.leaveTypeName,
      leaveCode: payload.leaveCode,
      accrualMethodId: payload.accrualMethodId,
      daysAccrued: payload.daysAccrued,
      carryForwardLimit: payload.carryForwardLimit,
      maxConsecutiveDays: payload.maxConsecutiveDays,
      backdated: payload.backdated,
      encashment: payload.encashment,
      informBefore: payload.informBefore,

      isPaidLeave: payload.isPaidLeave,
      isHalfDaysAllowed: payload.isHalfDaysAllowed,
      isProofRequired: payload.isProofRequired,

      description: payload.description
    };

    this.jsonDb.push(item);

    return of({
      success: true,
      message: 'Saved successfully (local JSON)',
      data: item
    });
  }

  getAll(): Observable<LeaveListApiResponse> {
    return of({
      success: true,
      message: "Fetched successfully",
      data: this.jsonDb
    });
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { LeaveFormPayload } from '../models/leave-form.payload';
// import { LeaveApiResponse } from '../models/leave-form.response';

// @Injectable({ providedIn: 'root' })
// export class LeaveService {
//     private baseUrl = '/api/leaves';

//     constructor(private http: HttpClient) { }

//     createLeave(payload: LeaveFormPayload): Observable<LeaveApiResponse> {
//         return this.http.post<LeaveApiResponse>(`${this.baseUrl}`, payload);
//     }

//     getLeaves(): Observable<LeaveApiResponse[]> {
//         return this.http.get<LeaveApiResponse[]>(`${this.baseUrl}`);
//     }

//     // aur bhi CRUD operations yahan define kar sakte ho
// }
