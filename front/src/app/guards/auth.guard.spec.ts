import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { HttpClient } from '@angular/common/http';
import { httpClientMock } from '../mocks/mocks';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../store/reducers/auth.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ acessTkn: authReducer}),
        RouterTestingModule,
      ],
      providers: [
        AuthGuard,
        { provide: HttpClient, useClass: httpClientMock },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
