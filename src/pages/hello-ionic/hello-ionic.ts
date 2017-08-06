import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {


  SERVER: String = "https://youtube.a2ron.com";
//  SERVER: String = "http://localhost:3000";
  url: String = 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ';
  ready: Boolean = false;
  audio: any;
  speed: number = 100;


  @ViewChild("audio") el: ElementRef;

  constructor() {

  }

  ngOnInit() {
    this._checkAudioReadyState();

  }

  speedChanged(speed) {
    if (this.audio)
      this.audio.playbackRate = (speed) / 100;
  }

  private _checkAudioReadyState() {
    if (!this.audio)
      this.audio = this.el.nativeElement ? this.el.nativeElement.querySelector('audio') : null;
    this.ready = this.audio && this.audio.readyState === 4;
    setTimeout(function () {
      this._checkAudioReadyState();
    }.bind(this), 100);
  }
}
