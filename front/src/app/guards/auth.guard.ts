import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate/authenticate.service';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticateService,
    private router: Router,
  ) {
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let isUserLoggedIn = false;
    this.authService.isUserLoggedIn()
        .subscribe( (acessTknValue: string) => {
          isUserLoggedIn = !!acessTknValue;
        });
    if (!isUserLoggedIn) {
      this.router.navigate(['/']);
    }
    return isUserLoggedIn;
  }
}
