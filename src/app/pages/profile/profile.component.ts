import { Component, OnInit } from '@angular/core';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { AuthResponse } from 'src/app/interface/auth/auth-response';
import { User } from 'src/app/interface/auth/user';
import { UserState } from 'src/app/interface/auth/user-state';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:AuthResponse
  userName:string=''
  userEmail:string=''
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.getUser()
  }

  getUser=()=>{
    this.authService.getProfil$.subscribe(
      (res) => {
        this.currentUser = res
        this.userName =res['nom']
        this.userEmail =res['email']
      }
    )
  }

}
