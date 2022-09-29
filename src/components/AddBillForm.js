import React from 'react'

function AddBillForm(props) {
  return (
    <div>
      <h1>Add a new bill</h1>
      <form onSubmit={props.createBill}>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Bill Name"
            name="name"
            value={props.bill.billName}
            onChange={props.handleChange}
          />
          <input
            type="number"
            step="0.01"
            placeholder="Amount Due"
            name="amountDue"
            value={props.bill.amountDue}
            onChange={props.handleChange}
          />
          <input
            type="date"
            placeholder="Due Date"
            name="dueDate"
            value={props.bill.dueDate}
            onChange={props.handleChange}
          />
        </div>
        <button type="submit">Add a new bill</button>
      </form>
    </div>
  )

}

export default AddBillForm