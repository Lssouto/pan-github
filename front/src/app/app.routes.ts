import { LoginComponent } from './views/login/login.component';
import { RepoListComponent } from './views/repo-list/repo-list.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'repositorios',
        component: RepoListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '**',
        component: LoginComponent,
    },
];
