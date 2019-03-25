import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';
import { map, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { SuccessAuth, FailureAuth, LogoutAuth } from 'src/app/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private isUserAuthenticate: Observable<string>;

  constructor(private httpService: HttpService, private store: Store<{ acessTkn: string }>) {
    this.isUserAuthenticate = this.store.pipe(select('acessTkn'));
  }

  public githubAuthenticate(code: string): Observable<boolean> {

    return this.httpService.post('/login', {
      client_id: 'c63b5ef5b81e7610914a',
      client_secret: '32f6b8910137569d316eae627e3947b1aa37d77b',
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

  private commitAuthState(acessToken: string) {
    if (!!acessToken) {
      this.store.dispatch(new SuccessAuth(acessToken));
    } else {
      this.store.dispatch(new FailureAuth());
    }
  }

  public logoff(): Observable<string> {
    this.store.dispatch(new LogoutAuth());
    return this.isUserAuthenticate;
  }

  public isUserLoggedIn(): Observable<string> {
    return this.isUserAuthenticate;
  }

}
