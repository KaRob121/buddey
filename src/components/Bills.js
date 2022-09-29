import React, { useEffect } from 'react'
import BillsList from './BillsList'
import EmptyBillsList from './EmptyBillsList'
import AddBillForm from './AddBillForm'
import MoreBillInfo from './MoreBillInfo'
import '../styles/Bills.css'

function Bills() {
  const [bill, setBill] = React.useState({
    name: "",
    amountDue: "",
    dueDate: "",
    status: "unpaid"
  })

  const [allBills, setAllBills] = React.useState([])

  useEffect(() => {
    getBills();
  }, []);

  async function getBills() {
    try {
      const response = await fetch("http://localhost:3001/bills")
      const jsonData = await response.json()

      setAllBills(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  // Parameters: None
  // Purpose: Create a new bill object to the first index of bills list.
  async function createBill(event) {
    // prevents page refresh when submitting form
    event.preventDefault()

    // send created bill to database
    try {
      const body = JSON.stringify(bill)
      const response = await fetch("http://localhost:3001/bills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body
      })

      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }

    // update state
    setAllBills(prevAllBills => {
      return [
        bill,
        ...prevAllBills
      ]
    })
  }

  // Parameters: billId - The id of the bill object to remove from bills list.
  // Purpose: Removes a bill from bills list.
  async function removeBill(billId) {
    try {
      const removeBill = await fetch(`http://localhost:3001/bills/${billId}`, {
        method: "DELETE"
      })

      setAllBills(allBills.filter(bill => bill.bill_id !== billId))
    } catch (error) {
      console.error(error.message)
    }
  }

  // Parameters: None
  // Purpose: Sorts the bill list by name.
  function sortByName(ind) {
    setAllBills(prevAllBills => {
      const sortedByName = [...prevAllBills].sort((a, b) => {
        return a.name >= b.name ? 1 : -1
      })
      return sortedByName
    })
  }

  // Parameters: None
  // Purpose: Sorts the bill list by amount due.
  function sortByAmount(ind) {
    setAllBills(prevAllBills => {
      const sortedByAmount = [...prevAllBills].sort((a, b) => {
        let currAsNumber1 = Number(a.amount_due.replace(/[^0-9.-]+/g, ""))
        let currAsNumber2 = Number(b.amount_due.replace(/[^0-9.-]+/g, ""))
        return currAsNumber1 - currAsNumber2
      })
      return sortedByAmount
    })
  }

  // Parameters: None
  // Purpose: Sorts the bill list by due date.
  function sortByDate(ind) {
    setAllBills(prevAllBills => {
      const sortedByDate = [...prevAllBills].sort((a, b) => {
        return a.due_date >= b.due_date ? 1 : -1
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
      <h1>Bills</h1>
      {
        allBills.length == 0 ?
          <EmptyBillsList />
          :
          <BillsList
            allBills={allBills}
            removeBill={removeBill}
            sortByName={sortByName}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            handleChange={handleChange}
          />
      }
      <AddBillForm
        bill={bill}
        createBill={createBill}
        handleChange={handleChange}
      />
    </div>
  )
}

export default Bills