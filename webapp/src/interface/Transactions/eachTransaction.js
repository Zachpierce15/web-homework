import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    item: PropTypes.object.isRequired
    // amount: PropTypes.number.isRequired,
    // id: PropTypes.number.isRequired,
    // type: PropTypes.string.isRequired,
    // merchant: PropTypes.string.isRequired,
    // date: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired
  }

  render () {
    const { item } = this.props
    const { amount, type, merchant, date, description } = item
    return (
      <div css={Items}>

        <div css={transactionLeft}>

          <div css={eachItem}>
            Amount: {' $' + amount}
          </div>
          <div css={eachItem}>
            Type:{' ' + type}
          </div>
        </div>

        <div css={transactionRight}>
          <div css={eachItem}>
            Merchant Transaction: {' ' + merchant}
          </div>
          <div css={eachItem} >
            Date:{' ' + date}
          </div>
        </div>
        <div>
          <button>Remove</button>
        </div>
        <div css={{ margin: '0px 0px 10px 10px' }}>
          Description:
        </div>
        <div css={desc}>
          {description}
        </div>
      </div>
    )
  }
}
export default Item

const transactionLeft = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 15px;
  `
const transactionRight = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: '10px 5px 15px 5px';
  margin-bottom: 15px;

  `
const Items = css`
  display: grid;
  grid-template-columns: 30% 57% 13%;
  border-style: solid;
  border-width: 1px;
  width: 711px;
  margin: auto;
  background-color: aliceblue;
`
const desc = css`
  margin: 10px 10px 10px 10px;
`
const eachItem = css`
   margin: 10px 5px 5px 10px;
`
