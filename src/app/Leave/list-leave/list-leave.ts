import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveFormResponse } from '../models/leave-form.response';
import { LeaveFacade } from '../facade/leave.facade';

@Component({
  selector: 'app-list-leave',
  standalone: true,
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule],
  templateUrl: './list-leave.html',
  styleUrl: './list-leave.css',
})
export class ListLeave {

  leaveList: LeaveFormResponse[] = [];


constructor(private facade: LeaveFacade) {}

ngOnInit() {
  this.facade.getAll().subscribe(res => {
    if (res.success) {
      this.leaveList = res.data;
    }
  });

}

}
