import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports'; 
import { createLeaveForm } from '../utils/leave-form.utils';
import { LeaveFacade } from '../facade/leave.facade';
import { FormFieldComponent } from '../../shared/components/form-field/form-field';

@Component({
  selector: 'app-add-leave',
  standalone: true,
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule,  FormFieldComponent],
  templateUrl: './add-leave.html',
  styleUrls: ['./add-leave.css'],
})

export class AddLeave {

  // declare and initilize
  leaveForm!: FormGroup;

  // inject formbuilder
  constructor(private fb: FormBuilder, private leaveFacade: LeaveFacade) { }

  // initialize form values / methods
  ngOnInit(): void {
    this.leaveForm = createLeaveForm(this.fb); 
  }

  save(): void {
    const result = this.leaveFacade.saveLeave(this.leaveForm);

    if (!result.valid) return;

    // API call already handled in facade OR do something with payload
  }

}
