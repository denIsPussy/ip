import 'bootstrap/dist/css/bootstrap.min.css'
export default function Serials(props) {
    return (  
        <main><img src id="tempImg" style={{display: 'none'}} alt="" />
            <div className="container justify-content-center" ix="film-container">
                <div className="row text-start ms-1">
                <div className="col-12 page-name-text-width" style={{color: 'white', fontFamily: '"iviSans Medium"'}}>Сериалы смотреть онлайн</div>
                </div>
                <div className="row text-start ms-1">
                <div className="col-12 description-text-width" style={{color: 'white', fontFamily: '"iviSans Regular"', fontWeight: 'lighter'}}>
                    Вы любите смотреть фильмы онлайн и проводите много времени,
                    прочесывая сайты в поисках чего-нибудь интересного? Стоит
                    задержаться на ivi.ru – фильмов, которые собраны у нас, вам хватит
                    надолго.
                </div>
                </div>
                <div className="row text-center ms-1 gx-1" id="filmBar_2021">
                <div className="row text-start">
                    <div className="col-12 category-text-width" style={{color: 'white', fontFamily: '"iviSans Medium"'}}>Сериалы 2022 года</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2022/Сверхъестественное.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Сверхъестественное</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2022/Теория большого взрыва.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Теория большого взрыва</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2022/Ветреный.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Ветреный</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2022/Друзья.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Друзья</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2022/Дом дракона.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Дом дракона</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2022/Любовь напрокат.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Любовь напрокат</div>
                </div>
                </div>
                <div className="row text-center ms-1 gx-1" id="filmBar_2022">
                <div className="row text-start">
                    <div className="col-12 category-text-width" style={{color: 'white', fontFamily: '"iviSans Medium"'}}>Сериалы 2021 года</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2021/Любовь не понимает слов.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Любовь не понимает слов</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2021/Отчаянные домохозяйки.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Отчаянные домохозяйки</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2021/Постучись в мою дверь.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Постучись в мою дверь</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2021/Ранняя пташка.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Ранняя пташка</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2021/Химера.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Химера</div>
                </div>
                <div className="col-xl-2 col-lg-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p3/2021/Черная любовь.png"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Черная любовь</div>
                </div>
                </div>
                <div className="row text-center ms-1 gx-1" id="filmBar_2023" />
                <div className="container mt-3 mb-5">
                </div>
                <Catalog 
                getAllUrl={getAllUrl} 
                url={filmUrl}
                transformer={transformer}
                data={data}
                onAdd={handleOnAdd}
                onEdit={handleOnEdit}>
                
                <div className="form1">
                    <label className="form-label" htmlFor="picture"> Выберите изображение </label>
                    <input className="form-control" id="picture" type="file" accept="image/jpeg, image/png, image/jpg" value='' onChange={handleOnChange}/>
                </div>
                <div className="form1 mt-3">
                    <label htmlFor="name" className="form-label"> Название фильма </label>
                    <input type="text" id="name" className="form-control"
                        value={data.name} onChange={handleFormChange}/>
                </div>
                <div className="form1 mt-3">
                    <label htmlFor="year" className="form-label"> Укажите год </label>
                    <select id="year" className="form-select" value={data.year} onChange={handleFormChange}>
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