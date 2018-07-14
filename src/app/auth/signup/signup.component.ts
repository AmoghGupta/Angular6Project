import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthFireBaseService } from '../auth-firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isError = false;
  errorMessage = '';
  constructor(private signUpService: AuthFireBaseService) { }

  ngOnInit() {
  }

  onSignup(ngForm : NgForm){
    const email = ngForm.value.email;
    const password = ngForm.value.password;
    this.signUpService.signUpUser(email, password);
    // this.isError = this.signUpService.isErrorCreatingUser();
    // if(this.isError){
    //   this.errorMessage = this.signUpService.getErrorMessage();
    // }

    this.signUpService.errorSigningUp.subscribe(
      value => {
        this.isError = true;
        this.errorMessage = value.message;
      }
    );
  }

}
