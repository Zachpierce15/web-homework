import React from 'react'
import { css } from '@emotion/core'

export class UserInterface extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      clicked: false
    }
    // Bind functions here that need to be passed down to other components
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (e) {
    this.setState({ user: e.target.value })
  }

  onSubmitHandler (e) {
    e.preventDefault()
    this.setState({ clicked: true })
  }

  render () {
    const { user, clicked } = this.state
    return (
      <div>
        {!clicked &&
        (
          <form css={formStyle} onSubmit={this.onSubmitHandler}>
            <label>User<input css={inputStyle} onChange={this.onChangeHandler} type='text' value={user} />
              <input type='submit' />
            </label>
          </form>
        )
        }
        {clicked &&
        (
          <div>
            {'Hello ' + user}
          </div>
        )
        }
      </div>
    )
  }
}

const formStyle = css`
    display: grid;
    grid-row-gap: 10px;
    padding: 8px;
`
const inputStyle = css`
  grid-row: 1;
  margin-left: 16px;
`
