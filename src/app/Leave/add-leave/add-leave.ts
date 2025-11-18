import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { createLeaveForm } from '../utils/leave-form.utils';
import { LeaveFacade } from '../facade/leave.facade';
import { FormFieldComponent } from '../../shared/components/form-field/form-field';
import { LeaveFormPayload } from '../models/leave-form.payload';

@Component({
  selector: 'app-add-leave',
  standalone: true,
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './add-leave.html',
  styleUrls: ['./add-leave.css'],
})

export class AddLeave {

  isLoading = true;

  // declare and initilize
  leaveForm!: FormGroup;

  // inject formbuilder
  constructor(private fb: FormBuilder, private facade: LeaveFacade) { }

  // initialize form values / methods
  ngOnInit(): void {
    this.leaveForm = createLeaveForm(this.fb);

    setTimeout(() => {
      this.isLoading = false;
    }, 20); // 2 seconds
  }

  save() {
    if (this.leaveForm.invalid) {
      this.leaveForm.markAllAsTouched();
      return;
    }

    const payload = this.leaveForm.value as LeaveFormPayload;

    this.facade.save(payload).subscribe({
      next: (res) => {
        console.log('Saved:', res.data);
      },
      error: (err) => console.error(err)
    });
  }



}
