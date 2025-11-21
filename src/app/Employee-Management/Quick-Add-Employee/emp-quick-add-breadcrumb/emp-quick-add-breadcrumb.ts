import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-emp-quick-add-breadcrumb',
  imports: [NzBreadCrumbModule,NzIconModule,NzTypographyModule],
  templateUrl: './emp-quick-add-breadcrumb.html',
  styleUrl: './emp-quick-add-breadcrumb.css',
})
export class EmpQuickAddBreadcrumb {

}
