import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListClientComponent } from './pages/list-client/list-client.component';

import { DataTablesModule } from 'angular-datatables';
import { AddComponent } from './pages/admin/add/add.component';
import { ListComponent } from './pages/admin/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ListClientComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
