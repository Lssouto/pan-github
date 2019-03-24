import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { RepoInfoModel } from 'src/app/model/repo-info.model';
import { map, catchError } from 'rxjs/operators';
import { AuthenticateService } from '../authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private httpService: HttpService, private authService: AuthenticateService ) { }

  public getRepoInformation(): Observable<RepoInfoModel[]> {
    return this.httpService.get('https://api.github.com/user/repos', this.authService.getAccesToken())
      .pipe(
        map((response) => {
          return response.map( (res) => {
            return new RepoInfoModel(res);
          });
        }),
        catchError((error) => {
          return of(error);
        })
      );
  }
}
