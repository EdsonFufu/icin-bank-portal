import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";


const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:8081/api/auth/signin';

  constructor(private http: HttpClient,  private router: Router){}

  login(username: string, password: string){
    // console.log('In AuthService -  login');
    return this.http.post<any>(this.baseUrl, {username: username, password:password}, {headers})
      .pipe(catchError(this.handleError),
        map(userData => {
          console.log(userData);
          localStorage.setItem("username", username);
          localStorage.setItem("account", userData.account.accountNumber);
          let tokenStr = "Bearer " + userData.jwt;
          console.log("Token---  " + tokenStr);
          localStorage.setItem("token", tokenStr);
          localStorage.setItem("roles", JSON.stringify(userData.roles));
          return userData;
        })
      );
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean{
    return sessionStorage.getItem('username') !== null;
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }
}
