import { Component } from '@angular/core';
import Tesseract from 'tesseract.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Mobile NIC Scan</h2>
    <p>Step 1: Paste Laptop offer SDP JSON</p>
    <textarea [(ngModel)]="offerSDP" style="width:100%; height:100px;"></textarea>
    <button (click)="connectToLaptop()">Connect to Laptop</button>

    <hr>
    <p>Step 2: Scan NIC / Enter Info</p>
    <input type="file" (change)="onFileSelected($event)" accept="image/*">
    <button (click)="sendNICData()">Send NIC to Laptop</button>
  `
})
export class Mobile {
  offerSDP: string = '';
  pc!: RTCPeerConnection;
  dc!: RTCDataChannel;
  selectedFile!: File;

  connectToLaptop() {
    if (!this.offerSDP) return alert('Paste offer SDP from Laptop');
    this.pc = new RTCPeerConnection();
    this.pc.ondatachannel = (event) => { this.dc = event.channel; console.log('Data channel opened'); };
    this.pc.setRemoteDescription(JSON.parse(this.offerSDP)).then(async () => {
      const answer = await this.pc.createAnswer();
      await this.pc.setLocalDescription(answer);
      alert('Send this Answer SDP back to Laptop:\n\n' + JSON.stringify(answer));
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) this.selectedFile = event.target.files[0];
  }

  async sendNICData() {
    if (!this.dc || this.dc.readyState !== 'open') return alert('Connect first!');
    if (!this.selectedFile) return alert('Select NIC image');
    const result = await Tesseract.recognize(this.selectedFile, 'eng', { logger: m => console.log(m) });
    const text: string = result.data.text;
    const nic = text.match(/\d{5}-\d{7}-\d/)?.[0] ?? '';
    this.dc.send(JSON.stringify({ nic, name: 'Extracted Name', dob: 'Extracted DOB' }));
    alert('NIC data sent to Laptop!');
  }
}
