import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/authContext";
import * as bookingService from '../../services/bookingService';

import './Details.css'

export const Details = () => {
    const itemId = useParams();
    const { user } = useContext(AuthContext);
    const [catalogueItem, setCatalogueItem] = useState({});

    useEffect(() => {
        bookingService.getOneById(itemId.id).then(res => {
            setCatalogueItem(res);
            console.log(res);
        })

    }, []);

    return (
        <div className="details-page">
            <h2>Детайли за услугата</h2>
            <p>Име: {catalogueItem.fullName}</p>
            <p>Имейл: {catalogueItem.email}</p>
            <p>Вид услуга: {catalogueItem.service}</p>
            <p>Дата: {catalogueItem.date}</p>
            <p>Коментар: {catalogueItem.comment}</p>
            {user.userData._id === catalogueItem._ownerId &&
                < div className="detailsBtns">
                    <button className="editBtn">Edit</button>
                    <button className="deleteBtn">Delete</button>
                </div>
            }
        </div >
    );
}