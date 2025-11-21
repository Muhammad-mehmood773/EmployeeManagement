import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/theme/ng-zorro-imports';
import { NzNoAnimationDirective } from "ng-zorro-antd/core/no-animation";
import { EmpQuickAddBreadcrumb } from "../emp-quick-add-breadcrumb/emp-quick-add-breadcrumb";

@Component({
  selector: 'app-quick-emp-layout',
  imports: [SHARED_IMPORTS, EmpQuickAddBreadcrumb],
  templateUrl: './quick-emp-layout.html',
  styleUrl: './quick-emp-layout.css',
})
export class QuickEmpLayout {

}
