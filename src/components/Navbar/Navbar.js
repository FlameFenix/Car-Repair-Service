function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
          <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>Автосервиз "Димитров"</h2>
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="index.html" className="nav-item nav-link active">Начало</a>
              <a href="about.html" className="nav-item nav-link">За нас</a>
              <a href="service.html" className="nav-item nav-link">Услуги</a>
              <a href="contact.html" className="nav-item nav-link">Контакти</a>
              <div className="nav-item dropdown">
                <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Страници</a>
                <div className="dropdown-menu fade-up m-0">
                  <a href="booking.html" className="dropdown-item">Booking</a>
                  <a href="team.html" className="dropdown-item">Technicians</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
              </div>
            </div>
            <a href="index.html" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
          </div>
        </nav>
    );
}

export default Navbar;