import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobDetailsBridge {
   private validateFnSubject = new BehaviorSubject<(() => boolean) | null>(null);
  private getDataFnSubject = new BehaviorSubject<(() => any) | null>(null);
  private hasUnsavedFnSubject = new BehaviorSubject<(() => boolean) | null>(null);

  // register methods from child
  registerValidateFn(fn: () => boolean) {
    this.validateFnSubject.next(fn);
  }

  registerDataFn(fn: () => any) {
    this.getDataFnSubject.next(fn);
  }

  registerUnsavedFn(fn: () => boolean) {
    this.hasUnsavedFnSubject.next(fn);
  }

  // getters for parent
  getValidateFn() {
    return this.validateFnSubject.getValue();
  }

  getDataFn() {
    return this.getDataFnSubject.getValue();
  }

  getUnsavedFn() {
    return this.hasUnsavedFnSubject.getValue();
  }
}
