// leave-form.utils.ts
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export function createLeaveForm(fb: FormBuilder): FormGroup {
  return fb.group({
    leaveTypeName: ['', Validators.required],
    leaveCode: [''],
    accrualMethod: ['', Validators.required],
    daysAccrued: ['', Validators.required],
    carryForwardLimit: [''],
    maxConsecutiveDays: [''],
    backdated: [''],
    encashment: [''],
    informBefore: [''],

    isPaidLeave: [false],
    halfDaysAllowed: [false],
    proofRequired: [false],

    description: ['']
  });
}
