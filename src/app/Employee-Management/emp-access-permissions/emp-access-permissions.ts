import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { AccessPermissionBridge } from '../services/access-permission-bridge';

@Component({
  selector: 'app-emp-access-permissions',
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
  templateUrl: './emp-access-permissions.html',
  styleUrl: './emp-access-permissions.css',
})
export class EmpAccessPermissions implements OnInit {

  roleAccessForm!: FormGroup;

  constructor(private fb: FormBuilder, private bridge: AccessPermissionBridge) {}

  ngOnInit(): void {
    this.roleAccessForm = this.fb.group({
      hrmsUserName: ['', [Validators.required, Validators.maxLength(100)]],
      workEmail: ['', [Validators.required, Validators.maxLength(100)]],
      roleId: [null, [Validators.required]]
    });

     // 🔹 Register bridge methods
    this.bridge.registerValidateFn(() => this.validateForm());
    this.bridge.registerDataFn(() => this.getPermissionData());
    this.bridge.registerUnsavedFn(() => this.hasUnsavedChanges());
  }
  validateForm(): boolean {
     this.markFormTouched();
    return this.roleAccessForm.valid;
  }

  getPermissionData() {
    return this.roleAccessForm.value;
  }

  hasUnsavedChanges(): boolean {
    return this.roleAccessForm.dirty;
  }

  getError(controlName: string): string {
    const control = this.roleAccessForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.roleAccessForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }





}
