// leave.facade.ts
import { Injectable } from '@angular/core'; 
import { LeaveFormPayload } from '../models/leave-form.payload'  
import { LeaveService } from '../services/leave.service';

@Injectable({ providedIn: 'root' })
export class LeaveFacade {

  constructor(private service: LeaveService) {}

  save(payload: LeaveFormPayload) {
    return this.service.createLeave(payload);
  }

  getAll() {
    return this.service.getAll();
  }
}

