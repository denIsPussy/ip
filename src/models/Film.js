export default class Film {
    constructor(data) {
        this.id = data?.id;
        this.name = data?.name || '';
        this.picture = data?.picture || '';
        this.year = data?.year || '';
    }
}