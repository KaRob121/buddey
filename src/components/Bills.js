import React from 'react'
import '../styles/Bills.css'

function Bills() {
  const [bill, setBill] = React.useState({
    name: "",
    amountDue: "",
    dueDate: ""
  })

  const [allBills, setAllBills] = React.useState([])

  const billsList = allBills.map((bill, ind) => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      <div className="Bills--bill" key={ ind } >
        <button onClick={ () => removeBill(ind) }>x</button>
        <h1>{ bill.name }</h1>
        <h1>{ currencyFormatter.format(bill.amountDue) }</h1>
        <h1>{ new Date(bill.dueDate).toLocaleDateString("en-US") }</h1>
      </div>
    )
  })

  function addBill() {
    setAllBills(prevAllBills => {
      return [
        bill,
        ...prevAllBills
      ]
    })
  }

  function removeBill(ind) {
    setAllBills(prevAllBills => {
      const newList = [...prevAllBills]
      newList.splice(ind, 1)
      return newList
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
        name="name"
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
      <button type="submit" onClick={ addBill }>Add a new bill</button>
      <div className="Bills-list">
        { billsList }
      </div>
    </div>
  )
}

export default Bills