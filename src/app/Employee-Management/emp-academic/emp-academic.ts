import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { CommonModule, DatePipe } from '@angular/common';

export interface UploadedFile {
  uid: string;
  name: string;
  size?: number;
  type?: string;
  lastModified?: string;
  originFileObj?: any;
}


interface EmpAcademicModel {
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date | null;
  startYear: Date | null;
  endDate: Date | null;
  endYear: Date | null;
  gradeOrPercentage: string | null;
  currentStudyingHere: boolean;
  document: UploadedFile[];
}


@Component({
  selector: 'app-emp-academic',
  imports: [SHARED_IMPORTS, ReactiveFormsModule,CommonModule],
  templateUrl: './emp-academic.html',
  styleUrl: './emp-academic.css',
  standalone:true,
  providers:[DatePipe]
})
export class EmpAcademic implements OnInit {

  empAcademicForm!: FormGroup;
  fileList: UploadedFile[] = [];

  tableData = signal<EmpAcademicModel[]>([]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.empAcademicForm = this.fb.group({
      institutionName: ['', [Validators.required, Validators.maxLength(100)]],
      degree: ['', [Validators.required, Validators.maxLength(100)]],
      fieldOfStudy: ['', [Validators.required, Validators.maxLength(100)]],
      startDate: [null, [Validators.required]],
      startYear: [null, [Validators.required]],
      endDate: [null],
      endYear: [null],
      gradeOrPercentage: [''],
      currentStudyingHere: [false],
      document: [],
    });
  }

  // ------------------------------------------
  //           VALIDATION FUNCTIONS
  // ------------------------------------------

  getError(controlName: string): string {
    const control = this.empAcademicForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.empAcademicForm.controls).forEach(ctrl => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }

  private extractYear(date: Date | null): string | null {
    return date ? date.getFullYear().toString() : null;
  }

  // ------------------------------------------
  //                FILE UPLOAD
  // ------------------------------------------

  beforeUpload = (file: any): boolean => {
    const uploadFile: UploadedFile = {
      uid: file.uid,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      originFileObj: file
    };

    this.fileList = [...this.fileList, uploadFile];
    this.empAcademicForm.patchValue({ document: this.fileList });

    return false;
  };

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    this.fileList = fileList.map(f => ({
      uid: f.uid,
      name: f.name,
      size: f.size ?? 0,
      type: f.type ?? 'application/octet-stream',
      lastModified: f.lastModified ?? '',   // <-- FIXED
      originFileObj: f.originFileObj ?? null
    })) as UploadedFile[];

    this.empAcademicForm.patchValue({ document: this.fileList });

    if (file.status === 'removed') {
      console.log('File removed:', this.fileList);
    }
  }


  // ------------------------------------------
  //             SUBMIT FORM DATA
  // ------------------------------------------

  submitForm(): void {
    this.markFormTouched();

    if (!this.empAcademicForm.valid) return;

    const formData = this.empAcademicForm.value;

    const newRecord: EmpAcademicModel = {
      ...formData,
      startYear: this.extractYear(formData.startYear) as any,
      endYear: this.extractYear(formData.endYear) as any,
      document: [...this.fileList]
    };

    // ✔ Add to table
    this.tableData.update(list => [...list, newRecord]);

    // ✔ Reset form
    this.empAcademicForm.reset();
    this.fileList = [];
  }

  // ------------------------------------------
  //             DOWNLOAD FILE
  // ------------------------------------------

  downloadFile(file: UploadedFile) {
    if (!file?.originFileObj) {
      console.error("No file data to download");
      return;
    }

    const blob = new Blob([file.originFileObj], { type: file.type });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();

    window.URL.revokeObjectURL(url);
  }

  onDelete(record: EmpAcademicModel): void {
    this.tableData.update(list => list.filter(m => m !== record));
  }
}
