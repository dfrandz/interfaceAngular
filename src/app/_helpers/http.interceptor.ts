import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../services/token/token.service';
import { error } from 'jquery';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req)

    const token =this.tokenService.getToken()
    if(token !=null){
      let clone = req.clone({
        headers : req.headers.set('Authorization',`Bearer ${token}`)
      })
      // console.log(clone)
      return next.handle(clone).pipe(
        catchError(error =>{
          console.log(error)
          if(error.status ===401){
            this.tokenService.clearTokenExpired()
          }
          return throwError('sesseion Expired')
        })
      )

    }
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];