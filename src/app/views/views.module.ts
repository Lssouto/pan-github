import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipes/capitalize/capitalize.pipe';

@NgModule({
    declarations: [
        LoginComponent,
        RepoListComponent,
        CapitalizePipe,
    ],
    imports: [
        BrowserModule,
        CommonModule,
    ],
    exports: [
        LoginComponent,
    ],
})

export class ViewsModule {}
