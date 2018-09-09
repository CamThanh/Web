import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/data-services/auth.service';
import { Token } from '../../core/data-models/Token';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  token: Token;

  constructor() { }

  ngOnInit() {
    
  }

}
