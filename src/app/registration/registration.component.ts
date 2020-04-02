import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registered: boolean = false;
  userData = new FormGroup({
  email: new FormControl( '',[Validators.email]),
  password : new FormControl('',[ Validators.minLength(8)])
})
constructor( private auth: AuthService, private router: Router) { }

ngOnInit() {
  if(JSON.parse(localStorage.getItem('user'))){
    this.router.navigate(['task']);
  }
}
onSubmit() {
  console.log(this.userData.value );
}
notRegistered(){
  this.registered = !this.registered;
}
registerUser(){
this.auth.registerUser(this.userData.value)
}
loginUser(){
 this.auth.loginUser(this.userData.value)
}
}
