export default class Year {
    constructor(data) {
        this.id = data?.id;
        this.name = data?.name || '';
    }
}