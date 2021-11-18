import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LateralComponent } from './lateral/lateral.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [				
    AppComponent,
      HeaderComponent,
      NavbarComponent,
      LateralComponent,
      MainComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
