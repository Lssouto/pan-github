import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-list-header',
  templateUrl: './repo-list-header.component.html',
  styleUrls: ['./repo-list-header.component.scss']
})
export class RepoListHeaderComponent {
  // Filter config used on parent component
  private filterConfig: {
    classStyle: string,
    order: string
  };
  // Control the collapse state when mobile
  private isCollapsed: boolean;
  // Output the filterConfig
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
  // Toggler to the list view class
  private toggleListClass(type: string): void {
    this.filterConfig.classStyle = type;
    this.emitEvent();
  }
  // Toggler to the list order
  private toggleOrder(type: string): void {
    this.filterConfig.order = type;
    this.emitEvent();
  }
  // Emit the event to update the configs
  private emitEvent(): void {
    this.filterOptions.emit(this.filterConfig);
  }
}