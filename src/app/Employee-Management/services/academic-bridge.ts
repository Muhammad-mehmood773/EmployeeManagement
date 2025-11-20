import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcademicBridge {
  private getDataFnSubject = new BehaviorSubject<(() => any) | null>(null);
    private unsavedFnSubject = new BehaviorSubject<(() => boolean) | null>(null);
  
    registerDataFn(fn: () => any) {
      this.getDataFnSubject.next(fn);
    }
    getDataFn() {
      return this.getDataFnSubject.getValue();
    }
  
    registerUnsavedFn(fn: () => boolean) {
      this.unsavedFnSubject.next(fn);
    }
    getUnsavedFn() {
      return this.unsavedFnSubject.getValue();
    }
  
}
