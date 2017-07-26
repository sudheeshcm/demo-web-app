import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdInputModule,
  MdProgressBarModule,
  MdSelectModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ApplyOnlineComponent } from './home/apply-online/apply-online.component';
import { EditApplicationComponent } from './home/edit-application/edit-application.component';

import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { DropdownBasicComponent } from './shared/dropdown/dropdown.component';
import { CustomizeComponent } from './home/customize/customize.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'apply',
        component: ApplyOnlineComponent
      },
      {
        path: 'customize',
        component: CustomizeComponent
      },
      {
        path: 'edit',
        component: EditApplicationComponent
      }

    ]),
    NoopAnimationsModule,
    AlertModule.forRoot(),
    MdButtonModule,
    MdInputModule,
    MdProgressBarModule,
    MdSelectModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProgressBarComponent,
    ApplyOnlineComponent,
    DropdownBasicComponent,
    CustomizeComponent,
    EditApplicationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
