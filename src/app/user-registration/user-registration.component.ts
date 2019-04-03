import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  Register(){
    this.router.navigate(['/login']);
  }
}
