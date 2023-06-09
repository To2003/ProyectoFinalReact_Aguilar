import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import { Titulo } from "./Titulo"
import { categorias } from "../../util/mFetch"
import './NavBar.css'



export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container-fluid">

                <Titulo />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse divNavBar" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to='/' className="nav-link active" >Home</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/form">Formulario</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                            </a>

                            <ul className="dropdown-menu">

                                    {categorias.map(categoria => <li><NavLink key={categoria.id} to={`/categoria/${categoria.categoria}`} className="dropdown-item">{categoria.name}</NavLink></li>)}

                                <li><hr className="dropdown-divider" /></li>

                                <li>
                                    <Link className="dropdown-item">
                                        Coming Soon
                                    </Link>
                                </li>

                            </ul>

                        </li>

                        <li className="nav-item">
                            <Link to='/cart'>
                                <CartWidget />
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

