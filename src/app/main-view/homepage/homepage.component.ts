import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/data-services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.login("admin", "admin1234").subscribe(result => console.log(result));
  }

}
