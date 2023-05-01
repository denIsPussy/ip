export default class MovieDTO {
    constructor(data) {
        this.name = data && data.name ? data.name : " ";
        this.movieTracking = data && data.movieTracking ? data.movieTracking : 0;
        this.rating = data && data.rating ? data.rating : "R";
        this.image = data && data.image ? data.image : null;
    }
}
