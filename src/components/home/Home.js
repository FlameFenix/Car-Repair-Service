import Carousel from "../Carousel/Carousel";
import Service from "../Service/Service";
import Spinner from "../Spinner/Spinner";

import { useState } from 'react';
import { useEffect } from 'react';


function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    })

    return (
        <div>
            {loading && <Spinner />}
            <Carousel />
            <Service />
        </div>
    );
}

export default Home;
