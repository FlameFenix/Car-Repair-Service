function isFirst(id) {
    if(id === 'tab-pane-1') {
       return "tab-pane fade show active"
    } else {
       return "tab-pane fade"
    }
}

function OurServicesItem(props) {
    return ( 
    <div className={isFirst(props.id)} id={props.id}>
            <div className="row g-4">
                <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src={props.imageUrl} style={{ objectFit: "cover", transform: "translate(-50%, 0)" }} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h3 className="mb-3">{props.title}</h3>
                    <p className="mb-4">{props.description}</p>
                    <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                    <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                    <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                    <a href="index.html" className="btn btn-primary py-3 px-5 mt-3">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </div>
        </div>
    );
}

export default OurServicesItem;