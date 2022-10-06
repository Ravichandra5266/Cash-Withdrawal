// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  amountDec = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    console.log({balance})
    const name = 'RaviChandra'
    const profileSliceLogo = name.slice(0, 1)
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="logo-container">
          <h1 className="person-logo">{profileSliceLogo}</h1>
          <h1 className="name">{name}</h1>
        </div>
        <div className="balance-content">
          <p className="balance-title">Your Balance</p>
          <div className="balance-card">
            <p className="balance-no">{balance}</p>
            <p className="balance-currency">In Rupess</p>
          </div>
        </div>
        <div className="withdraw-container">
          <p className="title">Withdraw</p>
          <p className="para">Choose Sum (In Rupees)</p>
        </div>
        <ul className="ul-card-container">
          {denominationsList.map(eachItem => (
            <DenominationItem
              eachTransaction={eachItem}
              amountDec={this.amountDec}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
