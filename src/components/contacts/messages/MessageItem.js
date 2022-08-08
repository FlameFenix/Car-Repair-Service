export const MessageItem = ({ name, email, subject, message }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{subject}</td>
            <td>{message}</td>
        </tr>
    );
}