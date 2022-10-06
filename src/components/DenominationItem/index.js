// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachTransaction, amountDec} = props
  const {id, value} = eachTransaction
  const onDecrement = () => {
    amountDec(value)
  }
  return (
    <li className="li-card-container">
      <button className="btn" onClick={onDecrement}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
