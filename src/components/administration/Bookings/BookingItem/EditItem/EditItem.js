import { useEffect } from "react";
import { useParams } from "react-router";

import * as bookingService from '../../../../../services/bookingService'

export const EditItem = () => {

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [])
    
    return (
        <div className="overlay">
            <div>
                <p>Hello world</p>
            </div>
        </div>
    );
}