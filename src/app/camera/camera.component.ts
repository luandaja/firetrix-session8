import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @ViewChild('video') videoElement;
  @ViewChild('canvas') canvas: ElementRef;
  video: HTMLVideoElement;
  captures: Array<any>;
  uploadProgress: Number;
  constructor() {
    this.captures = [];
  }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: 'user' }
      })
      .then(stream => {
        this.video.srcObject = stream;
      });
  }

  captureMoment() {
    this.video.pause();
    this.canvas.nativeElement
      .getContext('2d')
      .drawImage(this.video, 0, 0, 640, 480);

    this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
    this.canvas.nativeElement.toBlob(blob => {});
  }
  uploadFile(file) {}
}
