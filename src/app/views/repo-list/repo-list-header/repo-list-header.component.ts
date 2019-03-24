import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-list-header',
  templateUrl: './repo-list-header.component.html',
  styleUrls: ['./repo-list-header.component.scss']
})
export class RepoListHeaderComponent implements OnInit {
  private filterConfig: {
    classStyle: string,
    order: string
  };
  private isCollapsed: boolean;

  @Output()
  private filterOptions: EventEmitter<{classStyle: string, order: string}>;

  constructor() {
    this.filterOptions = new EventEmitter();
    this.filterConfig = {
      classStyle: '__card',
      order: 'name'
    };
    this.isCollapsed = true;
    this.emitEvent();
   }

  ngOnInit() {
  }

  private toggleListClass(type: string) {
    this.filterConfig.classStyle = type;
    this.emitEvent();
  }

  private toggleOrder(type: string) {
    this.filterConfig.order = type;
    this.emitEvent();
  }

  private emitEvent(){
    this.filterOptions.emit(this.filterConfig);
  }
}
