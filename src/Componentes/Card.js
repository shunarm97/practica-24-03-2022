import './Card.css'
const Cards = ({prot, col}) => {

    return (
    <button className={col}>{prot}</button>
    )
}

export default Cards