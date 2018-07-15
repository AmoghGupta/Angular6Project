import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthFireBaseService } from './auth/auth-firebase.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthGuard{
    isSignedSuccessfully:boolean = false;
    // isSignedIn = new EventEmitter<boolean>();
    isSignedIn = new Subject<boolean>();
    constructor(private authService: AuthService, private router: Router, private firebaseLogin:AuthFireBaseService){

    }
    
    // canActivate(route: ActivatedRouteSnapshot, 
    //     state: RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean
    // {
    //     return this.authService.isAuthenticated().then(
    //          (authenticated: boolean)=>{
    //             if(authenticated){
    //                 return true;
    //             }else{
    //                 this.router.navigate(['/signin']);
    //             }
    //          }
    //      )
    // }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean
    {
         if(this.firebaseLogin.isAuthenticated()){
            return true;
         }else{
            this.router.navigate(['/signin']);
         }
    }

    // similar to canActivate we have canDeactivate guard, the purpose which is to 
    // make sure that user cannot leave a route/page or navigate to some other page
    // without confirmation


}