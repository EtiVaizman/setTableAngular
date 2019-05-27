import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { HttpClientModule } from '@angular/common/http';
import { NewServiceService } from './SHerd/new-service.service';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    LoginComponent,
    LogoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
