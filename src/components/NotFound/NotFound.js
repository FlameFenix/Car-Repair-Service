import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">Съжаляваме, но страницата, която се опитвате да достъпите, не може да бъде намерена.</p>
                        <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Начало</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;