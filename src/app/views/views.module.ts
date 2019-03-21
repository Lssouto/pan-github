import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RepoListComponent } from './repo-list/repo-list.component';

@NgModule({
    declarations: [
        LoginComponent,
        RepoListComponent,
    ],
    exports: [
        LoginComponent,
    ],
})

export class ViewsModule {}
