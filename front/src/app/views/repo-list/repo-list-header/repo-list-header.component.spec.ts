import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListHeaderComponent } from './repo-list-header.component';

describe('RepoListHeaderComponent', () => {
  let component: RepoListHeaderComponent;
  let fixture: ComponentFixture<RepoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
