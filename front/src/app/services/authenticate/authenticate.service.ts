import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';
import { map, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { SuccessAuth, FailureAuth, LogoutAuth } from 'src/app/store/actions/auth.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  // Export user state
  private isUserAuthenticate: Observable<string>;

  constructor(private httpService: HttpService, private store: Store<{ acessTkn: string }>) {
    this.isUserAuthenticate = this.store.pipe(select('acessTkn'));
  }
  // Authenthicate on github API and update the app state
  public githubAuthenticate(code: string): Observable<boolean> {

    return this.httpService.post('/login', {
      client_id: environment.client_id,
      client_secret: environment.client_secret,
      code,
    })
      .pipe(
        map((response) => {
          console.log(response);
          if (response.error) {
            this.commitAuthState('');
          } else {
            this.commitAuthState(response.access_token);
          }

          return of(this.isUserLoggedIn);
        }),
        catchError( (error) => {
          this.commitAuthState('');
          return of(error);
        })
      );
  }
  // Control the success or failure to update the store
  private commitAuthState(acessToken: string): void {
    if (!!acessToken) {
      this.store.dispatch(new SuccessAuth(acessToken));
    } else {
      this.store.dispatch(new FailureAuth());
    }
  }
  // Logout service from the app
  public logoff(): Observable<string> {
    this.store.dispatch(new LogoutAuth());
    return this.isUserAuthenticate;
  }
  // Return the the user from the state
  public isUserLoggedIn(): Observable<string> {
    return this.isUserAuthenticate;
  }

}
