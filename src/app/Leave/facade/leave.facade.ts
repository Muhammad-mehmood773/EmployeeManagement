// leave.facade.ts
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class LeaveFacade {

  constructor() {}

  saveLeave(form: FormGroup): { valid: boolean; payload?: any } {
    if (form.invalid) {
      form.markAllAsTouched();
      return { valid: false };
    }

    const payload = form.value;

    // Here you can call your API instead of console.log
    console.log('Payload:', payload);

    return { valid: true, payload };
  }
}
