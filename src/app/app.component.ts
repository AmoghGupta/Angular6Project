import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature  = 'recipe';
  numberTest = 2;

  ngOnInit() {
    // setting up firebase initialization
    firebase.initializeApp({
      apiKey: "AIzaSyCtruP0F2xM1-nSe0yNTqEowQ7kV8Pd4rs",
      authDomain: "ng-recipe-book-88d38.firebaseapp.com"
    });
  }
  changeNumber(){
    // simple example of change detection strategy in angular
    this.numberTest = 3;
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }


}
