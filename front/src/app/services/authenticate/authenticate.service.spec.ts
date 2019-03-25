import { TestBed } from '@angular/core/testing';

import { AuthenticateService } from './authenticate.service';
import { httpClientMock } from 'src/app/mocks/mocks';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/store/reducers/auth.reducer';

describe('AuthenticateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({ acessTkn: authReducer })
    ],
    providers: [
      { provide: HttpClient, useClass: httpClientMock },
    ]
  }));

  it('should be created', () => {
    const service: AuthenticateService = TestBed.get(AuthenticateService);
    expect(service).toBeTruthy();
  });
});
