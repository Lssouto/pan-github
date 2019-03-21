import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private isUserAuthenticate: boolean;

  constructor() {
    this.isUserAuthenticate = false;
  }

  public githubAuthenticate(): Observable<boolean> {
    this.isUserAuthenticate = true;
    return of(true);
  }

  public logoff(): Observable<boolean> {
    this.isUserAuthenticate = false;
    return of(true);
  }

  public isUserLoggedIn(): boolean {
    return this.isUserAuthenticate;
  }

}
