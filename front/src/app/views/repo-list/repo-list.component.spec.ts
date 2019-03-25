import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListComponent } from './repo-list.component';
import { RepoListHeaderComponent } from './repo-list-header/repo-list-header.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { httpClientMock, GithubServiceMock } from 'src/app/mocks/mocks';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/store/reducers/auth.reducer';
import { GithubService } from 'src/app/services/github/github.service';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoListComponent, RepoListHeaderComponent ],
      imports: [
        PipesModule,
        StoreModule.forRoot({ acessTkn: authReducer }),
      ],
      providers: [
        { provide: HttpClient, useClass: httpClientMock },
        { provide: GithubService, useClass: GithubServiceMock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
