import { Component, OnInit, signal } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getNzErrorMessage } from '../../shared/helpers/validation-messages';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
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
  issueDate: string | null;
  expirationDate: string | null;
  credentialId: string | null;
  credentialUrl: string | null;
  document: SkillDocument[] | null;
}

@Component({
  selector: 'app-emp-skills',
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
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
      issueDate: [null],
      expirationDate: [null],
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

    const payload = {
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified,
      uid: file.uid
    };

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
      skillId: formData.skillId,
      proficiencyId: formData.proficiencyId,
      yearOf: formData.yearOf,
      certificationName: formData.certificationName,
      issueDate: formData.issueDate,
      expirationDate: formData.expirationDate,
      credentialId: formData.credentialId,
      credentialUrl: formData.credentialUrl,
      document: formData.document || []
    };

    this.tableData.update(list => [...list, newRecord]);

    console.log("Row added:", newRecord);

    this.skillsForm.reset();
    this.fileList = [];
  } else {
    console.log('Form is invalid. Please fix errors.');
  }
}




}
