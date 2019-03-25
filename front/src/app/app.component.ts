import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github/github.service';
import { RepoInfoModel } from './model/repo-info.model';
import { SuccessAuth, FailureAuth } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pan-github';

  constructor(private githubService: GithubService, private store: Store<{}>, private router: Router) {}

  public ngOnInit(): void {
    if (performance.navigation.type !== 1) {
      this.clearStorage();
    } else {
      this.validateToken();
    }
  }

  private clearStorage(): void {
    window.sessionStorage.removeItem('pgAcessToken');
  }

  private validateToken(): void {
    const savedToken = window.sessionStorage.getItem('pgAcessToken');
    if (savedToken !== 'null') {
      this.store.dispatch(new SuccessAuth(savedToken));
      this.githubService.getRepoInformation()
          .subscribe( (repos: RepoInfoModel[]) => {
            if (repos.length) {
              console.log('Ok Token');
            } else {
              console.log('Expired Token');
              this.store.dispatch(new FailureAuth());
              this.router.navigate(['/']);
            }
          });
    }
  }
}
