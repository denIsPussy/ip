export default class Rating {
    constructor(data) {
        this.id = data?.id;
        this.name = data?.name || '';
    }
}