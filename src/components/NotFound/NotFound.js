function NotFound() {
    return (
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">Съжаляваме, но страницата, която се опитвате да достъпите, не може да бъде намерена.</p>
                        <a class="btn btn-primary rounded-pill py-3 px-5" href="/">Начало</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;