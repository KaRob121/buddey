import React from 'react'
import BillsList from './BillsList'

function Bills() {
  const [bill, setBill] = React.useState({
    name: "",
    amountDue: "",
    dueDate: "",
    status: "unpaid"
  })

  const [allBills, setAllBills] = React.useState([])

  // Parameters: None
  // Purpose: Adds a new bill object to the first index of bills list.
  function addBill() {
    setAllBills(prevAllBills => {
      return [
        bill,
        ...prevAllBills
      ]
    })
  }

  // Parameters: ind - The index of the bill object to remove from bills list.
  // Purpose: Removes a bill from bills list.
  function removeBill(ind) {
    setAllBills(prevAllBills => {
      const newList = [...prevAllBills]
      newList.splice(ind, 1)
      return newList
    })
  }

  // Parameters: None
  // Purpose: Sorts the bill list by name.
  function sortByName(ind) {
    setAllBills(prevAllBills => {
      const sortedByName = [...prevAllBills].sort((a,b) => {
        return a.name >= b.name ? 1 : -1
      })
      return sortedByName
    })
  }

  // Parameters: None
  // Purpose: Sorts the bill list by amount due.
  function sortByAmount(ind) {
    setAllBills(prevAllBills => {
      const sortedByAmount = [...prevAllBills].sort((a,b) => {
        return a.amountDue - b.amountDue
      })
      return sortedByAmount
    })
  }

  // Parameters: None
  // Purpose: Sorts the bill list by due date.
  function sortByDate(ind) {
    setAllBills(prevAllBills => {
      const sortedByDate = [...prevAllBills].sort((a,b) => {
        return a.dueDate >= b.dueDate ? 1 : -1
      })
      return sortedByDate
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
        value={bill.billName}
        onChange={handleChange}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount Due"
        name="amountDue"
        value={bill.amountDue}
        onChange={handleChange}
      />
      <input
        type="date"
        placeholder="Due Date"
        name="dueDate"
        value={bill.dueDate}
        onChange={handleChange}
      />
      <button type="submit" onClick={addBill}>Add a new bill</button>
      <BillsList
        allBills={allBills}
        removeBill={removeBill}
        sortByName={sortByName}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        handleChange={handleChange}
      />
    </div>
  )
}

export default Bills