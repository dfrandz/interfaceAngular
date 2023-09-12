import { Component } from '@angular/core';
import {BehaviorSubject, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(private fb: FormBuilder, private authService:AuthService, private router: Router, private notifierService: NotificationService){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      password: ['', [Validators.required]],
      // Define other form controls and validators
    });
  }


  onSubmit=()=>{
    if(this.loginForm.status){
      this.isLoading.next(true)
      this.authService.login$(this.loginForm.value).pipe().subscribe({
        next:(user)=>{
          // this.log(user)
          this.notifierService.onSucces('Connexion reussi');
          this.isLoading.next(false)
          this.router.navigate(['dashboard'])
        },
        error: (HttpErrorResponse)=>{
          this.notifierService.onError(HttpErrorResponse.error.error);
          // this.handleError(HttpErrorResponse,[])
          this.isLoading.next(false)
        }
      })
    }
  }



  private log =(response: any)=>{
    console.table(response);
    return of(response)
  }

  private handleError =(error: Error, errorValue: any)=>{
    console.table(error);
    return of(errorValue);
  }
}
