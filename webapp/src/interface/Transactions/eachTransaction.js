import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import EditTransaction from './editTransaction'

class Item extends React.Component {
  constructor (props) {
    super(props)
    const { amount, type, merchant, date, description, id } = this.props.item
    this.state = {
      edit: false,
      amount: amount,
      type: type,
      date: date,
      merchant: merchant,
      description: description,
      id: id
    }
    this.makeEdit = this.makeEdit.bind(this)
  }

  static propTypes = {
    item: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }

  makeEdit () {
    this.setState({ edit: !this.state.edit })
  }

  render () {
    // const { edit, description, amount, type, date, cuerrentMerchant } = this.state
    const { item, remove, edit } = this.props
    const { amount, type, merchant, date, description } = item

    if (this.state.edit) {
      return (
        <div>
          <EditTransaction data={this.state} edit={edit} remove={remove} />
        </div>
      )
    } else {
      let printMerchant
      if (merchant === false) {
        printMerchant = 'No'
      } else { printMerchant = 'Yes' }
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
              Merchant Transaction: {' ' + printMerchant}
            </div>
            <div css={eachItem} >
              Date:{' ' + date}
            </div>
          </div>
          <div>
            <button onClick={this.makeEdit}>Edit</button>
            <button onClick={() => remove(this.state)}>Remove</button>
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
