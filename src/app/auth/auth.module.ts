import { NgModule } from "../../../node_modules/@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent 
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    providers:[]
  })
export class AuthModule { }