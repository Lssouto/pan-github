import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from 'src/app/mocks/mocks';
import { Store, StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/store/reducers/auth.reducer';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({ acessTkn: authReducer }),
    ],
    providers: [
      { provide: HttpClient, useClass: httpClientMock }
    ]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
