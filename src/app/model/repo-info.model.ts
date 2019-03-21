export class RepoInfoModel {
    private name: string;
    private qtdStars: number;
    private qtdForks: number;

    constructor(data) {
        const requiredFields = ['name', 'qtdStars', 'qtdForks'];
        requiredFields.forEach( (reqF) => {
            if (data[reqF]) {
                this[reqF] = data[reqF];
            }
        });
    }

    get(field: string) {
        return this[field];
    }
}