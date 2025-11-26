import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type ProfileViewMode = 'grid' | 'card' | 'list';
@Injectable({
  providedIn: 'root',
})
export class AccessPermissionBridge {
  private validateFnSubject = new BehaviorSubject<(() => boolean) | null>(null);
  private getDataFnSubject = new BehaviorSubject<(() => any) | null>(null);
  private hasUnsavedFnSubject = new BehaviorSubject<(() => boolean) | null>(null);

  registerValidateFn(fn: () => boolean) {
    this.validateFnSubject.next(fn);
  }

  registerDataFn(fn: () => any) {
    this.getDataFnSubject.next(fn);
  }

  registerUnsavedFn(fn: () => boolean) {
    this.hasUnsavedFnSubject.next(fn);
  }

  getValidateFn() {
    return this.validateFnSubject.getValue();
  }

  getDataFn() {
    return this.getDataFnSubject.getValue();
  }

  getUnsavedFn() {
    return this.hasUnsavedFnSubject.getValue();
  }



  private viewModeSubject = new BehaviorSubject<ProfileViewMode>('grid');
  viewMode$ = this.viewModeSubject.asObservable();

  setView(view: ProfileViewMode) {
    this.viewModeSubject.next(view);
  }

  toggleNext() {
    const current = this.viewModeSubject.getValue();
    const next: ProfileViewMode = current === 'grid' ? 'card' : current === 'card' ? 'list' : 'grid';
    this.viewModeSubject.next(next);
  }

  getView() {
    return this.viewModeSubject.getValue();
  }

}
