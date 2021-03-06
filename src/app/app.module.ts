import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeServices } from './recipes/recipe.services';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthFireBaseService } from './auth/auth-firebase.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, FormsModule, HttpModule, 
    SharedModule,ShoppingListModule, AuthModule
  ],
  providers: [
    ShoppingListService, RecipeServices, 
    DataStorageService, AuthGuard, AuthService, AuthFireBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
