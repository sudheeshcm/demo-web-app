import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdInputModule,
  MdProgressBarModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]),
    NoopAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdProgressBarModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProgressBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
