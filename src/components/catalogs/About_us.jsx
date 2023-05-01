import 'bootstrap/dist/css/bootstrap.min.css'
export default function About_us(props) {
    return (  
        <main>
            <div className="container mt-5">
                <div className="row justify-content-center">
                <div className="col-6 description-text-width text-wrap badge badge-primary" style={{color: 'white', fontFamily: '"iviSans Regular"'}}>
                    ivi - это самый большой каталог фильмов, сериалов и анимации в
                    России. Все 6 голливудских мейджоров и более 300 контентных
                    партнёров. Мы производим собственный контент и поддерживаем
                    талантливых кинопроизводителей. Уже сейчас при нашей поддержке вышло
                    более 15 проектов, а в 2020 году состоялись первые премьеры
                    собственного производства под брендом ivi originals.
                </div>
                </div>
                <div className="row align-items-end mt-5">
                <div className="col-4 description-text-width text-wrap badge badge-primary text-break" style={{color: 'white', fontFamily: '"iviSans Regular"'}}>Адрес<br />127015, Москва, ул. Большая <br />Новодмитровская, 23
                    стр. 5
                </div>
                <div className="col-4 description-text-width text-wrap badge badge-primary text-break" style={{color: 'white', fontFamily: '"iviSans Regular"'}}>Телефон 8 495 276-06-31</div>
                <div className="col-4 description-text-width text-wrap badge badge-primary text-break" style={{color: 'white', fontFamily: '"iviSans Regular"'}}>ask.ivi.ru<br />Ответы на вопросы</div>
                </div>
            </div>
        </main>
    );
  }