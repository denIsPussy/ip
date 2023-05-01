import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Catalog from "./Catalog";
import Year from "../../models/Year";
import "../style.css";
import Movie from "../DTO/MovieDTO";
import DataService from "../../services/DataService";

export default function Films(props) {

    const [data, setData] = useState(new Movie());
    const [year, setYear] = useState([]);

    const getAllUrl = 'film?_expand=filmName';
    const filmUrl = "film/"
    const yearUrl = "year/"
    const transformer = (data) => new Movie(data);

    useEffect(() => {
        DataService.readAll(yearUrl, (data) => new Year(data)).then((data) =>
          setYear(data)
        );
      }, []);

    function handleOnAdd() {
        setData(new Movie());
    }

    function handleOnEdit(data) {
        setData(new Movie(data));
    }
    
    function handleFormChange(event) {
    setData({ ...data, [event.target.id]: event.target.value });
    }

    const [imageURL, setImageURL] = useState();
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        const tempval = fileReader.result
        setImageURL(tempval);
        setData({ ...data, ['image']: tempval });
    };
    function handleOnChange(event) {
        event.preventDefault();
        const file = event.target.files[0];
        fileReader.readAsDataURL(file);
    }

    return (  
        <main>
            <div className="d-flex justify-content-start" id="tbl-items" /><img src='' id="tempImg" style={{display: 'none'}} alt="" />
            <div className="container justify-content-center" id="film-container">
                <div className="row text-start ms-1">
                <div className="col-12 size-text-title" style={{color: 'white', fontFamily: '"iviSans Medium"'}}>Фильмы смотреть онлайн</div>
                </div>
                <div className="row text-start ms-1">
                <div className="col-12 description-text-width" style={{color: 'white', fontFamily: '"iviSans Regular"', fontWeight: 'lighter'}}>
                    Вы любите смотреть фильмы онлайн и проводите много времени,
                    прочесывая сайты в поисках чего-нибудь интересного? Стоит
                    задержаться на ivi.ru – фильмов, которые собраны у нас, вам хватит
                    надолго.
                </div>
                </div>
            <Catalog 
                getAllUrl={getAllUrl} 
                url={filmUrl}
                transformer={transformer}
                data={data}
                onAdd={handleOnAdd}
                onEdit={handleOnEdit}>
                
                <div className="form1">
                    <label className="form-label" htmlFor="image"> Выберите изображение </label>
                    <input className="form-control" id="image" type="file" accept="image/jpeg, image/png, image/jpg" value='' onChange={handleOnChange}/>
                </div>
                <div className="form1 mt-3">
                    <label htmlFor="name" className="form-label"> Название фильма </label>
                    <input type="text" id="name" className="form-control"
                        value={data.name} onChange={handleFormChange}/>
                </div>
                <div className="form1 mt-3">
                    <label htmlFor="movieTracking" className="form-label"> рейтинг в числах </label>
                    <input type="number" step="0.01" id="movieTracking" className="form-control"
                        value={data.movieTracking} onChange={handleFormChange} required/>
                </div>
                <div className="form1 mt-3">
                    <label htmlFor="rating" className="form-label"> Укажите возрастной рейтинг </label>
                    <select id="rating" className="form-select" value={data.rating} onChange={handleFormChange}>
                        <option disabled value="">  Выберите год </option>
                        {
                            year.map(year => 
                                <option key={year.id} value={year.name}>
                                    {year.name}
                                </option>
                            )
                        }
                    </select>
                </div>
            </Catalog>
            </div>
        </main>
    );
}