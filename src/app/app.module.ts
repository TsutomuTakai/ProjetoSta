import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainModule } from '@app/modules/main/main.module';
import { LoginModule } from '@app/modules/login/login.module';

@NgModule({

  imports: [
    AppRoutingModule,
    BrowserModule,
    MainModule,
    LoginModule

  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
