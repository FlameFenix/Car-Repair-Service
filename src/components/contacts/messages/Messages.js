import { useState, useEffect, useContext } from "react";

import { ContactsContext } from "../../../contexts/contactContext";
import * as contactService from '../../../services/contactService';

import { MessageItem } from "./MessageItem";

import { AuthContext } from "../../../contexts/authContext";

import './Messages.css'
export const Messages = () => {

    const [messages, SetMessages] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        contactService.listOfMessages()
            .then(res => {
                SetMessages(convertData(res));
            })
    }, [SetMessages])

    function convertData(data) {
        let result = [];

        for (const item in data) {
            result.push(data[item]);
        }
        return result;
    }

    const deleteMessageHandler = (id) => {
        SetMessages(state => ([
            ...state.filter(x => x._id !== id)
        ]));
    }

    return (
        <div>
            <ContactsContext.Provider value={{ messages, deleteMessageHandler }}>
                {user.userData.email === 'flamefenix@abv.bg' &&
                    <table className="messagesTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.length !== 0 ?
                                messages.map(x =>
                                    <MessageItem
                                        key={x._id}
                                        {...x}
                                        id={x._id}
                                        deleteMessageHandler={deleteMessageHandler}
                                    />)
                                : <tr>
                                    <td className="no-messages" colSpan={'5'}>
                                        No messages
                                    </td>
                                </tr>}
                        </tbody>
                    </table>
                }
                
            </ContactsContext.Provider>
        </div>
    );
}