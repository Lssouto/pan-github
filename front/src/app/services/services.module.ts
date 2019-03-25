import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from './authenticate/authenticate.service';
import { GithubService } from './github/github.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../store/reducers/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ acessTkn: authReducer })
  ],
  providers: [
    AuthenticateService,
    GithubService,
  ],
})
export class ServicesModule { }
