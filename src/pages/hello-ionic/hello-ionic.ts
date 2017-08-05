import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {


  SERVER: String = "https://youtube.a2ron.com";
//  SERVER: String = "http://localhost:3000";
  speed: number = 100;
  url: String = 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ';

  @ViewChild("audio") el: ElementRef;

  constructor() {

  }

  ngOnInit() {

  }

  speedChanged() {
    this.el.nativeElement.querySelector('audio').playbackRate = (this.speed) / 100
  }
}
