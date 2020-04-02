import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ApiService } from './shared/api.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {
  constructor(private api:ApiService, private router: Router){}
  canActivate():boolean {
    if(this.api.loggedIn()){
      return true
    }else {
      this.router.navigate(['/'])
      return false
    }
  }
}
