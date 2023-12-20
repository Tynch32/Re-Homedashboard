import { Link, useLocation } from "react-router-dom"

export const SideBard = () => {
    const {pathname} = useLocation();

    return (
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src="/images/utils/logo_sinFondo.png" alt="Digital House" />
                </div>
            </Link>


            <hr className="sidebar-divider my-0" />


            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <h5>
                        <i className="fa-solid fa-chart-line"></i> Dashboard
                    </h5>
                    </Link>
            </li>


            <hr className="sidebar-divider" />


            <div className="sidebar-heading">Actions</div>


            <li className={`nav-item ${pathname=== '/' && 'active'}`}>
                <Link className="nav-link collapsed" to="/">
                    <i className="fas fa-fw fa-home"></i>
                    <span>HOME</span>
                </Link>
            </li>


            <li className={`nav-item ${pathname=== '/products' && 'active'}`}>
                <Link className="nav-link" to="/products">
                    <i className="fa-solid fa-boxes-packing"></i>
                    <span>PRODUCTOS</span></Link>
            </li>

            <li className={`nav-item ${pathname=== '/categories' && 'active'}`}>
                <Link className="nav-link" to="/categories">
                    <i className="fa-solid fa-list"></i>
                    <span>CATEGORÍAS</span></Link>
            </li>
            <li className={`nav-item ${pathname=== '/users' && 'active'}`}>
                <Link className="nav-link" to="/users">
                    <i className="fa-solid fa-user"></i>
                    <span>USUARIOS</span></Link>
            </li>
            {/* <li className={`nav-item ${pathname=== '/ventas' && 'active'}`}>
                <Link className="nav-link" to="/ventas">
                    <i className="fa-solid fa-cash-register"></i>
                    <span>VENTAS</span></Link>
            </li> */}

            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    )
}
