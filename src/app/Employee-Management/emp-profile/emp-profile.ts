import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/ng-zorro-imports';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-emp-profile',
  imports: [SHARED_IMPORTS, CommonModule, ReactiveFormsModule],
  templateUrl: './emp-profile.html',
  styleUrl: './emp-profile.css',
})
export class EmpProfile implements OnInit {
employeeProfileForm!: FormGroup;
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.employeeProfileForm = this.fb.group({
      avatar: [null],
    });
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const isImage = file.type?.startsWith('image/');
    if (!isImage) {
      alert('Only image files are allowed!');
      return false;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.employeeProfileForm.patchValue({ avatar: this.imagePreview });

      // ✅ Force Angular to detect the change immediately
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file as any);

    return false; // prevent actual upload
  };

  handleChange(event: any): void {}

}
