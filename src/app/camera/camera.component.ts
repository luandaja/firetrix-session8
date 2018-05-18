import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';

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
  constructor(
    private auth: AngularFireAuth,
    private storage: AngularFireStorage
  ) {
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
    this.canvas.nativeElement.toBlob(blob => {
      this.uploadFile(blob)
        .percentageChanges()
        .subscribe(p => (this.uploadProgress = p));
    });
  }
  uploadFile(file) {
    const filePath = `session8/${Date.now()}.png`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    return task;
  }
  resetCamera() {
    this.video.play();
  }
  loginWithGoogle() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
