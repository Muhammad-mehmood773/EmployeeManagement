import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class ValidationMessageService {


    getMessage(control: AbstractControl | null, field: string): string {
        if (!control || !control.errors) return '';


        const touched = control.touched || control.dirty;
        if (!touched) return '';


        const e = control.errors;
        const name = this.format(field);


        if (e['required']) return `${name} is required`;
        if (e['minlength']) return `${name} must be at least ${e['minlength'].requiredLength} characters`;
        if (e['maxlength']) return `${name} must be at most ${e['maxlength'].requiredLength} characters`;
        if (e['email']) return `Invalid ${name}`;


        if (e['pattern']) {
            const lower = field.toLowerCase();
            if (lower.includes('cnic')) return `Invalid CNIC`;
            if (lower.includes('passport')) return `Invalid Passport`;
            if (lower.includes('phone') || lower.includes('mobile')) return `Invalid Phone Number`;
            return `Invalid ${name}`;
        }


        const firstKey = Object.keys(e)[0];
        return firstKey ? `${name} ${firstKey}` : '';
    }


    private format(name: string): string {
        if (!name) return '';
        const s = name
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/[_\-]+/g, ' ')
            .toLowerCase();
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}