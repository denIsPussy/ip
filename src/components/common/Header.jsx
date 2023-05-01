import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../images/logo.png"
export default function Header(props){
    return(
        <div>
            <meta charSet="UTF-8" />
            <link rel="stylesheet" href="../style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{__html: "\n      body {\n      \tbackground: #100e19 !important;\n      }\n    " }} />
            <header>
                <div className="container-fluid bg-info1">
                <nav className="navbar navbar-expand-md bg-light1">
                    <div className="container-fluid bg-danger1"><img className="navbar-brand bg-red1" src={logo} width="120px" alt=""/>
                    <button className="navbar-toggler d-md-none custom-toggler text-right" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse bg-rose1" id="collapsibleNavId">
                        <ul className="navbar-nav" id="list">
                        {
                            props.links.map(route =>
                            <li key={route.path}
                                className="nav-item">
                                <NavLink className="nav-link" to={route.path}>
                                        {route.label}
                                </NavLink>
                            </li>
                            )
                        }
                            <li className="nav-item pt-1">
                                <button className="btn" style={{"color":"white"}} type="button" data-bs-toggle="modal" data-bs-target="#modalWindow">Купить подписку</button>
                            </li>
                        </ul>
                    </div> 
                    </div>
                </nav>
                </div>
            </header>
        </div>
    )
}