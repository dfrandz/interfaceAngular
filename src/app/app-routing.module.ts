import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { AddComponent } from './pages/admin/add/add.component';
import { ListComponent } from './pages/admin/list/list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', component:NavbarComponent,
  children:[{
    component:DashboardComponent, path:'dashboard',
  },
  {component:ListClientComponent, path:'client-list'},
  //admin
  {component:ListComponent, path:'admin-list'},
  ],
  },
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
