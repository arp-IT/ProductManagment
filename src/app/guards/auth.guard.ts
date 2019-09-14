import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  flag: boolean = false;
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(localStorage.getItem('isuserLoggedIn') == "Y")
      {
        this.flag = true;
      }
      else
      {
        this.router.navigate(['/Login']);
      }
      
    
    return this.flag;
  } 
}
