import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <NavLink to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Автосервиз "Димитров"</h2>
      </NavLink>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link">Начало</NavLink>
          <NavLink to="/About" className="nav-item nav-link">За нас</NavLink>
          <NavLink to="/Services" className="nav-item nav-link">Услуги</NavLink>
          <NavLink to="/Contacts" className="nav-item nav-link">Контакти</NavLink>
          <div className="nav-item dropdown">
            <NavLink to="/Pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Страници</NavLink>
            <div className="dropdown-menu fade-up m-0">
              <NavLink to="/Register" className="dropdown-item">Регистрация</NavLink>
              <NavLink to="/Login" className="dropdown-item">Вход</NavLink>
              <NavLink to="/Catalogue" className="dropdown-item">Каталог</NavLink>
              <NavLink to="/Administration" className="dropdown-item">Администрация</NavLink>
            </div>
          </div>
        </div>
        <NavLink to="/Booking" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Запишете час<i className="fa fa-arrow-right ms-3"></i></NavLink>
      </div>
    </nav>
  );
}

export default Navbar;