import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import { Observable } from '../../node_modules/rxjs/Observable';
import { Injectable } from '../../node_modules/@angular/core';
import { AuthService } from 'app/auth.service';

@Injectable()
export class AuthGuard{

    constructor(private authService: AuthService, private router: Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean
    {
        return this.authService.isAuthenticated().then(
             (authenticated: boolean)=>{
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/']);
                }
             }
         )
    }
}