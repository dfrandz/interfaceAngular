import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//module material

import {MatDialogModule} from '@angular/material/dialog';
import {NotificationModule} from './notification.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListClientComponent } from './pages/list-client/list-client.component';

import { DataTablesModule } from 'angular-datatables';
import { AddComponent } from './pages/admin/add/add.component';
import { ListComponent } from './pages/admin/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ListClientComponent,
    AddComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NotificationModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
