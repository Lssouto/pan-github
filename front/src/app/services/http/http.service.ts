import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subject, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private timeoutTime: number = 30 * 1000; // 30s
  private locationUrl: string;
  private acessToken: Observable<string>;
  constructor(private http: HttpClient, private store: Store<{ acessTkn: string }>) {
    this.locationUrl = `http://${window.location.hostname}${(environment.port) ? ':8080' : ''}/api`;
    this.acessToken = this.store.pipe(select('acessTkn'));
  }

  public get(url: string): Subject<any> {
    // Subject to easy control the response
    const httpResponse = new Subject();
    // Timeout in case of not connected
    const timeout = setTimeout(() => {
      httpResponse.error({message: 'Não foi possível conectar. Por favor verifique sua conexão'});
    }, this.timeoutTime);

    this.http.get(`${this.locationUrl}${url}`, { headers: this.getHeaders() })
      .pipe(
        catchError((error) => {
          httpResponse.error(error);
          httpResponse.complete();
          clearTimeout(timeout);
          return of(null);
        })
      )
      .subscribe((response: Response) => {
        clearTimeout(timeout);
        httpResponse.next(response);
        httpResponse.complete();
      });

    return httpResponse;
  }

  public post(url: string, body: any): Subject<any> {
    // Subject to easy control the response
    const httpResponse = new Subject();
    // Timeout in case of not connected
    const timeout = setTimeout(() => {
      httpResponse.error({message: 'Não foi possível conectar. Por favor verifique sua conexão'});
    }, this.timeoutTime);

    this.http.post(`${this.locationUrl}${url}`, body, { headers: this.getHeaders() })
      .pipe(
        catchError((error) => {
          httpResponse.error(error);
          httpResponse.complete();
          clearTimeout(timeout);
          return of(null);
        })
      )
      .subscribe((response: Response) => {
        clearTimeout(timeout);
        httpResponse.next(response);
        httpResponse.complete();
      });

    return httpResponse;
  }
  // Check the acess token and return headers based on value
  private getHeaders(): HttpHeaders {
    let headers: HttpHeaders;
    this.acessToken
        .subscribe( (acessTokenValue: string) => {
          if (acessTokenValue) {
            headers = new HttpHeaders({
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': `token ${acessTokenValue}`
            });
          } else {
            headers = new HttpHeaders({
              'Accept': 'application/json',
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            });
          }
        });
    return headers;

  }
}
