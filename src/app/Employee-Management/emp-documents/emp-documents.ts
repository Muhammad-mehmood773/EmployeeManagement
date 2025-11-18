import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/theme/ng-zorro-imports';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as XLSX from "xlsx";
@Component({
  selector: 'app-emp-documents',
  imports: [SHARED_IMPORTS,CommonModule],
  templateUrl: './emp-documents.html',
  styleUrl: './emp-documents.css'
})
export class EmpDocuments implements OnInit {
  docsForm!: FormGroup;
safePdfUrl: SafeResourceUrl | null = null;

  onGovUpload = (file: any) => this.onSingleUpload(file, 'govermentIssueDocument');
onAcedmicUpload = (file: any) => this.onSingleUpload(file, 'employeeAcedmicDocument');
onExperienceUpload = (file: any) => this.onSingleUpload(file, 'employeeExpreienceDocument');
onSkillsUpload = (file: any) => this.onSingleUpload(file, 'employeeSkills');

uploadedFiles: any = {
  govermentIssueDocument: null,
  employeeAcedmicDocument: null,
  employeeExpreienceDocument: null,
  employeeSkills: null
};

allDocumentsList: any[] = []; // MASTER LIST

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
  default: "file"
};

constructor(
  private fb: FormBuilder,
  private cdr: ChangeDetectorRef,
  private sanitizer: DomSanitizer
) {}

  ngOnInit(): void {
    this.docsForm = this.fb.group({
      govermentIssueDocument: [null],
      employeeAcedmicDocument: [null],
      employeeExpreienceDocument: [null],
      employeeSkills: [null],
    });


  }

onSingleUpload(file: any, controlName: string): boolean {
  const fileType = file.name.split('.').pop()?.toLowerCase() ?? 'default';
  const icon = this.fileIcons[fileType] || this.fileIcons.default;

  const record = {
    name: file.name,
    size: file.size,
    type: controlName,          // Which document category
    fileType: fileType,         // extension
    icon: icon,                 // icon for list
    originFileObj: file
  };

  // Save separately for payload
  this.uploadedFiles[controlName] = record;

  // Push into master list
  this.allDocumentsList.push(record);

  return false;
}

submitDocuments() {
  const formData = new FormData();

  Object.keys(this.docsForm.value).forEach(key => {
    const fileObj = this.docsForm.value[key];
    formData.append(key, fileObj?.originFileObj ?? null);
  });

  console.log("Multipart Payload:", formData);
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


previewVisible = false;
previewDoc: any = null;



// Helper functions
  getFilePreview(file: any): string {
    return URL.createObjectURL(file.originFileObj);
  }

  isImage(fileType: string): boolean {
    return ['jpg', 'jpeg', 'png', 'gif'].includes(fileType);
  }

isPreviewable(fileType: string): boolean {
  return this.isImage(fileType) || fileType === 'pdf' || fileType === 'xls' || fileType === 'xlsx'|| fileType === 'csv';
}


getIconColor(fileType: string): string {
  switch(fileType) {
    case 'pdf': return '#E53935';        // red
    case 'doc':
    case 'docx': return '#1E88E5';       // blue
    case 'xls':
    case 'xlsx':       // green
    case 'csv':        // orange
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif': return '#43A047';        // green
    default: return '#757575';           // gray
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

previewTable: any[] = [];

async previewDocument(file: any) {
  this.previewDoc = file;

  this.safePdfUrl = null;
  this.previewTable = [];

  if (file.fileType === 'pdf') {
    const blob = new Blob([file.originFileObj], { type: 'application/pdf' });
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      URL.createObjectURL(blob)
    );
  }

  // CSV Preview
  if (file.fileType === 'csv') {
    this.previewTable = await this.parseCSV(file);
  }

  // Excel Preview
  if (file.fileType === 'xls' || file.fileType === 'xlsx') {
    this.previewTable = await this.parseExcel(file);
  }

  this.previewVisible = true;
  this.cdr.detectChanges();
}


}
