import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogin: boolean;
  isRegister: boolean;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  loginForm() {
    if (this.isLogin === false) {
      this.isLogin = true;
    }
    this.isRegister = false;
  }

  registerForm() {
    if (this.isRegister === false) {
      this.isRegister = true;
    }
    this.isLogin = false;
  }
}
