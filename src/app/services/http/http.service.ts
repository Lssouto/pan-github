import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticateService } from '../authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private timeoutTime: number = 30 * 1000; // 30s
  constructor(private http: HttpClient) { }

  public get(url: string, acessToken: string): Subject<any> {
    // Subject to easy control the response
    const httpResponse = new Subject();

    const timeout = setTimeout(() => {
      httpResponse.error({message: 'Não foi possível conectar. Por favor verifique sua conexão'})
    }, this.timeoutTime);

    this.http.get(url, { headers: this.getHeaders(acessToken) })
        .pipe(
          catchError((error) => {
            httpResponse.error(error);
            clearTimeout(timeout);
            return of(null);
          })
        )
        .subscribe((response: Response) => {
          clearTimeout(timeout);
          httpResponse.next(response);
        });

    return httpResponse;
  }

  public post(url: string, body: any, acessToken: string): Subject<any> {
    // Subject to easy control the response
    const httpResponse = new Subject();

    const timeout = setTimeout(() => {
      httpResponse.error({message: 'Não foi possível conectar. Por favor verifique sua conexão'})
    }, this.timeoutTime);

    this.http.post(url, body, { headers: this.getHeaders(acessToken)})
        .pipe(
          catchError((error) => {
            httpResponse.error(error);
            clearTimeout(timeout);
            return of(null);
          })
        )
        .subscribe((response: Response) => {
          clearTimeout(timeout);
          httpResponse.next(response);
        });

    return httpResponse;
  }

  private getHeaders(acessToken): HttpHeaders {

    return (acessToken)
      ? new HttpHeaders({
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `token ${acessToken}`
      })
      : new HttpHeaders({
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });

  }
}
