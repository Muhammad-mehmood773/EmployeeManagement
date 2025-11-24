import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../../shared/helpers/validation-messages';

@Component({
  selector: 'app-quick-add-emp-job-detail',
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
  templateUrl: './quick-add-emp-job-detail.html',
  styleUrl: './quick-add-emp-job-detail.css',
})
export class QuickAddEmpJobDetail implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  employeeJobDetail!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeJobDetail = this.fb.group({
      departmentId: [null, [Validators.required]],
      designationId: [null, [Validators.required]],
      locationId: [null, [Validators.required]],
      reportingAuthorityId: [null, [Validators.required]],
      joiningDate: [null, [Validators.required]],
      shiftId: [null, [Validators.required]],
      employeeTypeId: [null, [Validators.required]],

    });
    this.formReady.emit(this.employeeJobDetail);
  }

  getError(controlName: string): string {
    const control = this.employeeJobDetail.get(controlName);
    return getNzErrorMessage(control, controlName);
  }


  markFormTouched(): void {
    Object.values(this.employeeJobDetail.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

}
