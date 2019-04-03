import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  UserName:string="";
  Password:string="";
  constructor(private router:Router,public alertController:AlertController) { }

  ngOnInit() {}
  onLogin(){
    if(this.UserName==this.Password){
      this.router.navigate(['/list-of-movies']);
    }
    else{
      this.presentAlert();
    }
  }
  Register(){
    this.router.navigate(['/user-registration']);
  }
  forgetpassword(){
    this.router.navigate(['/forget-password']);
  }
   async presentAlert(){
     const alert=await this.alertController.create({
       header:'Alert',
       message:"email/password is not correct",
       buttons:['OK']
     });
     await alert.present();
   }
}
