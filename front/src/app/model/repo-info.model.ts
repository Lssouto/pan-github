export class RepoInfoModel {
    private name: string;
    private qtdStars: number;
    private qtdForks: number;

    constructor(repoJson) {
        this.name = repoJson.name;
        this.qtdStars = repoJson.stargazers_count;
        this.qtdForks = repoJson.forks_count;
    }

    get(field: string) {
        return this[field];
    }
}
