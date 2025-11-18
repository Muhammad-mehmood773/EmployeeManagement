import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as XLSX from "xlsx";
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-emp-documents',
  imports: [SHARED_IMPORTS, CommonModule],
  templateUrl: './emp-documents.html',
  styleUrl: './emp-documents.css'
})
export class EmpDocuments implements OnInit {
  docsForm!: FormGroup;
  safePdfUrl: SafeResourceUrl | null = null;
  previewTable: any[] = [];
  previewVisible = false;
  previewDoc: any = null;
  onGovUpload = (file: any) => this.onSingleUpload(file, 'governmentIssueDocument');
  onAcademicUpload = (file: any) => this.onSingleUpload(file, 'employeeAcademicDocument');
  onExperienceUpload = (file: any) => this.onSingleUpload(file, 'employeeExperienceDocument');
  onSkillsUpload = (file: any) => this.onSingleUpload(file, 'employeeSkills');

  govUploaded = false;
  academicUploaded = false;
  experienceUploaded = false;
  skillsUploaded = false;



  uploadedFiles: any = {
    governmentIssueDocument: null,
    employeeAcademicDocument: null,
    employeeExperienceDocument: null,
    employeeSkills: null
  };

  allDocumentsList: any[] = [];

  fileIcons: any = {
    pdf: "file-pdf",
    jpg: "file-image",
    jpeg: "file-image",
    png: "file-image",
    gif: "file-image",
    doc: "file-word",
    docx: "file-word",
    xls: "file-excel",
    xlsx: "file-excel",
    csv: "file-text",
    txt: "file-text",
    default: "file"
  };

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
     private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.docsForm = this.fb.group({
      governmentIssueDocument: [null],
      employeeAcademicDocument: [null],
      employeeExperienceDocument: [null],
      employeeSkills: [null],
    });
  }

  onSingleUpload(file: any, controlName: string): boolean {

    const fileType = file.name.split('.').pop()?.toLowerCase() ?? 'default';
    const icon = this.fileIcons[fileType] || this.fileIcons.default;

    const record = {
      name: file.name,
      size: file.size,
      type: controlName,
      fileType: fileType,
      icon: icon,
      originFileObj: file
    };

    this.uploadedFiles[controlName] = record;
    this.allDocumentsList.push(record);

    // ---- Button hide flags ----
    if (controlName === 'governmentIssueDocument') this.govUploaded = true;
    if (controlName === 'employeeAcademicDocument') this.academicUploaded = true;
    if (controlName === 'employeeExperienceDocument') this.experienceUploaded = true;
    if (controlName === 'employeeSkills') this.skillsUploaded = true;

    return false;
  }


  download(file: any) {
    const blob = new Blob([file.originFileObj], {
      type: file.originFileObj.type || "application/octet-stream",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  }

  getIconColor(fileType: string): string {
    switch (fileType) {
      case 'pdf':
      case 'doc':
      case 'docx':
      case 'xls':
      case 'xlsx':
      case 'csv':
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      default: return '';
    }
  }


  getPdfPreview(file: any): SafeResourceUrl {
    const blob = new Blob([file.originFileObj], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  parseCSV(file: any) {
    return new Promise<string[][]>((resolve) => {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const text = e.target.result as string;
        const rows = text.split('\n').map((r) => r.split(','));
        resolve(rows);
      };

      reader.readAsText(file.originFileObj);
    });
  }



async previewDocument(file: any) {
  this.previewDoc = file;

  this.safePdfUrl = null;
  this.previewTable = [];
  this.previewVisible = true;

  // Next tick change detection fix
  this.ngZone.runOutsideAngular(() => {
    setTimeout(async () => {
      this.ngZone.run(() => {
        if (file.fileType === 'pdf') {
          const blob = new Blob([file.originFileObj], { type: 'application/pdf' });
          this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            URL.createObjectURL(blob)
          );
        }

        if (file.fileType === 'csv') {
          this.parseCSV(file).then(rows => this.previewTable = rows);
        }

        if (file.fileType === 'xls' || file.fileType === 'xlsx') {
          this.parseExcel(file).then(rows => this.previewTable = rows);
        }
      });
    });
  });
}




  parseExcel(file: any) {
    return new Promise<any[]>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        resolve(json);
      };
      reader.readAsArrayBuffer(file.originFileObj);
    });
  }

  getFilePreview(file: any): string {
    return URL.createObjectURL(file.originFileObj);
  }

  isImage(fileType: string): boolean {
    return ['jpg', 'jpeg', 'png', 'gif'].includes(fileType);
  }

  isPreviewTable(fileType: string): boolean {
    //|| fileType === 'xls' || fileType === 'xlsx' || fileType === 'csv'
    return this.isImage(fileType) || fileType === 'pdf';
  }

  formatTitle(text: string): string {
    return text
      .replace(/([A-Z])/g, ' $1')      // Capital letter se pehle space add
      .replace(/_/g, ' ')              // Agar koi underscore ho to replace
      .trim()                          // Extra spaces remove
      .replace(/\b\w/g, c => c.toUpperCase()); // Har word ka first letter capital
  }


  removeDocument(doc: any) {
    this.allDocumentsList = this.allDocumentsList.filter(d => d !== doc);

    if (doc.type === 'governmentIssueDocument') this.govUploaded = false;
    if (doc.type === 'employeeAcademicDocument') this.academicUploaded = false;
    if (doc.type === 'employeeExperienceDocument') this.experienceUploaded = false;
    if (doc.type === 'employeeSkills') this.skillsUploaded = false;

    // Uploaded file record clear
    this.uploadedFiles[doc.type] = null;
  }


}
