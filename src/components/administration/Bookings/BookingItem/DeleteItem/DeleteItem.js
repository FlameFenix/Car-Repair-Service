import { useContext } from 'react';
import { AuthContext } from '../../../../../contexts/authContext';
import * as bookingService from '../../../../../services/bookingService';

import './DeleteItem.css';

export const DeleteItem = ({
    _id,
    closeTab,
    DeleteHandler
}) => {

    const { user } = useContext(AuthContext);

    const onDeleteHandler = (e) => {
        e.preventDefault();

        try {
            bookingService.deleteById(_id, undefined, user.userData.accessToken).then(res => {
                if(res) {
                    DeleteHandler(e, _id);
                } else {
                    console.log('Error while trying to delete item');
                }
            });

        } catch (error) {
            alert(error);
        }

        closeTab();
    }

    return (
        <div className="overlay-delete">

            <div className="delete-message">
                <p>Сигурни ли сте, че искате да изтриете този запис</p>
                <div className="deleteItem-btns">
                    <button onClick={(e) => onDeleteHandler(e, _id)}>
                        Премахване
                    </button>
                    <button onClick={closeTab}>
                        Отказ
                    </button>
                </div>
            </div>

        </div>
    );
}