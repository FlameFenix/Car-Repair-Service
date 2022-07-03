function CarouselItem(props) {
    return (
    <div className="carousel-item">
        <img className="w-100" src={props.imageUrl} alt={"asd"} style={{height: "1000px"}}/>
        <div className="carousel-caption d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                        <h6 className="text-white text-uppercase mb-3 animated slideInDown"> {props.title} </h6>
                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown"> {props.description} </h1>
                        <a href="index.html" className="btn btn-primary py-3 px-5 animated slideInDown">Прочети повече<i className="fa fa-arrow-right ms-3"></i></a>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                        <img className="img-fluid" src="" alt={""} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CarouselItem;