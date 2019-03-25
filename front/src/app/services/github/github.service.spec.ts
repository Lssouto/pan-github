import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from 'src/app/mocks/mocks';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/store/reducers/auth.reducer';

describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({ acessTkn: authReducer })
    ],
    providers: [
      { provide: HttpClient, useClass: httpClientMock },
    ]
  }));

  it('should be created', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });
});
