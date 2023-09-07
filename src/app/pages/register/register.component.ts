import { Component,OnInit,Input} from '@angular/core';
import { of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interface/auth/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(private fb: FormBuilder, private authService:AuthService, private router: Router, private notifierService: NotificationService){
    this.myForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      password: ['', [Validators.required]],
      compagnie: ['', [Validators.required]],
      // Define other form controls and validators
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit=()=>{
    console.log("form",this.myForm.value);
    console.log("status",this.myForm.status);
    if(this.myForm.status){
      this.authService.regiser$(this.myForm.value as User).pipe().subscribe({
        next:(response) =>{
          this.log(response)
          this.notifierService.onSucces('Creation de compte reussie');
          this.router.navigate(['login'])
        },
        error:(error)=>{
          this.notifierService.onError(error);
          this.handleError(error,[])
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
