import React from 'react'
import '../styles/EmptyBillsList.css'

function EmptyBillsList(props) {
    return (
        <div className="emptyBillsList">
            <h3>There are no bills.<br />Start tracking your bills by adding one below.</h3>
        </div>
    )
}

export default EmptyBillsList