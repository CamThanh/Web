import { Component } from '@angular/core';
import { AuthService } from './core/data-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _authService: AuthService) {
    // not yet log-in
    this._authService.loginState.emit(false);
  }
}
