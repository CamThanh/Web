import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';

import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { UserService } from '../../../core/data-services/user.service';
import { GenericValidator } from '../../../shared/validators/generic-validator';
import { PasswordValidators } from '../../../shared/validators/password.validator';
import { User } from '../../../core/data-models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  registerForm: FormGroup;
  user: User;

  // Use with the generic validation messages class
  displayMessage: { [key: string]: string } = {};
  private _validationMessages: { [key: string]: { [key: string]: string } };
  private _genericValidator: GenericValidator;

  constructor(public bsModalRef: BsModalRef,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userService: UserService) {
    // init user
    this.user = new User();

    // Define all of the validation messages for the form
    this._validationMessages = {
      username: {
        required: 'Tài khoản không được để trống.'
      },
      email: {
        required: 'Email không được để trống.',
        pattern: 'Email đã nhập không chính xác.'
      },
      password: {
        required: 'Mật khẩu không được để trống.'
      },
      confirmPassword: {
        required: 'Chưa xác nhận lại mật khẩu'
      }
    };

    // Define an instance of the validator for use with this form, 
    // passing in this form's set of validation messages.
    this._genericValidator = new GenericValidator(this._validationMessages);
  }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
      passwordGroup: this._formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidators.match })
    });
  }

  ngAfterViewInit() {
    // Watch for the blur event from any input element on the form.
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.registerForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe(value => {
        this.displayMessage = this._genericValidator.processMessages(this.registerForm);
      });
  }

  register() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user.username = this.registerForm.get('username').value;
      this.user.password = this.registerForm.get('passwordGroup.password').value;
      this.user.userDetail.email = this.registerForm.get('email').value;

      this._userService.createUser(this.user)
        .subscribe(result => {
          console.log("[Response body]: " + result);
          this.onRegisterComplete();
        });
    } else if (!this.registerForm.dirty) {
      this.onRegisterComplete();
    }
  }

  onRegisterComplete() {
    // Reset the form to clear the flags
    this.registerForm.reset();
    this._router.navigate(['/homepage']);
  }
}
