import { Observable, of } from 'rxjs';
import { RepoInfoModel } from '../model/repo-info.model';

const mockedRepoInfoModel = new RepoInfoModel({
    name: 'Repository',
    stargazers_count: Math.round(Math.random() * 10),
    forks_count: Math.round(Math.random() * 10),
});
export class httpClientMock {
    post(url: string, body: any) {}
    put(url: string, body: any) {}
    get(url: string, body: any) {}
    delete(url: string, body: any) {}
}

export class GithubServiceMock {
    getRepoInformation(): Observable<RepoInfoModel[]> {
        return of([mockedRepoInfoModel]);
    }
}
