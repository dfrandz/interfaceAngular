import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName:string=''
  userEmail:string=''
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.getUser()
  }

  getUser=()=>{
    this.authService.getProfil$.subscribe(
      (res) => {
        this.userName =res['nom']
        this.userEmail =res['email']
      }
    )
  }

}
