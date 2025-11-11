import { Injectable, HostListener } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, fromEvent, merge, of } from 'rxjs';

export interface HasUnsavedChanges {
  hasUnsavedChanges: () => boolean;
}

@Injectable({ providedIn: 'root' })
export class UnsavedGuard implements CanDeactivate<HasUnsavedChanges> {

  constructor(private modal: NzModalService) {
    fromEvent<BeforeUnloadEvent>(window, 'beforeunload').subscribe(event => {
      if (this.lastComponent?.hasUnsavedChanges()) {
        event.preventDefault();
        event.returnValue = '';
      }
    });


  }

 private lastComponent?: HasUnsavedChanges | null;


canDeactivate(component: HasUnsavedChanges | null | undefined): boolean | Observable<boolean> { 
  this.lastComponent = component;

  if (!component || typeof component.hasUnsavedChanges !== 'function') {
    return true;
  }

  if (!component.hasUnsavedChanges()) {
    return true;
  }

  return new Observable<boolean>(observer => {
    this.modal.confirm({
      nzTitle: 'Unsaved Changes',
      nzContent: 'You have unsaved changes. Are you sure you want to leave this page?',
      nzOkText: 'Leave',
      nzCancelText: 'Stay',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCentered: true,
      nzOnOk: () => {
        observer.next(true);
        observer.complete();
      },
      nzOnCancel: () => {
        observer.next(false);
        observer.complete();
      }
    });
  });
}



}
