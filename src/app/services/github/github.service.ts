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

  public getRepoInformation(): Observable<RepoInfoModel> {
    return this.httpService.get()
      .pipe(
        map((response) => {
          return new RepoInfoModel(response);
        }),
        catchError((error) => {
          return of(error);
        })
      );
  }
}
