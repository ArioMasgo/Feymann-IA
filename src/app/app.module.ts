import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import HomeComponent from './pages/home/home.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    CommonModule // Importando el CommonModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
