function Contacts() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase"> Contact Us </h6>
                    <h1 className="mb-5">Contact For Any Query</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase"> Booking </h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase"> General </h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bg-light d-flex flex-column justify-content-center p-4">
                                    <h5 className="text-uppercase"> Technical </h5>
                                    <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.280089759805!2d25.934633299999998!3d42.27254409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a7dfb249e10e5f%3A0xe82d63b431558ec5!2z0JTQuNC00L4gMjAwMA!5e0!3m2!1sen!2sbg!4v1656847477218!5m2!1sen!2sbg"
                            style={{ minHeight: "350px", border: "0", allowfullscreen: "", ariaHidden: "false" }}
                            tabindex="0">

                        </iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;