import React from 'react'
import MoreBillInfo from './MoreBillInfo'
import '../styles/BillsList.css'

function billMouseOverHandler(event) {
  event.currentTarget.classList.toggle("bg-hover")
}

function billMouseOutHandler(event) {
  event.currentTarget.classList.toggle("bg-hover")
}

function BillsList(props) {
  const billsList = props.allBills.map((bill, ind) => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      <tr 
        className="BillsList--bill" 
        key={bill.bill_id} 
        onMouseOver={billMouseOverHandler} 
        onMouseOut={billMouseOutHandler}
      >
        <td>
          <button onClick={() => props.removeBill(bill.bill_id)}>x</button>
        </td>
        <td>
          <h3>{bill.name}</h3>
        </td>
        <td className="right-align">
          <h3>{bill.amount_due}</h3>
        </td>
        <td className="right-align">
          <h3>{new Date(bill.due_date).toLocaleDateString("en-US")}</h3>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="left-align">
              <h3>Bill Name</h3>
              <button onClick={() => props.sortByName()}>Sort</button>  
            </th>
            <th className="right-align">
              <h3>Amount Due</h3>
              <button onClick={() => props.sortByAmount()}>Sort</button>
            </th>
            <th className="right-align">
              <h3>Due Date</h3>
              <button onClick={() => props.sortByDate()}>Sort</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {billsList}
        </tbody>
      </table>
    </div>
  )
}

export default BillsList