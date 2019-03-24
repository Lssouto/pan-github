import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private isUserAuthenticate: boolean;
  private acessToken: string;
  constructor(private httpService: HttpService) {
    this.isUserAuthenticate = false;
    this.acessToken = '';
  }

  public githubAuthenticate(code: string): Observable<boolean> {
    // RAW EXAMPLE {"access_token":"8d1153577dbdd38b4e487aa80ff6a024bac5dd24","token_type":"bearer","scope":"user:email"}
    return this.httpService.post('/login', {
      client_id: 'c63b5ef5b81e7610914a',
      client_secret: '32f6b8910137569d316eae627e3947b1aa37d77b',
      code,
    }, '')
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
          return of(error);
        })
      );
  }

  private commitAuthState(acessToken: string) {
    if (!!acessToken) {
      this.acessToken = acessToken;
      this.isUserAuthenticate = true;
    } else {
      this.acessToken = '';
      this.isUserAuthenticate = false;
    }
  }

  public logoff(): Observable<boolean> {
    this.isUserAuthenticate = false;
    return of(true);
  }

  public isUserLoggedIn(): boolean {
    return this.isUserAuthenticate;
  }

  public getAccesToken(): string {
    return this.acessToken;
  }

}
