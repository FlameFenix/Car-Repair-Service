export const CatalogueItem = ({ fullName, service, date}) => {
    return (
        <tr className="user-information">
            <th className="user-name">{fullName}</th>
            <th className="service"> {service}</th>
            <th className="date">{date}</th>
        </tr>
    );

}