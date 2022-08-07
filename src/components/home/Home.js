import Carousel from "../Carousel/Carousel";
import Service from "../Service/Service";
import Spinner from "../Spinner/Spinner";

import './Home.css'

import { Fragment, useState } from 'react';
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
            {loading &&
            <div className="spinner">
                <Spinner />
            </div>
            }

            {!loading &&
                <Fragment>
                    <Carousel />
                    <Service />
                </Fragment>
            }
        </div>
    );
}

export default Home;
