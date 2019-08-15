import React from 'react'
import Item from './eachTransaction'
import PropTypes from 'prop-types'

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min)
  const maximum = Math.floor(max)
  return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

const TransactionList = (props) => {
  const { item } = props.items
  const { remove, edit } = props
  return (
    <div>
      {
        item.map(item => {
          let id = getRandomInt(1, 1000000)
          item.id = id
          return <Item edit={edit} item={item} key={id} remove={remove} />
        })
      }
    </div>
  )
}

TransactionList.propTypes = {
  items: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
}
export default TransactionList
