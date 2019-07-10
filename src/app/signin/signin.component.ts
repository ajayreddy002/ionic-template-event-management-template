import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  isSignIn = true;
  isReg: boolean;

  constructor() { }

  ngOnInit() {}
  showSignInForm = (value: string) => {
      this.isSignIn = true;
      this.isReg = false;
  }
  showRegForm = (value: string) => {
      this.isSignIn = false;
      this.isReg = true;
  }
}
