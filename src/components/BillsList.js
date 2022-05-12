import React from 'react'
import '../styles/BillsList.css'

function BillsList(props) {
  const billsList = props.allBills.map((bill, ind) => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      <div className="BillsList--bill" key={ind} >
        <button onClick={() => props.removeBill(ind)}>x</button>
        <h3>{bill.name}</h3>
        <h3>{currencyFormatter.format(bill.amountDue)}</h3>
        <h3>{new Date(bill.dueDate).toLocaleDateString("en-US")}</h3>
      </div>
    )
  })

  return (
    <div className="BillsList">
      <div className="BillsList--header">
        <h2>Bill Name</h2>
        <h2>Amount Due</h2>
        <h2>Due Date</h2>
      </div>
      {billsList}
    </div>
  )
}

export default BillsList