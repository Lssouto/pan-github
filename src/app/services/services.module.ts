import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from './authenticate/authenticate.service';
import { GithubService } from './github/github.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthenticateService,
    GithubService,
  ],
})
export class ServicesModule { }
