import { useState, useEffect } from "react";
import Banner from "../common/Banner";
import "../common/banner.css";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Films(props) {
    return (  
        <main>
            <Banner/>
            <div className="container mb-5" id="film-container">
                <div className="row text-center">
                <div className="col-12 size-text-title" style={{color: 'white', fontFamily: '"iviSans Medium"'}}>Рекомендуем к просмотру</div>
                </div>
                <div className="row text-center">
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p1/Гудбай, Америка.jpg"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Гудбай, Америка</div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p1/Звёздная принцесса и силы зла.jpg"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Звёздная принцесса и силы зла</div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p1/Команда котиков.jpg"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Команда котиков</div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p1/Молодой человек.jpg"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Молодой человек</div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p1/Ниндзяго Мастера кружицу.jpg"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Ниндзяго Мастера кружицу</div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-2"><img className="img-fluid rounded-3" src={"../images/p1/Фиксики против кработов.jpg"} alt="" />
                    <div className="container text-truncate p-0" style={{color: 'white'}}>Фиксики против кработов</div>
                </div>
                </div>
            </div>
        </main>
    );
  }