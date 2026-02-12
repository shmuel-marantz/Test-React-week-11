import Card from "./components/Card"
import { list1 } from "./data"

function Table() {
    return (
        <>
            <header>Terrorist database</header>

            <table >


                {list1.map((item) => <Card {...item} />)}


            </table>
        </>
    )
}

export default Table

