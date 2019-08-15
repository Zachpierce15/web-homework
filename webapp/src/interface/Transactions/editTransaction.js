/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

class EditingTransaction extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props.data
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired
  }

  onChangeHandler (e) {
    if (e.target.name === 'amount') {
      this.setState({ amount: e.target.value })
    }
    if (e.target.name === 'type') {
      this.setState({ type: e.target.value })
    }
    if (e.target.name === 'desc') {
      this.setState({ description: e.target.value })
    }
    if (e.target.name === 'merchant') {
      this.setState({ merchant: e.target.value })
    }
  }

  onSubmitHandler (e) {
    const { edit } = this.props
    e.preventDefault()
    edit(this.state)
  }

  render () {
    const { amount, description, date } = this.state
    return (
      <div css={Items}>
        <form onSubmit={this.onSubmitHandler}>

          <div css={transactionLeft}>
            <div css={dateCss} >
          Transaction Date:{' ' + date}
            </div>
            <div css={eachItem}>
          Amount: {' '}
              <input name='amount' onChange={this.onChangeHandler} type='number' value={Number(amount)} />
            </div>
            <div css={eachItem}>
          Type: {' '}
              <select name='type' onChange={this.onChangeHandler}>
                <option value='Credit'>Credit</option>
                <option value='Debit'>Debit</option>
              </select>
            </div>
          </div>

          <div css={transactionRight}>
            <div css={eachItem}>
          Merchant Transaction:
              {' '}
              <select>
                <option value >Yes</option>
                <option value={false} >No</option>
              </select>
            </div>

          </div>
          <div css={{ margin: '0px 0px 10px 10px' }}>
        Description:
          </div>
          <div css={desc}>
            <textarea col='20' css={textBox} name='desc' onChange={this.onChangeHandler} rows='8' value={description} />
          </div>
          <div css={submitDiv}>
            <input css={submitButton} onSubmit={this.onSubmitHandler} type='submit' value={'Save'} />
          </div>
        </form>
      </div>
    )
  }
}
export default EditingTransaction

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
  grid-template-columns: 100%;
  border-style: solid;
  border-width: 1px;
  width: 711px;
  margin: auto;
  background-color: aliceblue;
`
const desc = css`
  margin: 10px 10px 10px 10px;
  width: 685px;
  height: 119px;
`
const eachItem = css`
   margin: 10px 5px 5px 10px;
`
const textBox = css`
  width: 672px;
  height: 119px;
  font-size: medium;
`
const dateCss = css`
   margin: 10px 5px 5px 10px;
   text-align: right;
   width: 93%;
`
const submitButton = css`
   margin: 2px 5px 5px 10px;
   width: 90%;
`
const submitDiv = css`
  width: 10%;
  text-align: right;
  margin: 0px 18px 0px 0px;
`
