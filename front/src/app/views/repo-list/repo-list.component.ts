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
  // List of repositorys
  private reposInformationArray: RepoInfoModel[];
  // Control how the list is show
  private activeListClassStyle: string;
  // Control the list order sending to the pipe on ngFor
  private orderParams: string;

  constructor(private githubService: GithubService) {
    this.reposInformationArray = [];
    this.activeListClassStyle = '__card';
    this.orderParams = 'name';
  }

  public ngOnInit(): void {
    this.githubService.getRepoInformation()
        .subscribe( (informationArray: RepoInfoModel[]) => {
          this.reposInformationArray = informationArray;
        });
  }

  // Handle the event from header that update config
  private filterOptionsHandler(val: {classStyle: string, order: string}): void {
    this.activeListClassStyle = val.classStyle;
    this.orderParams = val.order;
  }
}
