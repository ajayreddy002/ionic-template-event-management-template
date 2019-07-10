import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    parallax: true,
    spaceBetween: 100,
    effect: 'flip',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
    },
    lazy: {
      loadPrevNext: true,
    },
  };
  isWelcome = true;
  constructor() { }

  ngOnInit() { }
  getSlider = () => {
    this.isWelcome = false;
  }
}
