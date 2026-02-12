import "./Card.css"

function Card({ name, organization, attacksCount }) {
    return (
        <tr>
            <td>name: {name}</td>
            <td>organization: {organization}</td>
            <td>attacksCount: {attacksCount}</td>
        </tr>
    )
}

export default Card
