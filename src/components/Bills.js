import React from 'react'

function Bills() {
  const [bill, setBill] = React.useState({
    billName: "",
    amountDue: "",
    dueDate: ""
  })

  const [allBills, setAllBills] = React.useState([])

  const billsList = allBills.map(bill => <h1>Hello</h1>)

  function addBill(event) {
    setAllBills(prevAllBills => {
      return [
        bill,
        ...prevAllBills
      ]
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setBill(prevBill => {
      return {
        ...prevBill,
        [name]: value
      }
    })
  }

  return (
    <div className="Bills">
      <input 
        type="text" 
        placeholder="Bill Name"
        name="billName"
        value={ bill.billName }
        onChange={ handleChange }
      />
      <input 
        type="number" 
        step="0.01" 
        placeholder="Amount Due"
        name="amountDue"
        value={ bill.amountDue }
        onChange={ handleChange }
      />
      <input 
        type="date" 
        placeholder="Due Date"
        name="dueDate"
        value={ bill.dueDate }
        onChange={ handleChange }
      />
      <button type="reset" onClick={ addBill }>Add a new bill</button>
      { billsList }
    </div>
  )
}

export default Bills