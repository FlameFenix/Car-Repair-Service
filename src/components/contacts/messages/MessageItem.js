import * as contactService from '../../../services/contactService';
import { ContactsContext } from '../../../contexts/contactContext';
import { useContext } from 'react';

export const MessageItem = ({ id }) => {

    const { messages, deleteMessageHandler } = useContext(ContactsContext);

    const { name, email, subject, message } = messages.find(x => x._id === id);

    const deleteHandler = (e) => {
        e.preventDefault();
        deleteMessageHandler(id);
        contactService.deleteMessage(id);
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{subject}</td>
            <td>{message}</td>
            <td>
                <button className="deleteBtn" onClick={deleteHandler}>Delete</button>
            </td>
        </tr>
    );
}