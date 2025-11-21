import { FormsModule } from "@angular/forms";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzResultModule } from "ng-zorro-antd/result";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

export const SHARED_IMPORTS = [
  // Form controls
  NzInputModule,
  NzSelectModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzSwitchModule,
  FormsModule,
  NzFormModule,

  // Layout & display
  NzGridModule,
  NzCardModule,
  NzDividerModule,
  NzAvatarModule,
  NzTabsModule,
  NzBreadCrumbModule,
  NzPopoverModule,
  NzEmptyModule,
  NzResultModule,
  NzLayoutModule,
  NzTypographyModule,

  // Data
  NzTableModule,
  NzPaginationModule,
  NzTagModule,
  NzListModule,

  // Feedback
  NzModalModule,
  NzAlertModule,
  NzSpinModule,
  NzDropDownModule,
  NzSkeletonModule,

  // Actions
  NzButtonModule,
  NzIconModule,
  NzUploadModule,
  NzSpaceModule
];
