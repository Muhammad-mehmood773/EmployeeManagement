import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddMapAllowanceModal } from '../modals/add-map-allowance-modal/add-map-allowance-modal';
import { AddMapBenefitsModal } from '../modals/add-map-benefits-modal/add-map-benefits-modal';

@Component({
  selector: 'app-salary-allowances-benefits',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, CommonModule],
  templateUrl: './salary-allowances-benefits.html',
  styleUrl: './salary-allowances-benefits.css',
})
export class SalaryAllowancesBenefits implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();

  salaryPackForm!: FormGroup;

  constructor(private fb: FormBuilder, private modal: NzModalService) { }

  ngOnInit(): void {
    this.salaryPackForm = this.fb.group({
      basicSalary: [null, [Validators.required]],
      grossSalary: [null, [Validators.required]],
      salaryFrequencyId: [null, [Validators.required]],
      allowancesMapId: [null],
      benefitsId: [null],
    });
    this.formReady.emit(this.salaryPackForm);

  }

  getError(controlName: string): string {
    const control = this.salaryPackForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }



  markFormTouched(): void {
    Object.values(this.salaryPackForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  validateForm(): boolean {
    this.markFormTouched();
    return this.salaryPackForm.valid;
  }


  openAllowanceModal() {
    const modalRef = this.modal.create({
      nzTitle: 'Map Employee Allowances',
      nzContent: AddMapAllowanceModal,
      nzWidth: 650,
      nzBodyStyle: {
        background: '#f1f4fa',
        padding: '10px',
        maxHeight: '70vh',
        overflowY: 'auto',
        top: '0px'
      },
      nzFooter: [
        {
          label: 'Cancel',
          onClick: (componentInstance) => modalRef.destroy()
        },
        {
          label: 'Map Allowance',
          type: 'primary',
          onClick: (componentInstance) => {
            modalRef.close(componentInstance?.form.value); 
          }
        }
      ]
    });

    modalRef.afterClose.subscribe(result => {
      if (result) {
        console.log('Selected Allowances:', result);
      }
    });
  }


  openBenefitsModal() {
     const modalRef = this.modal.create({
      nzTitle: 'Mark Benefits to Employee',
      nzContent: AddMapBenefitsModal,
      nzWidth: 650,
      nzBodyStyle: {
        background: '#f1f4fa',
        padding: '10px',
        maxHeight: '70vh',
        overflowY: 'auto',
        top: '0px'
      },
      nzFooter: [
        {
          label: 'Cancel',
          onClick: (componentInstance) => modalRef.destroy()
        },
        {
          label: 'Map Allowance',
          type: 'primary',
          onClick: (componentInstance) => {
            modalRef.close(componentInstance?.form.value); 
          }
        }
      ]
    });

    modalRef.afterClose.subscribe(result => {
      if (result) {
        console.log('Selected Allowances:', result);
      }
    });
  }

}
