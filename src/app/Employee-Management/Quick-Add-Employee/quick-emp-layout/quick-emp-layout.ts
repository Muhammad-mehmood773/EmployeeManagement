import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/theme/ng-zorro-imports';
import { EmpQuickAddBreadcrumb } from "../emp-quick-add-breadcrumb/emp-quick-add-breadcrumb";
import { QuickAddEmpInfo } from "../quick-add-emp-info/quick-add-emp-info";
import { QuickAddEmpJobDetail } from "../quick-add-emp-job-detail/quick-add-emp-job-detail";
import { SalaryAllowancesBenefits } from "../../salary-allowances-benefits/salary-allowances-benefits";
import { EmpAccessPermissions } from "../../emp-access-permissions/emp-access-permissions";

@Component({
  selector: 'app-quick-emp-layout',
  imports: [SHARED_IMPORTS, EmpQuickAddBreadcrumb, QuickAddEmpInfo, QuickAddEmpJobDetail, SalaryAllowancesBenefits, EmpAccessPermissions],
  templateUrl: './quick-emp-layout.html',
  styleUrl: './quick-emp-layout.css',
})
export class QuickEmpLayout {

}
