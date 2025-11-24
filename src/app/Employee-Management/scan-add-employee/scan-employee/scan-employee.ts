import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/theme/ng-zorro-imports';
import { ReactiveFormsModule } from '@angular/forms';
import QRCode from 'qrcode';
@Component({
  selector: 'app-scan-employee',
  imports: [SHARED_IMPORTS,ReactiveFormsModule],
  templateUrl: './scan-employee.html',
  styleUrl: './scan-employee.css',
})
export class ScanEmployee implements  AfterViewInit {

 @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;

  peerConnection!: RTCPeerConnection;

  async ngAfterViewInit() {
    // 1️⃣ Create peer connection
    this.peerConnection = new RTCPeerConnection();

    // 2️⃣ Handle incoming track from mobile
    this.peerConnection.ontrack = (event) => {
      this.video.nativeElement.srcObject = event.streams[0];
    };

    // 3️⃣ Create Offer
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);

    // 4️⃣ Generate QR code with offer (JSON string)
    const canvas = this.qrCanvas.nativeElement;
    await QRCode.toCanvas(canvas, JSON.stringify(offer));

    console.log("Laptop Offer:", offer);
  }

}
