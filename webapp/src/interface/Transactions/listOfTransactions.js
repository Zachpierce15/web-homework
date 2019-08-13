import React from 'react'
import Item from './eachTransaction'

const item = [{
  id: 1,
  amount: 10,
  type: 'Credit',
  merchant: 'No',
  date: '11:00 AM',
  description: 'Hello this is a really long thing to write when it is just a testadasfasd;fasdjsdlfjasd;lfkasjdf;lasdkjfa;sldfjas;lfkas'
},
{
  id: 2,
  amount: 1500,
  type: 'Debit',
  merchant: 'Yes',
  date: '1:00 PM',
  description: 'I am better than all of you'
}]

const TransactionList = (props) => (
  <div>
    {
      item.map(item => {
        return <Item item={item} key={item.id} />
      })
    }
  </div>
)
export default TransactionList
