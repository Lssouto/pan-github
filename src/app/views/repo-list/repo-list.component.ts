import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { RepoInfoModel } from 'src/app/model/repo-info.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  private reposInformationArray: RepoInfoModel[];

  constructor(private githubService: GithubService) {
    this.reposInformationArray = [];
  }

  ngOnInit() {
    this.githubService.getRepoInformation()
        .subscribe( (informationArray: RepoInfoModel[]) => {
          this.reposInformationArray = informationArray;
        });
  }

}
