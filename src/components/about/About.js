function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 pt-4" style={{minHeight: "400px"}}>
            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
              <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" style={{objectFit: "cover", transform: "translate(-50%, 0)"}} alt="" />
                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: "rgba(0, 0, 0, .08)"}}>
                  <h1 className="display-4 text-white mb-0">20+ <span className="fs-4">Years</span></h1>
                  <h4 className="text-white">Experience</h4>
                </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className="text-primary text-uppercase">About Us</h6>
            <h1 className="mb-4"><span className="text-primary">Автосервиз "Димитров"</span> Искате да получите най-доброто обслужане за вашият автомобил тук е мястото!</h1>
            <p className="mb-4">Опита ни в сферата на автомобилите се гради на много обучения и предимно практика. Екипът ни е не е огромен, но сме хора, които желаят да се развиват и постоянно надграждаме възможностите си за да удовлетворим нуждите на клиентите си.. Доказали сме се със знания, перфектно извършени услуги и много клиенти през годините.</p>
            <div className="row g-4 mb-3 pb-3">
              <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex justify-content-center">
                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                    <span className="fw-bold text-secondary">01</span>
                  </div>
                  <div className="ps-3">
                    <h6>Екип от професионалисти</h6>
                    <span>Обученията за нас са най-важни, така се развиваме.</span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex justify-content-center">
                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                    <span className="fw-bold text-secondary">02</span>
                  </div>
                  <div className="ps-3">
                    <h6>Качествено обслужване</h6>
                    <span>Най-доброто за вашия автомобил е на първо място!</span>
                  </div>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex justify-content-center">
                  <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                    <span className="fw-bold text-secondary">03</span>
                  </div>
                  <div className="ps-3">
                    <h6>Сертификати, които притежаваме</h6>
                    <span>Развиваме се постоянно в сферата на автомобилите.</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="index.html" className="btn btn-primary py-3 px-5">Прочети повече<i className="fa fa-arrow-right ms-3"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;