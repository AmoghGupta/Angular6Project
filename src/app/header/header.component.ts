import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';
import { AuthFireBaseService } from '../auth/auth-firebase.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();

   // simple example of change detection strategy in angular 
   // whenever the data input changes component is reloaded
  // @Input() data: number;
  constructor(private dataStorageService:DataStorageService, private authService: AuthService, 
    private authGuardService: AuthGuard,  private authFirebase: AuthFireBaseService,
    private router: Router) { 
    }

  ngOnInit() {
    
  }


  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response)=>{
        console.log(response);
      }
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }
  onLogIn(){
    this.authService.logIn();
  }

  onLogOut(){
    this.authService.logOut();
  }
  
  logOut(){
    this.authFirebase.logOut();
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
