import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'accessToken': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient, private router: Router) {}

  addTask(url, task,access,refresh) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accessToken': access,
        'refreshToken': refresh
      })
    };
    this.http.post(url, task,httpOptions).subscribe(response=> console.log(response));
  }
  getTasks(url, userData,access,refresh){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accessToken': access,
        'refreshToken': refresh
      })
    };
   return  this.http.post(url, userData, httpOptions)
  }
  editTask(url:string, id: string, body,access,refresh) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accessToken': access,
        'refreshToken': refresh
      })
    };
    this.http.put(`${url}/${id}`, body, httpOptions).subscribe(response=> console.log(response));
  }

  deleteTask(url:string, id: string, access, refresh) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'accessToken': access,
        'refreshToken': refresh
      })
    };
    this.http.delete(`${url}/${id}`, httpOptions).subscribe(response=> console.log(response));
  }
}
