import 'bootstrap/dist/css/bootstrap.min.css'
export default function News(props) {
    return (  
        <main>
            <div className="container" style={{width: 'fit-content', backgroundColor: '#1e1b2e'}}>
                <div className="row pt-3 pb-3">
                <div className="col-4 col-md-2"><img className="img-fluid rounded-3" src={"../images/p4/1.png"} alt /></div>
                <div className="col-5 mt-2 text-nowrap text-wrap:" style={{color: 'white', fontFamily: '"iviSans Regular"'}}>Пес самурай и город кошек<br />Мультфильм</div>
                </div><img className="img-fluid rounded-3" src={"../images/p4/2.png"} alt />
                <div className="row">
                <div className="col-12 text-nowrap text-wrap:" style={{color: 'white', fontFamily: '"iviSans Regular"'}}>Пес самурай и город кошек</div>
                <div className="container pb-4">
                    <button className="btn" type="button" style={{color: 'white', backgroundColor: '#312b45'}}>Трейлер</button>
                    <button className="btn mx-3" type="button" style={{color: 'white', backgroundColor: '#312b45'}}>Посмотреть</button>
                </div>
                </div>
            </div>
            </main>
    );
  }