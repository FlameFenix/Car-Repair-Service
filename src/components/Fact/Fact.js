function Fact() {
    return (
        <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s" style={{visibility: "hidden", animationDelay: "0.1s", animationName: "none"}}>
              <i className="fa fa-check fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Years Experience</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s" style={{visibility: "hidden", animationDelay: "0.3s", animationName: "none"}}>
              <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Expert Technicians</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s" style={{visibility: "hidden", animationDelay: "0.5s", animationName: "none"}}>
              <i className="fa fa-users fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Satisfied Clients</p>
            </div>
            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s" style={{visibility: "hidden", animationDelay: "0.7s", animationName: "none"}}>
              <i className="fa fa-car fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
              <p className="text-white mb-0">Compleate Projects</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Fact;