import ServiceItem from "./ServiceItem";

function Services() {
    return (
        <div className="container-xxl service py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "hidden", animationDelay: "0.1s", animationName: "none" }}>
                    <h6 className="text-primary text-uppercase"> Our Services </h6>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "hidden", animationDelay: "0.3s", animationName: "fadeInUp" }}>
                    <div className="col-lg-4">
                        <div className="nav w-100 nav-pills me-4">
                            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                <i className="fa fa-car-side fa-2x me-3"></i>
                                <h4 className="m-0">Diagnostic Test</h4>
                            </button>
                            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                <i className="fa fa-car fa-2x me-3"></i>
                                <h4 className="m-0">Engine Servicing</h4>
                            </button>
                            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                <i className="fa fa-cog fa-2x me-3"></i>
                                <h4 className="m-0">Tires Replacement</h4>
                            </button>
                            <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                <i className="fa fa-oil-can fa-2x me-3"></i>
                                <h4 className="m-0">Oil Changing</h4>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content w-100">

                            <ServiceItem
                                class="show active"
                                id="tab-pane-1"
                                imageUrl="img/service-1.jpg"
                                title="15 Years Of Experience In Auto Servicing"
                                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
                            />
                            
                            <ServiceItem
                                id="tab-pane-2"
                                imageUrl="img/service-2.jpg"
                                title="15 Years Of Experience In Auto Servicing"
                                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
                            />

                            <ServiceItem
                                id="tab-pane-3"
                                imageUrl="img/service-3.jpg"
                                title="15 Years Of Experience In Auto Servicing"
                                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
                            />

                            <ServiceItem
                                id="tab-pane-4"
                                imageUrl="img/service-4.jpg"
                                title="15 Years Of Experience In Auto Servicing"
                                description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;