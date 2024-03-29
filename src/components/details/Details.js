import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/authContext";
import { BookingContext } from "../../contexts/bookingContext";
import * as bookingService from '../../services/bookingService';

import './Details.css'

export const Details = () => {
    const navigate = useNavigate();

    const itemId = useParams();

    const { user } = useContext(AuthContext);

    const { onDeleteHandler } = useContext(BookingContext);

    const [catalogueItem, setCatalogueItem] = useState({});

    useEffect(() => {
        bookingService.getOneById(itemId.id).then(res => {
            setCatalogueItem(res);
        })

    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        if (catalogueItem._ownerId !== user.userData._id) {
            return alert('You must be owner in order to delete this article');
        }

        bookingService.deleteById(catalogueItem._id, undefined, user.userData.accessToken);
        onDeleteHandler(catalogueItem._id);
        navigate('/Catalogue');

    }

    return (
        <div className="details-page">

            <h2>Информация за услугата</h2>
            <p>Име: {catalogueItem.fullName}</p>
            <p>Имейл: {catalogueItem.email}</p>
            <p>Вид услуга: {catalogueItem.service}</p>
            <p>Дата: {catalogueItem.date}</p>
            <p>Коментар: {catalogueItem.comment}</p>
            {user.userData._id === catalogueItem._ownerId &&
                <div className="detailsBtns">
                    <Link to={`/Details/Edit/${itemId.id}`} className="editBtn">Edit</Link>
                    <button className="deleteBtn" onClick={deleteHandler}>Delete</button>
                </div>
            }
            <Link className="goBackBtn" to="/Catalogue">Go back</Link>
        </div >
    );
}