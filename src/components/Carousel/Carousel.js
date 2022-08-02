import CarouselItem from "./carouselItem";

function Carousel() {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <CarouselItem
            title="Обслужване на автомобили"
            description="Качествено облужване за вашия автомобил"
            imageUrl="https://res.cloudinary.com/dsqzilmck/image/upload/v1656831364/Car-Repair-Service/Carousel-Items/carousel-bg-1_aubxzl.jpg"
            activeItem="true"
          />
          <CarouselItem
            title="Трансмисия"
            description="Ремонт и обслужване на автоматични и ръчни скоростни кутии"
            imageUrl="https://res.cloudinary.com/dsqzilmck/image/upload/v1656832648/Car-Repair-Service/Carousel-Items/automatic_transmission_kexlgu.jpg"
          />

          <CarouselItem
            title="Ходова част"
            description="Проверка и ремонт по окачване на автомобила"
            imageUrl="https://res.cloudinary.com/dsqzilmck/image/upload/v1656832024/Car-Repair-Service/Carousel-Items/car_suspension_hyklmx.jpg"
          />

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