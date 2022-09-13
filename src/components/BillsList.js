import React from 'react'
import '../styles/BillsList.css'

function BillsList(props) {
  const billsList = props.allBills.map((bill, ind) => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      <tr className="BillsList--bill" key={bill.bill_id}>
        <td>
          <button onClick={() => props.removeBill(bill.bill_id)}>x</button>
        </td>
        {/* <td>
          <input
            type="checkbox"
            name="name"
            value={bill.status}
            onChange={props.handleChange}
          />
        </td> */}
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
    <table >
      <thead>
        <tr>
          <th></th>
          {/* <th>
            <h3>Paid?</h3>
          </th> */}
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
  )
}

export default BillsList