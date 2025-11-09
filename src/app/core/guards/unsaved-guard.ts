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
        event.returnValue = ''; // shows native browser confirm
      }
    });

  }

  private lastComponent?: HasUnsavedChanges;

  canDeactivate(component: HasUnsavedChanges): boolean | Observable<boolean> {
    this.lastComponent = component;
    return new Observable<boolean>(observer => {
      const modalRef = this.modal.confirm({
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
