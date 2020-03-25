import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registered: boolean = false;
  registerUrl = "https://serene-falls-61824.herokuapp.com/user/register";
  loginUrl = "https://serene-falls-61824.herokuapp.com/user/login";
  userData = new FormGroup({
  email: new FormControl( '',[Validators.email]),
  password : new FormControl('',[ Validators.minLength(8)])
})
constructor( private http : HttpClient,private router: Router) { }

ngOnInit() {
}
onSubmit() {
  console.log(this.userData.value );
}
notRegistered(){
  this.registered = !this.registered;
}
registerUser(){
  this.http
  .post<any>(this.registerUrl, this.userData.value )
  .subscribe(result => {
    if(result.accessToken){
      localStorage.setItem("user", JSON.stringify(result));
      this.router.navigate(['task']);
    }

  });
}
loginUser(){
  this.http
  .post<any>(this.loginUrl, this.userData.value )
  .subscribe(result => {
    if(result.accessToken){
      localStorage.setItem("user", JSON.stringify(result));
      this.router.navigate(['task']);
    }
  });
}
}
