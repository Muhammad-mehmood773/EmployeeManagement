// leave-form.utils.ts
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export function createLeaveForm(fb: FormBuilder): FormGroup {
  return fb.group({
    leaveTypeName: ['', Validators.required],
    leaveCode: [''],

    accrualMethodId: [null, Validators.required],
    daysAccrued: [null, Validators.required],

    carryForwardLimit: [null],
    maxConsecutiveDays: [null],
    backdated: [null],
    encashment: [null],
    informBefore: [null],

    isPaidLeave: [false],
    isHalfDaysAllowed: [false],
    isProofRequired: [false],

    description: ['']
  });
}
