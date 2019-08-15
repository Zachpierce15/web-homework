import React from 'react'
import { css } from '@emotion/core'

import Popup from './Transactions/addingTranaction'
import TransactionList from './Transactions/listOfTransactions'
import items from '../mockData'

export class UserInterface extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      transactions: items,
      showPopup: false
    }
    // Bind functions here that need to be passed down to other components
    this.togglePopup = this.togglePopup.bind(this)
    this.addTransaction = this.addTransaction.bind(this)
    this.removeTransaction = this.removeTransaction.bind(this)
    this.editTransaction = this.editTransaction.bind(this)
  }

  togglePopup () {
    const { showPopup } = this.state
    this.setState({
      showPopup: !showPopup
    })
  }

  addTransaction (newItem) {
    const { transactions } = this.state
    const oldState = { ...transactions }
    oldState.item.push(newItem)
    this.setState({ transactions: oldState })
  }

  removeTransaction (item) {
    const { transactions } = this.state
    const oldState = { ...transactions }
    for (let i = 0; i < oldState.item.length; i++) {
      let oldItem = oldState.item[i]
      if (oldItem.id === item.id) {
        oldState.item.splice(i, 1)
      }
    }
    this.setState({ transactions: oldState })
  }

  editTransaction (newItem) {
    const { transactions } = this.state
    const oldState = { ...transactions }
    for (let i = 0; i < oldState.item.length; i++) {
      let item = oldState.item[i]
      if (item.id === newItem.id) {
        oldState.item.splice(i, 1)
        oldState.item.push(newItem)
      }
    }
    this.setState({ transactions: oldState })
  }

  render () {
    const { transactions, showPopup } = this.state
    return (
      <div >
        <h1 css={formStyle}> Transactions </h1>
        { transactions.item.length === 0 ? (
          <div>
            <div css={noTransactions}>
          You have no transactions at this time
              <button css={addButton} onClick={this.togglePopup}> Add Transaction </button>
            </div>
            { showPopup ? <Popup add={this.addTransaction} closePopup={this.togglePopup} /> : null }
          </div>
        ) : (
          <div>
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button css={otherAddButton} onClick={this.togglePopup}> Add Transaction </button>
            </div>
            <TransactionList edit={this.editTransaction} items={transactions} remove={this.removeTransaction} />
            { showPopup ? <Popup add={this.addTransaction} closePopup={this.togglePopup} /> : null }
          </div>
        )}
      </div>
    )
  }
}

const formStyle = css`
    display: grid;
    text-align: center;
    grid-row-gap: 10px;
    padding: 8px;
    text-decoration: underline;
`
const noTransactions = css`
  display: flex;
  text-align: center;
  position:relative;
  flex-direction: column;
  `
const addButton = css`
  border-radius: 12px;
  margin: auto;
`
const otherAddButton = css`
    border-radius: 12px;
    margin-right: 152px;
    margin-bottom: 7px;
`
