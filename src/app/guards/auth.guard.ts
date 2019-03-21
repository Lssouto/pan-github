import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate/authenticate.service';

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
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/']);
    }
    return this.authService.isUserLoggedIn();
  }
}
