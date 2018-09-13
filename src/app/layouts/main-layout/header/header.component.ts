import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';
import { AuthComponent } from '../../../main-view/auth/auth.component';
import { AuthService } from '../../../core/data-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  isLoggedIn: boolean;
  loggedInUser: any;

  constructor(private _modalService: BsModalService,
    private _authService: AuthService) {

    this._authService.loginState.subscribe(state => {
      this.isLoggedIn = state;
      if (this.isLoggedIn) {
        this.loggedInUser = JSON.parse(sessionStorage.getItem('social_user'));
      }
    });
  }

  ngOnInit() {

  }

  openModalRegisterComponent() {
    const initialState = {
      isLogin: false,
      isRegister: true,
    };
    this.bsModalRef = this._modalService.show(AuthComponent, { initialState, class: "custom-modal" });
  }

  openModalLoginComponent() {
    const initialState = {
      isLogin: true,
      isRegister: false,
    };
    this.bsModalRef = this._modalService.show(AuthComponent, { initialState, class: "custom-modal" });
  }
}
