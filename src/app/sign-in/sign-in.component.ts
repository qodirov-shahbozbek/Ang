import { Component, OnInit } from '@angular/core';
import { SignInServiceService } from '../services/signInService/sign-in-service.service';
import { Router } from '@angular/router';
import { SignIn } from './sign-in';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any = {};
  token!: any;

  constructor(private signInService: SignInServiceService, private router: Router){
  }
  ngOnInit(){
    
  }
  signInModel: SignIn = new SignIn();

  signIn(){
     this.signInModel.username = this.model.username;
     this.signInModel.password = this.model.password;
      this.signInService.getClaims(this.signInModel).subscribe({
        next:(res: any) => {
          this.token = res;
        if(this.token){
            this.router.navigate(["/home/"])
        }
        else{
          alert("Invalid username or password")
        }
      }
    })
  }
  res(res: any) {
    throw new Error('Method not implemented.');
  }
 }
