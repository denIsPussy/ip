import './App.css';
import { useRoutes, Outlet, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/catalogs/Home';
import Films from './components/catalogs/Films';
import Serials from './components/catalogs/Serials';
import News from './components/catalogs/News';
import About_us from './components/catalogs/About_us';

function Router(props) {
  return useRoutes(props.rootRoute);
}

export default function App() {
  const routes = [
    { index: true, element: <Home /> },
    { path: 'catalogs/home', element: <Home />, label: 'Главная'  },
    { path: 'catalogs/films', element: <Films />, label: 'Фильмы' },
    { path: 'catalogs/serials', element: <Serials />, label: 'Сериалы' },
    { path: 'catalogs/news', element: <News />, label: 'Новинки' },
    { path: 'catalogs/about_us', element: <About_us />, label: 'О нас' },
  ];
  const links = routes.filter(route => route.hasOwnProperty('label'));
  const rootRoute = [
    { path: '/', element: render(links), children: routes }
  ];

  function render(links) {
    return (
      <>
        <Header links={links} />
        <div className="container-fluid p-0">
          <Outlet />
        </div>
        <Footer></Footer>
      </>
    );
  }

  return (  
    <BrowserRouter>
      <Router rootRoute={ rootRoute } />
    </BrowserRouter>
  );
}