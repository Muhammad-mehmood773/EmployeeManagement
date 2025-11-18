import { Component, OnInit, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { EmpDocuments } from '../emp-documents/emp-documents';
export interface SkillDocument {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  uid: string;
}

export interface EmpSkillRecord {
  skillId: number | null;
  proficiencyId: number | null;
  yearOf: number | null;
  certificationName: string | null;
  issueMonth: string | null;
  expirationYear: string | null;
  credentialId: string | null;
  credentialUrl: string | null;
  document: SkillDocument[] | null;
}

@Component({
  selector: 'app-emp-skills',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, EmpDocuments],
  templateUrl: './emp-skills.html',
  styleUrl: './emp-skills.css',
})
export class EmpSkills implements OnInit {
  fileList: any[] = [];
  skillsForm!: FormGroup;
  tableData = signal<EmpSkillRecord[]>([]);

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      skillId: [null, [Validators.required]],
      proficiencyId: [null, [Validators.required]],
      yearOf: [null, [Validators.required]],
      certificationName: [null, [Validators.maxLength(100)]],
      issueMonth: [null],
      expirationYear: [null],
      credentialId: [null],
      credentialUrl: [null, [Validators.maxLength(220)]],
      document: [null],
    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getError(controlName: string): string {
    const control = this.skillsForm.get(controlName);
    return getNzErrorMessage(control, controlName);
  }

  markFormTouched(): void {
    Object.values(this.skillsForm.controls).forEach((ctrl) => {
      ctrl.markAsTouched();
      ctrl.updateValueAndValidity();
    });
  }



  beforeUpload = (file: any): boolean => {

    file.originFileObj = file;
    this.fileList = [...this.fileList, file];
    this.skillsForm.patchValue({ document: [...this.fileList] });
    return false;
  };



  handleChange({ file, fileList }: NzUploadChangeParam): void {
    this.fileList = fileList;

    this.skillsForm.patchValue({ document: fileList });

    if (file.status === 'removed') {
      console.log('File removed → Updated file list:', this.fileList);
    }

    console.log('Uploaded Files:', this.fileList);
  }

  submitForm(): void {
    this.markFormTouched();

    if (this.skillsForm.valid) {
      const formData = this.skillsForm.value;

      const newRecord: EmpSkillRecord = {
        ...formData,
        issueMonth: this.extractMonthYear(formData.issueMonth),
        expirationYear: this.extractYear(formData.expirationYear),
        document: this.fileList.map(f => ({
          name: f.name,
          type: f.type,
          size: f.size,
          lastModified: f.lastModified,
          uid: f.uid,
          originFileObj: f.originFileObj
        }))
      };

      this.tableData.update(list => [...list, newRecord]);

      this.skillsForm.reset();
      this.fileList = [];
    }
  }

  downloadFile(file: any) {
    if (!file?.originFileObj) {
      console.error("No file data to download");
      return;
    }

    const blob = new Blob([file.originFileObj], {
      type: file.type || 'application/octet-stream'
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();

    window.URL.revokeObjectURL(url);
  }



  private extractMonthYear(date: Date | null): string | null {
    if (!date) return null;

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${year}`;
  }

  private extractYear(date: Date | null): string | null {
    if (!date) return null;

    return date.getFullYear().toString();
  }

  onDelete(member: EmpSkillRecord): void {
    this.tableData.update(list => list.filter(m => m !== member));
  }



}
