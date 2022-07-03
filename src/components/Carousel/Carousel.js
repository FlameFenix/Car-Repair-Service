import CarouselItem from "./carouselItem";

function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="https://res.cloudinary.com/dsqzilmck/image/upload/v1656831364/Car-Repair-Service/Carousel-Items/carousel-bg-1_aubxzl.jpg" alt={"asd"} style={{height: "1000px"}}/>
            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row align-items-center justify-content-center justify-content-lg-start">
                  <div className="col-10 col-lg-7 text-center text-lg-start">
                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">Обслужване на автомобили</h6>
                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Качествено облужване за вашия автомобил</h1>
                    <a href="index.html" className="btn btn-primary py-3 px-5 animated slideInDown">Прочети повече<i className="fa fa-arrow-right ms-3"></i></a>
                  </div>
                  <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                    <img className="img-fluid" src="img/carousel-1.png" alt={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CarouselItem
            title="Трансмисия"
            description="Ремонт и обслужване на автоматични и ръчни скоростни кутии"
            imageUrl="https://res.cloudinary.com/dsqzilmck/image/upload/v1656832648/Car-Repair-Service/Carousel-Items/automatic_transmission_kexlgu.jpg" />

          <CarouselItem
            title="Ходова част"
            description="Проверка и ремонт по окачване на автомобила"
            imageUrl="https://res.cloudinary.com/dsqzilmck/image/upload/v1656832024/Car-Repair-Service/Carousel-Items/car_suspension_hyklmx.jpg" />

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;