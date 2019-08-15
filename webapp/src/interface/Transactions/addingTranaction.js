/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import PropTypes from 'prop-types'
// import axios from 'axios'
import { css } from '@emotion/core'

class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      amount: 0,
      type: 'Credit',
      merchant: false,
      date: new Date().toLocaleDateString()
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  static propTypes = {
    closePopup: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  }

  onChangeHandler (e) {
    if (e.target.name === 'desc') {
      this.setState({ description: e.target.value })
    }
    if (e.target.name === 'amount') {
      this.setState({ amount: e.target.value })
    }
    if (e.target.name === 'type') {
      this.setState({ type: e.target.value })
    }
    if (e.target.name === 'user') {
      this.setState({ merchant: e.target.value })
    }
  }

  onSubmitHandler (e) {
    const { closePopup, add } = this.props
    this.setState({ date: new Date().toLocaleDateString() })
    e.preventDefault()
    add(this.state)
    closePopup()
  }

  render () {
    const { closePopup } = this.props
    const { description } = this.state
    return (
      <div css={popup}>

        <div css={popupInner} >
          <div css={exitButton}>
            <button onClick={closePopup}>X</button>
          </div>
          <h1 css={{ textAlign: 'center', marginTop: '0px' }}> Transaction Form </h1>
          <form css={form} onSubmit={this.onSubmitHandler}>

            <lable>
            Amount: $
              <input css={inputs} name='amount' onChange={this.onChangeHandler} step='0.01' type='number' />
            </lable>

            <label>
              Type:
              <select css={inputs} name='type' onChange={this.onChangeHandler}>
                <option value='Credit'> Credit </option>
                <option value='Debit'> Debit </option>
              </select>
            </label>

            <label>
              Are you a merchant?
              <select css={inputs} name='user' onChange={this.onChangeHandler} >
                <option value={false}> No </option>
                <option value> Yes </option>
              </select>
            </label>

            <label css={{ display: 'flex' }}>
              Description:
              <textarea col='500' css={largeBox} name='desc' onChange={this.onChangeHandler} rows='9' value={description} />
            </label>

            <input css={submitButton} onSubmit={this.onSubmitHandler} type='submit' />

          </form>
        </div>
      </div>
    )
  }
}

const popup = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`

const popupInner = css`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 10px;
  background: white;
`
const form = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px 0px 5px 15px;
`
const inputs = css`
  margin: 0px 0px 20px 5px;
`
const largeBox = css`
  margin: 0px 0px 10px 5px;
  width: 75%;
`
const exitButton = css`
  margin: 5px;
  text-align: right;
  outline: none;
`
const submitButton = css`
  width: 15%;
  height: 20px;
  margin: auto;
`
export default Popup
