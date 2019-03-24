import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { RepoInfoModel } from 'src/app/model/repo-info.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  private reposInformationArray: RepoInfoModel[];
  private activeListClassStyle: string;
  private orderParams: string;

  constructor(private githubService: GithubService) {
    this.reposInformationArray = [];
    this.activeListClassStyle = '__card';
    this.orderParams = 'name';
  }

  ngOnInit() {
    // this.githubService.getRepoInformation()
    //     .subscribe( (informationArray: RepoInfoModel[]) => {
    //       console.log(JSON.stringify(informationArray))
    //       this.reposInformationArray = informationArray;
    //     });
    this.getMockedValue()
        .subscribe( (informationArray: RepoInfoModel[]) => {
          console.log(JSON.stringify(informationArray))
          this.reposInformationArray = informationArray;
        });
  }

  private getMockedValue(): Observable<RepoInfoModel[]> {
    const mockedValue = [{"name":"angular-cart","stargazers_count":0,"forks_count":0},{"name":"back_test","stargazers_count":0,"forks_count":0},{"name":"eotica-masonry-test","stargazers_count":1,"forks_count":0},{"name":"front-dev","stargazers_count":1,"forks_count":0},{"name":"jsp-eng-3","stargazers_count":0,"forks_count":0},{"name":"kbr-desafios","stargazers_count":0,"forks_count":0},{"name":"lssouto.github.io","stargazers_count":0,"forks_count":0},{"name":"mean","stargazers_count":0,"forks_count":0},{"name":"op-website-hugo","stargazers_count":0,"forks_count":0},{"name":"pan-github","stargazers_count":0,"forks_count":0},{"name":"react-api-connect","stargazers_count":0,"forks_count":0},{"name":"teste-front","stargazers_count":0,"forks_count":0},{"name":"the-foca","stargazers_count":0,"forks_count":0},{"name":"VanillaSPA-Example","stargazers_count":0,"forks_count":0},{"name":"vue-painel","stargazers_count":0,"forks_count":0},{"name":"vue-treinamento","stargazers_count":0,"forks_count":0},{"name":"web_test","stargazers_count":0,"forks_count":0},{"name":"yesod","stargazers_count":0,"forks_count":0}];
    return of(mockedValue.map( mv => {
      return new RepoInfoModel(mv);
    }));
  }

  private filterOptionsHandler(val) {
    this.activeListClassStyle = val.classStyle;
    this.orderParams = val.order;
  }
}
