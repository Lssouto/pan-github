import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { RepoListHeaderComponent } from './repo-list/repo-list-header/repo-list-header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    declarations: [
        LoginComponent,
        RepoListComponent,
        RepoListHeaderComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        PipesModule,
        BsDropdownModule.forRoot(),
    ],
    exports: [
        LoginComponent,
        RepoListHeaderComponent,
    ],
})

export class ViewsModule {}
