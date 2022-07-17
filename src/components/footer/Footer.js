function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "hidden", animationDelay: "0.1s", animationName: "none"}}>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Адрес</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Загоре 3, Раднево, България</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+088 6 244 800</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>etdido2000@abv.bg</p>
                        <div className="d-flex pt-2" style={{transform: "translate(25%, 50%)"}}>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Работно време</h4>
                        <h6 className="text-light">Понеделник - Петък:</h6>
                        <p className="mb-4">09.00 AM - 09.00 PM</p>
                        <h6 className="text-light">Събота - Неделя:</h6>
                        <p className="mb-0">09.00 AM - 12.00 PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Услуги</h4>
                        <a className="btn btn-link" href="index.html">Диагностика</a>
                        <a className="btn btn-link" href="index.html">Ремонт на двигатели</a>
                        <a className="btn btn-link" href="index.html">Ремонт на трансмисия</a>
                        <a className="btn btn-link" href="index.html">Смяна на масло</a>
                        <a className="btn btn-link" href="index.html">Климатична система</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">ИНФОРМАЦИОНЕН БЮЛЕТИН</h4>
                        <p>Ако желаете да получавате бюлетина на Вашия имейл попълнете формата.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <a className="border-bottom" href="index.html">Your Site Name</a>, All Right Reserved.
                            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="index.html">Home</a>
                                <a href="index.html">Cookies</a>
                                <a href="index.html">Help</a>
                                <a href="index.html">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;