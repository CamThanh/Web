import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';
import { AuthComponent } from '../../../main-view/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private _modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalRegisterComponent() {
    const initialState = {
      isLogin: false,
      isRegister: true,
    };
    this.bsModalRef = this._modalService.show(AuthComponent, { initialState, class: "modal-lg" });
  }

  openModalLoginComponent() {
    const initialState = {
      isLogin: true,
      isRegister: false,
    };
    this.bsModalRef = this._modalService.show(AuthComponent, { initialState, class: "modal-lg" });
  }
}
