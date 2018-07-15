import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthFireBaseService } from '../auth-firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isError = false;
  errorMessage = '';

  constructor(private authService:AuthFireBaseService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    this.authService.signInUser(form.value.email, form.value.password);
    this.authService.errorSigningIn.subscribe(
      value => {
        this.isError = true;
        this.errorMessage = value.message;
      }
    );
  }

}
