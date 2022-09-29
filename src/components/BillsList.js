import React from 'react'
import MoreBillInfo from './MoreBillInfo'
import '../styles/BillsList.css'

function billMouseOverHandler(event) {
  event.currentTarget.classList.toggle("bg-hover")
}

function billMouseOutHandler(event) {
  event.currentTarget.classList.toggle("bg-hover")
}

function billClickHandler(event) {
}

function BillsList(props) {
  const billsList = props.allBills.map((bill, ind) => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      <div
        className="BillsList--bill"
        key={bill.bill_id}
        onMouseOver={billMouseOverHandler}
        onMouseOut={billMouseOutHandler}
        onClick={billClickHandler}
      >
        <div className="bill-item">
          <button onClick={() => props.removeBill(bill.bill_id)}>x</button>
        </div>
        <div className="bill-item">
          <h3>{bill.name}</h3>
        </div>
        <div className="bill-item right-align">
          <h3>{bill.amount_due}</h3>
        </div>
        <div className="bill-item right-align">
          <h3>{new Date(bill.due_date).toLocaleDateString("en-US")}</h3>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="heading-row">
        <div className="heading-item left-align">
          <h3>Bill Name</h3>
          <button onClick={() => props.sortByName()}>Sort</button>
        </div>
        <div className="heading-item right-align">
          <h3>Amount Due</h3>
          <button onClick={() => props.sortByAmount()}>Sort</button>
        </div>
        <div className="heading-item right-align">
          <h3>Due Date</h3>
          <button onClick={() => props.sortByDate()}>Sort</button>
        </div>
      </div>
      <div>
        {billsList}
      </div>
    </div>
  )
}

export default BillsList