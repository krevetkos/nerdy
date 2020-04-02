import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = "https://still-wave-51114.herokuapp.com/"

  constructor(private http: HttpClient, private router: Router) {}
  creatHttpOptions(){
    let httpOptions
    return httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accessToken': JSON.parse(localStorage.getItem('user')).accessToken,
        'refreshToken': JSON.parse(localStorage.getItem('user')).refreshToken,
      })
    };
  }
  addTask(task) {
    this.http.post(`${this.BASE_URL}task/create`, task,this.creatHttpOptions()).subscribe(response=> console.log(response));
  }
  getTasks( userData){
   return  this.http.post(`${this.BASE_URL}task/`, userData, this.creatHttpOptions())
  }
  editTask( id: string, body) {
    this.http.put(`${this.BASE_URL}task/${id}`, body, this.creatHttpOptions()).subscribe(response=> console.log(response));
  }

  deleteTask( id: string) {
    this.http.delete(`${this.BASE_URL}task/${id}`, this.creatHttpOptions()).subscribe(response=> console.log(response));
  }
  getToken(){
    return JSON.parse(localStorage.getItem('user')).accessToken
  }
  loggedIn(){
    return !!JSON.parse(localStorage.getItem('user'))
  }
}
