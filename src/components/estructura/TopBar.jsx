import React from 'react'
import { Link } from 'react-router-dom'

export const TopBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" id="topBar_body">
            <img className="h-100 logo_img_topbar" src="/images/utils/logo_sinFondo2.png" alt="Digital House" />
            {/* <button id="sidebarToggleTop" className="btn btn-dark d-md-none rounded-2px mr-3">
                <i className="fa fa-bars"></i>
            </button> */}

            <ul className="navbar-nav ml-auto">

                
                {/* <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                        <i className="fas fa-bell fa-fw"></i>
                        <span className="badge badge-danger badge-counter">3+</span>
                    </a>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                        <i className="fas fa-envelope fa-fw"></i>

                        <span className="badge badge-danger badge-counter">7</span>
                    </a>
                </li> */}

                <div className="topbar-divider d-none d-sm-block"></div>


                <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link dropdown-toggle" to="/" id="userDropdown">
                        <span className="mr-2 d-none d-lg-inline text-white-600" id="topBar_logo">
                            Panel de Administrador <i className="fa-solid fa-screwdriver-wrench"></i>
                        </span>
                    </Link>
                </li>

            </ul>

        </nav>
    )
}
