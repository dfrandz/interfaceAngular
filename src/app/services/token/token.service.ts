import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  saveToken(token:string): void{
    localStorage.setItem('access_token', token);
  }

  isLogged():boolean{
    return !! localStorage.getItem("access_token");
  }

  clearToken():void{
    localStorage.removeItem('access_token')
    localStorage.removeItem("user");
    this.router.navigate(['login'])
  }
  clearTokenExpired():void{
    localStorage.removeItem('access_token')
    localStorage.removeItem("user");
    Swal.fire('Good Bye',`opps Veillez vous reconnectez`,'error')
    this.router.navigate(['login'])
  }
   
  getToken(): string|null{
    return localStorage.getItem('access_token')
  }
}
