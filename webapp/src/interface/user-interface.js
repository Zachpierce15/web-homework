import React from 'react'
import { css } from '@emotion/core'

import Popup from './Transactions/addingTranaction'

export class UserInterface extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      transactions: [],
      showPopup: false
    }
    // Bind functions here that need to be passed down to other components
    this.togglePopup = this.togglePopup.bind(this)
  }

  togglePopup () {
    const { showPopup } = this.state
    this.setState({
      showPopup: !showPopup
    })
  }

  render () {
    const { transactions, showPopup } = this.state
    return (
      <div >
        <h1 css={formStyle}> Transactions </h1>
        { transactions.length === 0 ? (
          <div>
            <div css={noTransactions}>
          You have no transactions at this time
              <button css={addButton} onClick={this.togglePopup}> Add Transaction </button>
            </div>
            { showPopup ? <Popup closePopup={this.togglePopup} /> : null }
          </div>
        ) : (
          <div> Second </div>
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
