function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "hidden", animationDelay: "0.1s", animationName: "none"}}>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Address</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2" style={{transform: "translate(25%, 50%)"}}>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href="index.html"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Opening Hours</h4>
                        <h6 className="text-light">Monday - Friday:</h6>
                        <p className="mb-4">09.00 AM - 09.00 PM</p>
                        <h6 className="text-light">Saturday - Sunday:</h6>
                        <p className="mb-0">09.00 AM - 12.00 PM</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Services</h4>
                        <a className="btn btn-link" href="index.html">Diagnostic Test</a>
                        <a className="btn btn-link" href="index.html">Engine Servicing</a>
                        <a className="btn btn-link" href="index.html">Tires Replacement</a>
                        <a className="btn btn-link" href="index.html">Oil Changing</a>
                        <a className="btn btn-link" href="index.html">Vacuam Cleaning</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
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