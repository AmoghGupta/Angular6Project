import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";


const authRoutes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    }
]


@NgModule({
    // we will use forchild, forroot is called only in root module 
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule{

}