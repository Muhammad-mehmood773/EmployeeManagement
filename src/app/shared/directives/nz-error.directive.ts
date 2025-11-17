import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ValidationMessageService } from '../Services/form-error-helper.service';

@Directive({
  selector: '[appNzError]',
  standalone: true,
  exportAs: 'appNzError'
})
export class NzErrorDirective {
  @Input('appNzError') label?: string;

  constructor(
    private controlDir: NgControl,
    private msg: ValidationMessageService
  ) { }

  get message(): string | undefined {
    const control = this.controlDir.control;
    if (!control) return undefined;

    const fieldName = this.label || 'Field';
    const msg = this.msg.getMessage(control, fieldName);

    return msg || undefined;
  }

}
