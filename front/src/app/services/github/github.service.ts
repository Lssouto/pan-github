import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { RepoInfoModel } from 'src/app/model/repo-info.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private httpService: HttpService ) { }
  // Retrieve logged user repository information
  public getRepoInformation(): Observable<RepoInfoModel[]> {
    return this.httpService.get('/user/repos')
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
