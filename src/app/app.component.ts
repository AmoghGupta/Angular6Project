import { Component } from '@angular/core';

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
    
  }
  changeNumber(){
    // simple example of change detection strategy in angular
    this.numberTest = 3;
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }


}
