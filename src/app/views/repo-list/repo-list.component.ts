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
    this.githubService.getRepoInformation()
        .subscribe( (informationArray: RepoInfoModel[]) => {
          this.reposInformationArray = informationArray;
        });
  }

  private filterOptionsHandler(val) {
    this.activeListClassStyle = val.classStyle;
    this.orderParams = val.order;
  }
}
