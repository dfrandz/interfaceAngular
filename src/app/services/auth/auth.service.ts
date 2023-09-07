import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, throwError,catchError } from 'rxjs';
import { AuthResponse } from 'src/app/interface/auth/auth-response';
import { User } from 'src/app/interface/auth/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: Observable<User|null>
  public isLoggedIn$ = new BehaviorSubject<boolean>(false)
  userSubject!: BehaviorSubject<User|null>
  

  constructor(private http:HttpClient) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user=this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login$ = (user:User) => <Observable<AuthResponse>>this.http.post<AuthResponse>(`${environment.apiBaseUrl}/auth/login`, user).pipe(
    tap(user =>{
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(user['token']));
        this.userSubject.next(user.user);
        this.isLoggedIn$.next(true)
    }),
    catchError(this.handleError)
  )

  regiser$ = (user:User) =><Observable<AuthResponse>>this.http.post<AuthResponse>(`${environment.apiBaseUrl}/auth/register`, user).pipe()



  private handleError(error:HttpErrorResponse):Observable<never>{
    console.log(error);
    return throwError(() => `An error occurred - Error code: ${error.status}`);
  }
}

const httpOptions = {
  headers: new HttpHeaders({'withCredentials':'true'})
};