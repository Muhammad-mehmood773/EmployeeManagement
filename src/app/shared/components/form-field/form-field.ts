import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SHARED_IMPORTS } from '../../theme/ng-zorro-imports';
import { ValidationMessageService } from '../../Services/form-error-helper.service';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule  ],
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.css']
})
export class FormFieldComponent {

  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() type: 'input' | 'select' | 'textarea' | 'switch' = 'input';
  @Input() placeholder = '';
  @Input() options: { value: any, label: string }[] = [];
  @Input() rows = 4;
  @Input() required = false;
  @Input() icon = '';
  @Input() loading: boolean = false;

  constructor(private validationService: ValidationMessageService) { }

  get error(): string | undefined {
    if (!this.required || !this.form || !this.controlName) return undefined;

    const control = this.form.get(this.controlName);
    return control ? this.validationService.getMessage(control, this.label) : undefined;
  }


}

