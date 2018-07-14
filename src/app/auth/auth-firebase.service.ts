import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import * as firebase from 'firebase'
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class AuthFireBaseService{
    errorSigningUp = new EventEmitter<{code:string,message:string}>();
    errorSigningIn = new EventEmitter<{code:string,message:string}>();
    isTokenPresentInLocalStorage = false;
    token: string;
    localToken: string = null;
    signedInSuccessfully= new EventEmitter<Object>();

    constructor(private router: Router){
        if(localStorage.getItem('token')){
            this.isTokenPresentInLocalStorage = true;
        }
    }
    
    signUpUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => {
                this.errorSigningUp.emit(error);
                console.log(error);
            }
        )
    }

    signInUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser.getIdToken().then(
                    (token: string)=>{
                        this.token = token
                    }
                );
                this.signedInSuccessfully.emit(response);
                localStorage.setItem('token', JSON.stringify(this.token));
                console.log(response);
                this.router.navigate(['/recipes']);
            }
        ).catch(
        error=>{
            this.errorSigningIn.emit(error);
            console.log(error);
        })
    }


    getToken(){
         firebase.auth().currentUser.getIdToken().then(
            (token: string)=>{
                this.token = token
            }
        );

        return this.token;
    }

    isAuthenticated(){
        if(this.token != null || this.isTokenPresentInLocalStorage){
            return true;
        }
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null;
    }
}