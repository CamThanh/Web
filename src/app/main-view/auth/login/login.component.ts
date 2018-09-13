import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';

import { Router } from '@angular/router';

import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AuthService } from '../../../core/data-services/auth.service';
import { GenericValidator } from '../../../shared/validators/generic-validator';

import { AuthService as SocialAuthService, FacebookLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  loginForm: FormGroup;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private _validationMessages: { [key: string]: { [key: string]: string } };
  private _genericValidator: GenericValidator;

  constructor(public bsModalRef: BsModalRef,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _socialAuthService: SocialAuthService) {

    // Define all of the validation messages for the form
    this._validationMessages = {
      username: {
        required: 'Tài khoản không được để trống.'
      },
      password: {
        required: 'Mật khẩu không được để trống.'
      }
    };

    // Define an instance of the validator for use with this form, 
    // passing in this form's set of validation messages.
    this._genericValidator = new GenericValidator(this._validationMessages);
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    // Watch for the blur event from any input element on the form.
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.loginForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe(value => {
        this.displayMessage = this._genericValidator.processMessages(this.loginForm);
      });
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      let inputted_username = this.loginForm.get('username').value;
      let inputted_password = this.loginForm.get('password').value;

      this._authService.login(inputted_username, inputted_password)
        .subscribe(result => {
          console.log("Returned Token: " + result);
          this.onLoginComplete();
        });
    } else if (!this.loginForm.dirty) {
      this.onLoginComplete();
    }
  }

  socialLogIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this._socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", JSON.stringify(userData));
        this._authService.loginState.emit(true);
        this._router.navigate(['/homepage']);
        this.bsModalRef.hide();
      }
    );
  }

  onLoginComplete() {
    // Reset the form to clear the flags
    this.loginForm.reset();
    this._router.navigate(['/homepage']);
  }
}
