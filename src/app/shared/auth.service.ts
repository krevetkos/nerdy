import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = "http://localhost:8080/"

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(userData){
    this.http
    .post<any>(`${this.BASE_URL}user/register`, userData )
    .subscribe(result => {
      if(result.accessToken){
        localStorage.setItem("user", JSON.stringify(result));
        this.router.navigate(['task']);
      }
    });
  }
  loginUser(userData){
    this.http
    .post<any>(`${this.BASE_URL}user/login`, userData )
    .subscribe(result => {
      if(result.accessToken){
        localStorage.setItem("user", JSON.stringify(result));
        this.router.navigate(['task']);
      }
    });
  }

}
