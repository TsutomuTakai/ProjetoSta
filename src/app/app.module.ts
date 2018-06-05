import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Modules
import { MainModule } from '@app/modules/main/main.module';
import { LoginModule } from '@app/modules/login/login.module';

//Components
import { AppComponent } from './app.component';
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
