import { useState } from "react";
import { useEffect } from "react";
import * as contactService from '../../../services/contactService';
import { MessageItem } from "./MessageItem";

export const Messages = () => {

    const [messages, SetMessages] = useState([]);

    useEffect(() => {
        contactService.listOfMessages()
            .then(res => {
                SetMessages(convertData(res));
            })
    }, [])

    function convertData(data) {
        let result = [];

        for (const item in data) {
            result.push(data[item]);
        }
        return result;
    }

    return (
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                </thead>
                <tbody>
                    {messages.length !== 0 ?
                        messages.map(x => <MessageItem key={x._id} {...x} />)
                    : <tr colSpan={4}>No messages</tr>}
                </tbody>
            </table>

        </div>
    );
}