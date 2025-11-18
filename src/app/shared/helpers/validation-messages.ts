import { AbstractControl } from '@angular/forms';

export function getNzErrorMessage(control: AbstractControl | null, fieldName: string): string {
  if (!control || !control.errors || !control.touched) return '';

  const errors = control.errors;
  const name = formatFieldName(fieldName);

  if (errors['required']) return `Required`;
  if (errors['minlength']) return `Min ${errors['minlength'].requiredLength} chars`;
  if (errors['maxlength']) return `Max ${errors['maxlength'].requiredLength} chars`;
  if (errors['email']) return `Invalid email`;

  if (errors['pattern']) {
    const lower = fieldName.toLowerCase();
    if (lower.includes('cnic')) return `Invalid CNIC`;
    if (lower.includes('passport')) return `Invalid Passport`;
    if (lower.includes('phone')) return `Invalid Phone`;
    return `Invalid format`;
  }

  return '';

  
}


function formatFieldName(name: string): string {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}


