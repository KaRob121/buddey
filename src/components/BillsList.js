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
        <div className="BillsList--billInfo">
          <input
            type="checkbox"
            name="name"
            value={bill.status}
            onChange={props.handleChange}
          />
          <h3>{bill.name}</h3>
          <h3>{currencyFormatter.format(bill.amountDue)}</h3>
          {/* adding 'T00:00:00' to dueDate string fixes issue of date being one day off} */}
          <h3>{new Date(bill.dueDate + 'T00:00:00').toLocaleDateString("en-US")}</h3>
          </div>
      </div>
    )
  })

  return (
    <div className="BillsList">
      <div className="BillsList--header">
        <div>
          <h2>Paid?</h2>
        </div>
        <div>
          <h2>Bill Name</h2>
          <button onClick={() => props.sortByName()}>Sort</button>
        </div>
        <div>
          <h2>Amount Due</h2>
          <button onClick={() => props.sortByAmount()}>Sort</button>
        </div>
        <div>
          <h2>Due Date</h2>
          <button onClick={() => props.sortByDate()}>Sort</button>
        </div>
      </div>
      {billsList}
    </div>
  )
}

export default BillsList